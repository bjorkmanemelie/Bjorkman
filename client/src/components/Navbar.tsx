import "../styles/Navbar.css";

type NavbarProps = {
  onContactClick: () => void;
};

const Navbar = ({ onContactClick }: NavbarProps) => {
  return (
    <nav className="Navbar">
      <h1 className="navbar-title">E.<span className="navbar-title-accent">Björkman</span></h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
      <button className="contact-button" onClick={onContactClick}>
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
