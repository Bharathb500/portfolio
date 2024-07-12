import Image from "../Image/Image";
import './Button.scss'

function Button({ btnData }) {
  const { btnText, clickHandler, btnStyle, btnArrow } = btnData;
  return (
    <>
      <button
        className={`btn ${btnStyle} ${
          btnText.toLowerCase() === "search" ? "search-btn" : ""
        }`}
        onClick={clickHandler}
      >
        {btnText} {btnArrow && <Image imgSrc={btnArrow} imgAlt={btnStyle} />}
      </button>
    </>
  );
}

export default Button;
