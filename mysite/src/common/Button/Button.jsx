import './Button.scss'

function Button({ btnData, clickHandler, isModalOpen }) {
  const { btnText, btnStyle, btnArrow, link } = btnData;
  return (
    <>
      <a download href={link || "javascript:void(0)"}
        className={`btn ${btnStyle} ${
          btnText.toLowerCase() === "search" ? "search-btn" : ""
        }`}
        onClick={!link ? clickHandler : ()=>{}}
      >
        {btnText}
      </a>
    </>
  );
}

export default Button;
