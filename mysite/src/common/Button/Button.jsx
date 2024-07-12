import Image from "../Image/Image";
import './Button.scss'

function Button({ btnData }) {
  const { btnText, clickHandler, btnStyle, btnArrow, link } = btnData;
  return (
    <>
      <a href={link}
        className={`btn ${btnStyle} ${
          btnText.toLowerCase() === "search" ? "search-btn" : ""
        }`}
        onClick={clickHandler}
      >
        {btnText} {btnArrow && <Image imgSrc={btnArrow} imgAlt={btnStyle} />}
      </a>
    </>
  );
}

export default Button;
