import { useState } from "react";
import Button from "../../common/Button/Button";

function HeaderButtons({topHeader, clickHandler}) {


  return (
    <div className="header-buttons">
      {topHeader.buttons.length > 0 &&
        topHeader.buttons.map((btnData, index) => (
          <Button clickHandler={clickHandler} key={index} btnData={btnData} />
        ))}
    </div>
  );
}

export default HeaderButtons;
