import useProjects from "../hooks/useProjects";

const Projects = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="projects">
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;