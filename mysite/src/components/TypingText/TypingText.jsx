import { useEffect, useState, useRef } from "react";
import "./TypingText.scss";

function TypingText() {
  const textArray = ["Frontend Developer", " AEM Developer"];
  const [textindex, settextindex] = useState(0);
  const movingTextRef = useRef(null);

  const handleAnimationEnd = () => {
    settextindex((prevIndex) => (prevIndex + 1) % textArray.length);
  };
//   useEffect(() => {


    // const movingTextElement = movingTextRef.current;
    // movingTextElement.addEventListener('animationiteration', handleAnimationEnd);

    // return () => {
    //   movingTextElement.removeEventListener('animationiteration', handleAnimationEnd);
    // };
//   }, []);

  return (
    <div className="typing-text-container">
      <span className="steady-text">I'm Bharath</span>
      <span className="moving-text" onAnimationIteration={handleAnimationEnd}  ref={movingTextRef}>&nbsp;I'm a {textArray[textindex]}</span>
    </div>
  );
}

export default TypingText;
