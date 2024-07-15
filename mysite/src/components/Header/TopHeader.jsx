import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "../../common/Image/Image";
import Button from "../../common/Button/Button";
import HamBurger from "./HamBurger";
import { navbarData } from "../../mockData/Navbar";
import "./TopHeader.scss";
import HeaderButtons from "./HeaderButtons";

const TopHeader = ({ topHeader, clickHandler, isModalOpen }) => {
  console.log(topHeader);
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const checkWindowWidth = () => {
      if (window.innerWidth <= 1200) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    };
    window.addEventListener("resize", checkWindowWidth);
    window.innerWidth <= 1200
      ? setIsMobileDevice(true)
      : setIsMobileDevice(false);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  });

  const hamBurgerClickHandler = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <div className="top-header">
      <div className="top-header__wrapper-right">
        <Image cname="header-logo" imgSrc={topHeader.headerLogo} />
        <Navbar
          windowWidth={windowWidth}
          isMobileDevice={isMobileDevice}
          topHeader={topHeader}
          isMenuOpen={isMenuOpen}
          navbarData={navbarData}
          isModalOpen={isModalOpen}
          clickHandler={clickHandler}
        />
      </div>
      {!isMobileDevice && (
        <HeaderButtons
          isModalOpen={isModalOpen}
          clickHandler={clickHandler}
          topHeader={topHeader}
        />
      )}
      <HamBurger clickHandler={hamBurgerClickHandler} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default TopHeader;
