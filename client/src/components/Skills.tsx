import "../styles/Skills.css";

const frontend = ["JavaScript", "TypeScript", "React", "CSS"];
const backend = [
  "Node.js",
  "Express",
  "MongoDB",
  "JWT",
  "Zod",
  "Bcrypt",
  "Jest",
];
const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-header">My skills</h1>
      <div className="skills-columns">
        <div className="skills-column">
          <h2 className="h2-skills">Frontend</h2>
          <div className="skills-tags">
            {frontend.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h2 className="h2-skills">Backend</h2>
          <div className="skills-tags">
            {backend.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
