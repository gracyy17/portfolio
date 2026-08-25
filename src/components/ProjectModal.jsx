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
      </div>
      <div className="modal-gallery">
        {project.designs && project.designs.length > 0 ? (
          project.designs.map((design, index) => (
            <div key={index} className={`modal-design-item ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}>
              <div className="modal-design-image">
                <img src={design.src} alt={design.title} loading="lazy" />
              </div>
              <div className="modal-design-text">
                <h3>{design.title}</h3>
                <p>{design.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="modal-empty-state">
            <p>Design previews coming soon.</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
