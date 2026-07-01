export function HeroSection({ sectionRef, className }) {
  return (
    <section id="home" ref={sectionRef} className={className}>
      <div className="hero-content">
        <p className="status-pill">Available For Opportunities</p>
        <h1>Frontend Developer &amp; UI/UX Designer</h1>
        <p className="hero-copy">
          I design and develop user-centered digital experiences that are intuitive,
          responsive, and built for real-world impact.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Let&rsquo;s Talk
          </a>
          <a href="#projects" className="btn btn-light">
            My Works
          </a>
        </div>
      </div>
    </section>
  );
}