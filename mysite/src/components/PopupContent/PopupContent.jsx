import Image from "../../common/Image/Image";

function PopupContent({ content }) {
  const { headerLogo, profileName, designation, mobileNo, emailId } = content;
  return <div className="popup-content">
    <Image imgSrc={headerLogo} imgAlt="profile"/>
    <div className="content">
        <h2>{profileName}</h2>
        <div>{designation}</div>
        <a href={`tel:${mobileNo}`}>{mobileNo}</a>
        <a href={`mailto:${emailId}`}>{emailId}</a>
    </div>
  </div>;
}

export default PopupContent;
