import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <h1 className="hero-h1">Fullstack developer</h1>
      <h2 className="hero-h2">Björkman</h2>
      <p>
        Just nu halvvägs genom Fullstack utbildning hos Chas Academy med drivet
        att lära mig mer.
      </p>
      <a href="#projects" className="hero-btn">
        Click to see my projects
      </a>{" "}
    </section>
  );
};

export default Hero;
