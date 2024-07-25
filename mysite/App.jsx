import { useState } from "react";
import AboutmePopup from "./src/components/AboutmePopup/AboutmePopup";
import Banner from "./src/components/Banner/Banner";
import Header from "./src/components/Header/Header";
import PopupContent from "./src/components/PopupContent/PopupContent";
import TypingText from "./src/components/TypingText/TypingText";
import { popupcontent } from "./src/mockData/Popupcontent";
import Skills from "./src/components/Skills/Skills";
import Title from "./src/components/Title/Title";
import ExperienceDetails from "./src/components/ExperienceDetails/ExperienceDetails";

function App() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const clickHandler = () => {
    setisModalOpen(!isModalOpen);
  }
  return (
    <>
      <Header isModalOpen={isModalOpen} clickHandler={clickHandler}/>
      <Banner>
        <TypingText />
      </Banner>
      <Skills/>
      <ExperienceDetails/>
      <AboutmePopup clickHandler={clickHandler} isModalOpen={isModalOpen}>
        <PopupContent  content={popupcontent}/>
      </AboutmePopup>
    </>
  );
}

export default App;
