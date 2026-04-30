import "../styles/Navbar.css"

const Navbar = () => {
    return (
<nav className="Navbar">
    <h1 className="navbar-title">E.Björkman</h1>
    <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
</nav>

    )
};

export default Navbar;