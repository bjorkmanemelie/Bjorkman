import "../styles/Hero.css";
import profileImage from "../assets/profil.EB.jpeg";

type HeroProp = {
  onContactClick: () => void;
};
const Hero = ({ onContactClick }: HeroProp) => {
  return (
    <section id="home">
      <h2 className="hero-h2">Björkman</h2>
      <p className="hero-p">din text här</p>

      {<img src={profileImage} alt="Emelie Björkman" className="hero-image" />}
    </section>
  );
};

export default Hero;
