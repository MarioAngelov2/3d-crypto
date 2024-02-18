import LetterCanvas from "./components/LetterCanvas";
import Slider from "./components/Slider";
import { data } from "./mock/data";

function App() {
  return (
    <div className="w-[100%] bg-gray-950">
      <div className="text-[#c3fa01] text-2xl md:text-6xl py-3 pl-10 flex-row flex">
        <b className="flex-1">crypto</b>
      </div>

      <div className="h-[150vh]">
        <LetterCanvas />
      </div>

      {/* SECONG PAGE */}
      <div className="bg-gray-900 min-h-[80vh]">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-20 mt-28">
            <h1 className="text-2xl font-semibold tracking-wider text-center text-white md:text-5xl">
              Buy Bitcoin, Ethereum, and 250+ cryptocurrencies
            </h1>
            <button className="text-white border rounded-3xl md:w-[35%] p-3 hover:bg-gray-800 transition duration-300 ease-in-out">
              Check crypto prices
            </button>
            <div className="grid w-full gap-8 px-2 pb-20 md:px-0 md:pb-0">
              {data.map((coin, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 md:grid-cols-12 md:gap-8 w-full md:w-[90%] mx-auto border-b-[0.5px] py-2"
                >
                  <div className="col-span-2 md:col-span-3">
                    <h1 className="text-lg font-semibold tracking-wider text-gray-300 md:text-2xl">
                      {coin.name}
                    </h1>
                  </div>
                  <div className="col-span-2 md:col-span-3">
                    <h1 className="text-lg font-bold tracking-wider text-white md:text-3xl text-end md:text-center">
                      {coin.price}
                    </h1>
                  </div>
                  <div className="col-span-2 md:col-span-3">
                    <h1 className="text-lg font-semibold tracking-wider text-green-500 md:text-xl md:text-center">
                      {coin.change}
                    </h1>
                  </div>
                  <div className="col-span-2 md:col-span-3 text-end md:text-end">
                    <h1 className="text-lg font-semibold tracking-wider text-white md:text-xl">
                      {coin.marketCap}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* THIRD PAGE */}
      <div className="pb-24 bg-white">
        <Slider />
      </div>
    </div>
  );
}

export default App;
