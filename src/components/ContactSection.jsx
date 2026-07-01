export function ContactSection({ sectionRef, className }) {
  return (
    <section id="contact" ref={sectionRef} className={className}>
      <div className="contact-banner">
        <h2>Let&rsquo;s Work Together</h2>
        <p>
          Ready to build something impactful? Send me a message and let&rsquo;s talk about
          your next project.
        </p>
        <a href="mailto:septimogracey@gmail.com" className="btn btn-primary">
          Send Email
        </a>
      </div>
    </section>
  );
}