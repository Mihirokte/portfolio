const HOME = import.meta.env.VITE_HOME_URL ?? import.meta.env.BASE_URL

export function TopBar() {
  return (
    <header className="topbar">
      <a className="brand" href="#/">
        prep
      </a>
      <a className="home-link" href={HOME}>
        Back to site
      </a>
    </header>
  )
}

export function NotFound() {
  return (
    <div className="page">
      <h1>nothing here</h1>
      <a className="crumb" href="#/">
        Home
      </a>
    </div>
  )
}
