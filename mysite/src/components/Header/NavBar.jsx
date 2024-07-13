import HeaderButtons from "./HeaderButtons";
import NavLink from "./NavLink";

function NavBar({ navbarData, isMenuOpen, topHeader, isMobileDevice, windowWidth }) {
  console.log(isMobileDevice, windowWidth)
  return (
    <nav className={`navbar navbar-header ${isMenuOpen ? "active" : ""}`}>
      {navbarData.length > 0 &&
        navbarData.map((navData, index) => (
          <NavLink key={index} navLink={navData.navLink} text={navData.text} />
        ))}
        {isMobileDevice && <HeaderButtons topHeader={topHeader}/>}
    </nav>
  );
}

export default NavBar;
