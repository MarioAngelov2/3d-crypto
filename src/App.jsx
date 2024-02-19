import CryptoPrices from "./components/CryptoPrices";
import EthereumDescription from "./components/EthereumDescription";
import Footer from "./components/Footer";
import LetterCanvas from "./components/LetterCanvas";
import Nav from "./components/Nav";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="w-[100%] bg-gray-950">
      <Nav />
      <div className="h-[150vh]">
        <LetterCanvas />
      </div>
      <CryptoPrices />
      <EthereumDescription />
      <div className="pb-24 bg-white">
        <Slider />
      </div>
      <Footer />
    </div>
  );
}

export default App;
