import {
  SiCplusplus,
  SiCss,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiXampp,
} from './SimpleIcons.jsx';

import { SectionBackdrop } from './SectionBackdrop.jsx';

function ResponsiveWebIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="3.5"
        y="5"
        width="13.5"
        height="9.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <rect x="7" y="16.2" width="8" height="1.8" rx="0.9" fill="currentColor" opacity="0.9" />
      <path
        d="M18 7.2h2.6v7.7H18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M18.8 9.2h1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ApiIntegrationIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M8 6 4 12l4 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 6l4 6-4 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 18 14 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CodeEditorIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="4.5" width="17" height="14.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9.2 5.8 12 8 14.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 9.2 18.2 12 16 14.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 15.2 13 8.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const techGroups = [
  {
    badge: '01',
    label: 'Programming Languages',
    description: 'Core languages and markup I use to build and style products.',
    accent: '#ff67c6',
    items: [
      { name: 'C++', icon: SiCplusplus, color: '#9b7bff' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'Dart', icon: SiDart, color: '#00b4ab' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
    ],
  },
  {
    badge: '02',
    label: 'Frontend Frameworks',
    description: 'Interfaces and responsive systems I use to shape polished experiences.',
    accent: '#55bfff',
    items: [
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'Flutter', icon: SiFlutter, color: '#42a5f5' },
      { name: 'Responsive Web Design', icon: ResponsiveWebIcon, color: '#f4edf8' },
    ],
  },
  {
    badge: '03',
    label: 'Backend & Databases',
    description: 'Server logic, databases, and cloud tools for structured application flow.',
    accent: '#8cf7c9',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#8cc84b' },
      { name: 'Express.js', icon: SiExpress, color: '#f4edf8' },
      { name: 'Firebase', icon: SiFirebase, color: '#ffcb2b' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: '#5ab5ff' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    ],
  },
  {
    badge: '04',
    label: 'Tools & Platforms',
    description: 'Everyday tools I use to prototype, ship, collaborate, and debug quickly.',
    accent: '#ffb35c',
    items: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#f4edf8' },
      { name: 'REST API Integration', icon: ApiIntegrationIcon, color: '#f4edf8' },
      { name: 'Visual Studio Code', icon: CodeEditorIcon, color: '#3ea6ff' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'XAMPP', icon: SiXampp, color: '#fb7a24' },
    ],
  },
];

function SkillChip({ skill }) {
  const Icon = skill.icon;

  return (
    <span className="skill-chip" style={{ '--skill-color': skill.color }}>
      <Icon className="skill-chip-icon" aria-hidden="true" focusable="false" />
      <span>{skill.name}</span>
    </span>
  );
}

function TechGroupCard({ group }) {
  return (
    <article className="tech-category" style={{ '--tech-accent': group.accent }}>
      <div className="tech-category-header">
        <span className="tech-category-badge" aria-hidden="true">
          {group.badge}
        </span>
        <div>
          <p className="tech-category-kicker">{group.label}</p>
          <p className="tech-category-copy">{group.description}</p>
        </div>
      </div>

      <div className="tech-chip-grid" aria-label={group.label}>
        {group.items.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </article>
  );
}

export function TechStackShowcase({ sectionRef, className }) {
  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className={className || 'section tech-stack-showcase slide-bg'}
    >
      <SectionBackdrop />

      <div className="tech-stack-shell">
        <aside className="tech-stack-intro">
          <h4 className="eyebrow">Technical Skills</h4>
          
        </aside>

        <div className="tech-stack-grid">
          {techGroups.map((group) => (
            <TechGroupCard key={group.label} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
