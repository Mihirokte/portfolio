import StarScene from './components/StarScene'
import Hero from './components/Hero'
import Sections from './components/Sections'

const NAV = [
  ['about', '#about'],
  ['work', '#experience'],
  ['skills', '#skills'],
  ['projects', '#projects'],
  ['say hi', '#contact'],
]

export default function App() {
  return (
    <>
      <StarScene />
      <div className="vignette" aria-hidden />
      <div className="grain" aria-hidden />

      <nav className="top" aria-label="Primary">
        <a className="brand" href="#hero">
          mihir okte
        </a>
        <ul>
          {NAV.map(([label, href]) => (
            <li key={href}>
              <a className="link" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <Sections />
      </div>
    </>
  )
}
