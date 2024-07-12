import "./HamBurger.scss";
function HamBurger({ clickHandler, isMenuOpen }) {
  return (
    <div onClick={clickHandler} className="header-hamburger">
      <div
        className={`hamburger row-1 ${isMenuOpen ? "translate-row-1" : ""}`}
      ></div>
      {!isMenuOpen && <div className="hamburger row-2"></div>}
      <div
        className={`hamburger row-3 ${isMenuOpen ? "translate-row-3" : ""}`}
      ></div>
    </div>
  );
}

export default HamBurger;
