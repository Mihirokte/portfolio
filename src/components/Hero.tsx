import { TAGLINE } from '../content'

export default function Hero() {
  return (
    <section id="hero">
      <p className="eyebrow">software engineer · bengaluru</p>
      <h1>
        mihir
        <br />
        okte
      </h1>
      <div className="tag glass">
        <p>{TAGLINE}</p>
      </div>
    </section>
  )
}
