import './AboutmePopup.scss';
function AboutmePopup({children, isModalOpen, clickHandler}) {
  return (
    <>
    {isModalOpen && <div onClick={clickHandler} className={`about-me-popup ${isModalOpen ? 'modal-active' : ''}`}>{children}</div>}
    </>
  )
}

export default AboutmePopup