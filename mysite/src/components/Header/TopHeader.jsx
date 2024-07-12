import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "../../common/Image/Image";
import Button from "../../common/Button/Button";
import HamBurger from "./HamBurger";
import { navbarData } from "../../mockData/Navbar";
import './TopHeader.scss';

const TopHeader = ({ topHeader }) => {
    console.log(topHeader)
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const hamBurgerClickHandler = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <div className="top-header">
      <div className="top-header__wrapper-right">
        <Image cname="header-logo" imgSrc={topHeader.headerLogo} />
        <Navbar isMenuOpen={isMenuOpen} navbarData={navbarData} />
      </div>
      <div className="header-buttons">
        {topHeader.buttons.length > 0 &&
          topHeader.buttons.map((btnData, index) => (
            <Button key={index} btnData={btnData} />
          ))}
      </div>
      <HamBurger clickHandler={hamBurgerClickHandler} isMenuOpen={isMenuOpen}/>
    </div>
  );
};

export default TopHeader;
