import "../styles/Navbar.css";

type NavbarProps = {
  onContactClick: () => void;
};

const Navbar = ({ onContactClick }: NavbarProps) => {
  return (
    <nav className="Navbar">
      <h1 className="navbar-title">EB</h1>
      <ul className="navbar-links">
        <li>
          <a href="#">Hem</a>
        </li>
        <li>
          <a href="#about">Om mig</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
      </ul>
      <button className="contact-button" onClick={onContactClick}>
        Lets talk
      </button>
    </nav>
  );
};

export default Navbar;
