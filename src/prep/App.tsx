import { TopBar, NotFound } from './components/nav'
import { useHashRoute } from './useHashRoute'
import Home from './routes/Home'
import { CoursePage } from './routes/Study'
import { LessonPage } from './routes/Lesson'
import { DsaList } from './routes/Dsa'
import { DrillPage } from './routes/Drill'
import { CompanyIndex, CompanyPage } from './routes/Company'

// Declarative route table: first matching pattern wins.
const ROUTES: { re: RegExp; render: (m: RegExpExecArray) => React.ReactNode }[] = [
  { re: /^#\/study\/([^/]+)\/([^/]+)$/, render: (m) => <LessonPage courseKey={m[1]} lessonId={m[2]} /> },
  { re: /^#\/study\/([^/]+)$/, render: (m) => <CoursePage courseKey={m[1]} /> },
  { re: /^#\/dsa\/?$/, render: () => <DsaList /> },
  { re: /^#\/companies\/?$/, render: () => <CompanyIndex /> },
  { re: /^#\/company\/([^/]+)$/, render: (m) => <CompanyPage companyKey={m[1]} /> },
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
