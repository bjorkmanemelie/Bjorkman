import "../styles/Hero.css";
import profileImage from "../assets/IMG_0990.JPG";

type HeroProp = {
  onContactClick: () => void;
};

const Hero = ({ onContactClick }: HeroProp) => {
  return (
    <section id="home">
      <div className="hero-content">
        <span className="hero-eyebrow">Portfolio</span>
        <h1 className="hero-name">Emelie Björkman</h1>
        <p className="hero-title">Fullstack Student</p>
        <p className="hero-description">
          I build things for the web — but when I'm not coding you'll find me
          in the kitchen, watching football, or somewhere new in the world.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onContactClick}>
            Let's talk
          </button>
          <a href="#projects" className="btn-secondary">
            View projects
          </a>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img src={profileImage} alt="Emelie Björkman" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
