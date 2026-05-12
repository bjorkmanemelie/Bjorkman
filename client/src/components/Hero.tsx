import "../styles/Hero.css";

type HeroProp = {
  onContactClick: () => void;
};
const Hero = ({ onContactClick }: HeroProp) => {
  return (
    <section id="home">
      <h1 className="hero-h1">Fullstack developer</h1>
      <h2 className="hero-h2">Björkman</h2>
      <p className="hero-p">
        Just nu halvvägs genom min Fullstack utbildning hos Chas Academy med
        drivet att lära mig mer. och mer..
      </p>
      <button onClick={onContactClick} className="hero-btn">
        Kontakta mig
      </button>
    </section>
  );
};

export default Hero;
