import Marquee from "react-fast-marquee";
import img1 from "/image1.jpeg";
import img2 from "/image2.png";
import img3 from "/image3.png";
import img4 from "/image4.png";
import img5 from "/image5.png";

const Slider = () => {
  return (
    <>
      <div className="bg-white">
        <h1 className="py-12 text-2xl font-bold text-center md:text-5xl">
          PARTNERSHIPS
        </h1>
      </div>

      <Marquee direction="left" speed={50} delay={1} className="bg-white">
        <div className="flex flex-row">
          <div className="ml-4">
            <img
              src={img1}
              alt="img1"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img2}
              alt="img2"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img3}
              alt="img3"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img4}
              alt="img4"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
        </div>
      </Marquee>

      <Marquee direction="right" speed={50} delay={1} className="mt-4 bg-white">
        <div className="flex flex-row">
          <div className="ml-4">
            <img
              src={img1}
              alt="img1"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img2}
              alt="img2"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img3}
              alt="img3"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img4}
              alt="img4"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
          <div className="ml-4">
            <img
              src={img5}
              alt="img5"
              className="h-20 p-4 border-[2px] md:h-40"
            />
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default Slider;
