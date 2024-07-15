import { useState } from "react";
import Button from "../../common/Button/Button";

function HeaderButtons({topHeader, clickHandler, isModalOpen}) {


  return (
    <div className="header-buttons">
      {topHeader.buttons.length > 0 &&
        topHeader.buttons.map((btnData, index) => (
          <Button isModalOpen={isModalOpen} clickHandler={clickHandler} key={index} btnData={btnData} />
        ))}
    </div>
  );
}

export default HeaderButtons;
