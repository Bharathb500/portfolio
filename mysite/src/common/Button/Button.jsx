import './Button.scss'

function Button({ btnData, clickHandler }) {
  const { btnText, btnStyle, btnArrow, link } = btnData;
  return (
    <>
      <a download href={link || "javascript:void(0)"}
        className={`btn ${btnStyle} ${
          btnText.toLowerCase() === "search" ? "search-btn" : ""
        }`}
        onClick={clickHandler}
      >
        {btnText}
      </a>
    </>
  );
}

export default Button;
