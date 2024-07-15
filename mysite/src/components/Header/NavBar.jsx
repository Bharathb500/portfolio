import HeaderButtons from "./HeaderButtons";
import NavLink from "./NavLink";

function NavBar({ navbarData, isMenuOpen, topHeader, isMobileDevice, windowWidth, clickHandler }) {
  console.log(isMobileDevice, windowWidth)
  return (
    <nav className={`navbar navbar-header ${isMenuOpen ? "active" : ""}`}>
      {navbarData.length > 0 &&
        navbarData.map((navData, index) => (
          <NavLink key={index} navLink={navData.navLink} text={navData.text} />
        ))}
        {isMobileDevice && <HeaderButtons clickHandler={clickHandler} topHeader={topHeader}/>}
    </nav>
  );
}

export default NavBar;
