export function SiteHeader({ navigationItems, activeSection }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        GRACE.
      </a>
      <nav className="nav-pill" aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link${activeSection === item.id ? ' is-active' : ''}`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="btn btn-ghost" href="#contact">
        Hire Me
      </a>
    </header>
  );
}