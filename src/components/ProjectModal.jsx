export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        
        <div className="modal-header">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className="modal-gallery">
          {project.designs && project.designs.length > 0 ? (
            project.designs.map((designUrl, index) => (
              <div key={index} className="modal-design-wrapper">
                <img src={designUrl} alt={`${project.title} design ${index + 1}`} loading="lazy" />
              </div>
            ))
          ) : (
            <div className="modal-empty-state">
              <p>Detailed designs coming soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
