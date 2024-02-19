const prices = [
  { title: "Crypto Prices", link: "/crypto-prices" },
  { title: "Bitcoin Price", link: "/bitcoin-price" },
  { title: "Ethereum Price", link: "/ethereum-price" },
];

const news = [
  { title: "What's Trending", link: "/trending-news" },
  { title: "Market Updates", link: "/market-updates" },
  { title: "Product News", link: "/product-news" },
];

const company = [
  { title: "About Us", link: "/about-us" },
  { title: "Partnets", link: "/partners" },
  { title: "Security", link: "/security" },
];

const Footer = () => {
  return (
    <div className="bg-gray-900 min-h-48">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid items-center grid-cols-1 gap-4 px-6 py-10 mt-4 lg:grid-cols-4">
          <div className="flex flex-col">
            <a to="/" className="text-4xl text-[#c3fa01] font-black ">
              crypto
            </a>
            <p className="mt-4 text-sm text-gray-500 md:text-base">
              The best place to buy crypto
            </p>
          </div>
          <ul className="flex flex-col text-gray-500 justify-self-start lg:justify-self-center">
            <h1 className="mb-2 font-semibold uppercase">Buy</h1>
            {prices.map((link) => (
              <li key={link.title}>
                <a
                  to={link.link}
                  className="text-sm text-gray-500 transition duration-300 ease-in-out cursor-pointer hover:text-gray-200 md:text-base"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col justify-self-start lg:justify-self-center">
            <h1 className="mb-2 font-semibold text-gray-500 uppercase">
              Company
            </h1>
            {news.map((link) => (
              <li key={link.title}>
                <a
                  to={link.link}
                  className="text-sm text-gray-500 transition duration-300 ease-in-out cursor-pointer hover:text-gray-200 md:text-base"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col justify-self-start lg:justify-self-center">
            <h1 className="mb-2 font-semibold text-gray-500 uppercase">
              Find Us
            </h1>
            {company.map((link) => (
              <li key={link.title}>
                <a
                  to={link.link}
                  className="text-sm text-gray-500 transition duration-300 ease-in-out cursor-pointer hover:text-gray-200 md:text-base"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
