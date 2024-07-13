import Banner from "./src/components/Banner/Banner";
import Header from "./src/components/Header/Header";
import TypingText from "./src/components/TypingText/TypingText";

function App() {
  return (
    <>
      <Header />
      <Banner>
        <TypingText/>
      </Banner>
    </>
  );
}

export default App;
