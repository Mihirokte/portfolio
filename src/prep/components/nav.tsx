import { useHashRoute } from '../useHashRoute'

const HOME = import.meta.env.VITE_HOME_URL ?? import.meta.env.BASE_URL

export function TopBar() {
  const hash = useHashRoute()
  const tab = hash.startsWith('#/gym') || hash.startsWith('#/drill') ? 'gym' : hash.startsWith('#/study') ? 'study' : 'home'
  return (
    <header className="topbar">
      <a className="brand" href="#/">
        prep
      </a>
      <nav className="tabs">
        <a className={`tab ${tab === 'study' ? 'on' : ''}`} href="#/study">
          study
        </a>
        <a className={`tab ${tab === 'gym' ? 'on' : ''}`} href="#/gym">
          problems
        </a>
      </nav>
      <a className="home-link" href={HOME}>
        ← site
      </a>
    </header>
  )
}

export function NotFound() {
  return (
    <div className="page">
      <h1>nothing here</h1>
      <a className="crumb" href="#/">
        ← home
      </a>
    </div>
  )
}
