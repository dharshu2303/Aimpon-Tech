import './Hero.css'

function Hero() {
  return (
    <section className="right-hero">
      <h1>
        Aimpon
        <br />
        Technologies
      </h1>

      <div className="tagline">
        <span>Innovate, Ideate, Inspire</span>
      </div>

      <div className="hero-description">
        <p>
          We build future-ready web apps that feel like tomorrow, today. Our
          passion is crafting immersive digital experiences with a sleek, modern
          edge.
        </p>
        <p>
          From concept to code, we transform ideas into powerful tools — minimal
          effort, maximum impact.
        </p>
      </div>

      <div className="cta-buttons">
        <a href="#" className="primary-cta">
          Get started →
        </a>
      </div>
    </section>
  )
}

export default Hero
