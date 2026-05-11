import useProjects from "../hooks/useProjects";
import "../styles/Projects.css";

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="projects" className="projects-section">
      {projects.map((project) => (
        <div key={project._id} className="project-card">
          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">{project.description}</p>
          <div className="project-technologies">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
