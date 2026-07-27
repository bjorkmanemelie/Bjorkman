import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2026 Emelie Björkman</p>
        <a
          href="https://github.com/bjorkmanemelie"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
