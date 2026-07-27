import "../styles/Skills.css";

const frontend = ["JavaScript", "TypeScript", "React", "CSS"];
const backend = ["Node.js", "Express", "MongoDB", "JWT", "Zod", "Bcrypt", "Jest"];

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="skills-header">
          <span className="skills-eyebrow">Stack</span>
          <h2 className="skills-heading">Skills</h2>
        </div>
        <div className="skills-columns">
          <div className="skills-column">
            <h3 className="h2-skills">Frontend</h3>
            <div className="skills-tags">
              {frontend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-column">
            <h3 className="h2-skills">Backend</h3>
            <div className="skills-tags">
              {backend.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
