import { useEffect, useState, useRef } from "react";
import "./TypingText.scss";

function TypingText() {
  const textArray = ["Frontend Developer", " AEM Developer"];
  const [textindex, settextindex] = useState(0);
  const movingTextRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      settextindex((prevIndex) => (prevIndex + 1) % textArray.length);
    };

    const movingTextElement = movingTextRef.current;
    movingTextElement.addEventListener('animationiteration', handleAnimationEnd);

    return () => {
      movingTextElement.removeEventListener('animationiteration', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="typing-text-container">
      <span className="steady-text">Hi I'm a</span>
      <span className="moving-text" ref={movingTextRef}>&nbsp;{textArray[textindex]}</span>
    </div>
  );
}

export default TypingText;
