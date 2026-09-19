import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux'
import progressReducer, { type ProgressState } from './progressSlice'

// One-time migration: fold the pre-Redux localStorage progress
// (key 'prep-progress-v1', a flat {id: {status, notes, code}} map of PROBLEMS)
// into the new problems slice so nothing is lost.
function migrateLegacy(): ProgressState | undefined {
  try {
    const raw = localStorage.getItem('prep-progress-v1')
    if (!raw) return undefined
    const legacy = JSON.parse(raw) as Record<
      string,
      { status?: string; notes?: string; code?: string }
    >
    const problems: ProgressState['problems'] = {}
    for (const [id, v] of Object.entries(legacy)) {
      problems[id] = {
        status: (v.status as ProgressState['problems'][string]['status']) ?? 'none',
        notes: v.notes,
        code: v.code,
        updatedAt: new Date().toISOString(),
      }
    }
    return { lessons: {}, problems }
  } catch {
    return undefined
  }
}

const persistConfig = { key: 'prep-v2', version: 1, storage }
const persistedReducer = persistReducer(persistConfig, progressReducer)

export const store = configureStore({
  reducer: { progress: persistedReducer },
  middleware: (getDefault) =>
    getDefault({
      // redux-persist dispatches non-serializable actions internally
      serializableCheck: { ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'] },
    }),
})

export const persistor = persistStore(store, null, () => {
  // After rehydration, if the new store is empty but legacy data exists, adopt it.
  const state = store.getState().progress
  const empty =
    Object.keys(state.lessons).length === 0 && Object.keys(state.problems).length === 0
  if (empty) {
    const migrated = migrateLegacy()
    if (migrated) {
      import('./progressSlice').then(({ importAll }) => store.dispatch(importAll(migrated)))
    }
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
