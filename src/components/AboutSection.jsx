import { SectionBackdrop } from './SectionBackdrop.jsx';

export function AboutSection({
  sectionRef,
  className,
  socialLinks,
  aboutHighlights,
  portraitUrl,
  cvUrl,
}) {
  return (
    <section id="about" ref={sectionRef} className={className}>
      <SectionBackdrop />

      <div className="about-layout">
        <div className="about-profile">
          <div className="about-portrait">
            <img src={portraitUrl} alt="Portrait of Hellene Grace Septimo" />
          </div>

          <div className="about-social" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="social-link"
                aria-label={link.ariaLabel}
                target={link.target}
                rel={link.rel}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="about-copy">
          <h2>
            UI/UX Designer based in the Philippines with a background in frontend
            development
          </h2>
          <p className="about-intro">
            I am a Computer Engineering graduating student focused on designing
            user-centered digital experiences. With experience in UI/UX design,
            frontend development, mobile application development, and IoT-based
            projects, I build interfaces that are functional, intuitive, and visually
            engaging.
          </p>
          <a href={cvUrl} className="btn btn-light about-cta" target="_blank" rel="noreferrer">
            View CV
          </a>
        </div>
      </div>

      <div className="about-cards">
        {aboutHighlights.map((highlight) => (
          <article key={highlight.title} className="glass-card">
            <h3>
              {highlight.prefix ? <span>{highlight.prefix}</span> : null}
              {highlight.title}
            </h3>
            {highlight.detail ? <p>{highlight.detail}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}