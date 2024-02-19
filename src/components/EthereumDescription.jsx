import EthereumCanvas from "./EthereumCanvas";

const EthereumDescription = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col w-screen h-[100vh] pb-24 max-w-6xl md:gap-8 mx-auto bg-gray-900 md:h-[60vh] md:flex-row">
        <EthereumCanvas />
        <div className="text-white md:max-w-[50%] flex">
          <div className="flex items-center justify-center px-12">
            <p className="text-sm tracking-wider md:text-xl text-start">
              Ethereum is a decentralized open-source blockchain platform that
              enables the creation and execution of smart contracts and
              decentralized applications (DApps). Introduced in 2015 by Vitalik
              Buterin, Ethereum goes beyond the capabilities of Bitcoin by
              providing a programmable platform for developers to build diverse
              applications on its blockchain. Ether (ETH) is the native
              cryptocurrency of the Ethereum network, used to facilitate
              transactions and compensate network participants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthereumDescription;
