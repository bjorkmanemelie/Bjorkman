import useProjects from "../hooks/useProjects";
import "../styles/Projects.css";

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <span className="projects-eyebrow">Work</span>
          <h2 className="projects-heading">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
