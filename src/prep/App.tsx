import { TopBar, NotFound } from './components/nav'
import { useHashRoute } from './useHashRoute'
import Home from './routes/Home'
import { StudyHome, CoursePage } from './routes/Study'
import { LessonPage } from './routes/Lesson'
import { GymHome, AreaList } from './routes/Gym'
import { DrillPage } from './routes/Drill'

// Declarative route table: first matching pattern wins. Adding a page is a
// one-line entry here plus its component — no branching logic to touch.
const ROUTES: { re: RegExp; render: (m: RegExpExecArray) => React.ReactNode }[] = [
  { re: /^#\/study\/([^/]+)\/([^/]+)$/, render: (m) => <LessonPage courseKey={m[1]} lessonId={m[2]} /> },
  { re: /^#\/study\/([^/]+)$/, render: (m) => <CoursePage courseKey={m[1]} /> },
  { re: /^#\/study\/?$/, render: () => <StudyHome /> },
  { re: /^#\/gym\/([^/]+)$/, render: (m) => <AreaList areaKey={m[1]} /> },
  { re: /^#\/gym\/?$/, render: () => <GymHome /> },
  { re: /^#\/drill\/(.+)$/, render: (m) => <DrillPage id={m[1]} /> },
  { re: /^#\/?$/, render: () => <Home /> },
]

export default function App() {
  const hash = useHashRoute()
  let view: React.ReactNode = <NotFound />
  for (const r of ROUTES) {
    const m = r.re.exec(hash)
    if (m) {
      view = r.render(m)
      break
    }
  }
  return (
    <div className="prep-root">
      <TopBar />
      {view}
    </div>
  )
}
