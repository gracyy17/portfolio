import { SectionBackdrop } from './SectionBackdrop.jsx';

function ProjectCard({ project, cardRef, isActive, isVisible, onClick }) {
  return (
    <article 
      ref={cardRef} 
      className={`project-card ${isActive ? 'is-active' : ''} ${!isVisible ? 'is-hidden' : ''}`}
      onClick={isVisible ? () => onClick(project) : undefined}
      style={{ cursor: isVisible ? 'pointer' : 'default' }}
    >
      <div className={`project-image ${project.imageClassName}`} />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="view-designs-prompt">Click to view designs</span>
      </div>
    </article>
  );
}

export function ProjectsSection({
  sectionRef,
  className,
  displayProjects,
  projectOffset,
  trackRef,
  bindProjectCardRef,
  projectIndex,
  isTransitioning,
  onProjectClick,
}) {
  return (
    <section id="projects" ref={sectionRef} className={className}>
      <SectionBackdrop />
      <p className="eyebrow">Projects</p>
      <h2>Featured Projects</h2>
      <p>
        Selected works from my CV spanning frontend development, UI/UX design, mobile
        application development, and IoT-based systems.
      </p>

      <div className="projects-stage">
        <div
          ref={trackRef}
          className="projects-track"
          data-track
          style={{ 
            transform: `translateX(-${projectOffset}px)`,
            transition: isTransitioning ? 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
          }}
        >
          {displayProjects.map((project, projectCardIndex) => {
            const distance = Math.abs(projectCardIndex - projectIndex);
            const isVisible = distance <= 1;

            return (
              <ProjectCard
                key={`${project.title}-${projectCardIndex}`}
                project={project}
                cardRef={bindProjectCardRef(projectCardIndex)}
                isActive={projectCardIndex === projectIndex}
                isVisible={isVisible}
                onClick={onProjectClick}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}