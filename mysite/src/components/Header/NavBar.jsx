import NavLink from "./NavLink";

function NavBar({ navbarData, isMenuOpen }) {
  return (
    <nav className={`navbar navbar-header ${isMenuOpen ? "active" : ""}`}>
      {navbarData.length > 0 &&
        navbarData.map((navData, index) => (
          <NavLink key={index} navLink={navData.navLink} text={navData.text} />
        ))}
    </nav>
  );
}

export default NavBar;
