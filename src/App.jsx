import LetterCanvas from "./components/LetterCanvas";

function App() {
  return (
    <div className="w-[100%] bg-gray-950">
      <div className="text-[#c3fa01] text-2xl md:text-6xl py-3 pl-10 flex-row flex">
        <b className="flex-1">crypto</b>
      </div>

      <div className="h-[200vh]">
        <LetterCanvas />
      </div>

      <div className="bg-gray-900 h-[50vh]">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <div className="mt-28 flex flex-col gap-20 items-center">
            <h1 className="text-white text-5xl font-semibold tracking-wider text-center">
              Buy Bitcoin, Ethereum, and 250+ cryptocurrencies
            </h1>
            <button className="text-white border rounded-3xl w-[35%] p-3 hover:bg-gray-800 transition duration-300 ease-in-out">
              Check crypto prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
