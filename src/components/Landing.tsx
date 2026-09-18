type Props = { onBegin: () => void; hidden: boolean }

export default function Landing({ onBegin, hidden }: Props) {
  return (
    <section id="hero" className={hidden ? 'hidden' : ''} aria-label="Intro">
      <div className="name-stack">
        <h1 className="half left">mihir</h1>
        <h1 className="half right">okte</h1>
        <p className="sun-eyebrow script">software engineer · bengaluru</p>
      </div>
      <button className="scroll-cue" onClick={onBegin} aria-label="Open">
        <span className="script">scroll</span>
        <span className="chev" aria-hidden />
      </button>
    </section>
  )
}
