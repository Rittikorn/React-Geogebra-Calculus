import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import timer from "../assets/lotties/timer.json";
import truck from "../assets/lotties/truck.json";
import useWindowSize from "../configs/windowSize";

function Category() {
  const userSize = useWindowSize();
  const [sourceLoaded, setSourceLoaded] = useState(null);

  const useProgressiveImage = (src) => {
    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
  };

  const loaded = useProgressiveImage("/gradientBackground.png");

  if (loaded) {
    if (userSize.width >= 450) {
      return (
        <div
          className="min-w-full h-[100vh] flex flex-row bg-cover justify-center items-center"
          style={{ backgroundImage: `url("/gradientBackground.png")` }}
        >
          <div className="text-white font-bold w-full h-full flex flex-col justify-center items-center pb-10 pt-10 px-16">
            <h1 className="text-4xl md:text-6xl mb-14 text-center">
              Three behemoth applications
            </h1>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-14 overflow-scroll scrollbar-hide">
              <Link to="/economics">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/economicsCard.png"
                    alt="econimics"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[30px] h-[30px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center ml-1">15 min</p>
                  </div>
                </div>
              </Link>
              <Link to="/engineering">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/engineeringCard.png"
                    alt="engineering"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[30px] h-[30px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center ml-1">10 min</p>
                  </div>
                </div>
              </Link>
              <Link to="/statistics">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/statisticsCard.png"
                    alt="statistics"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[30px] h-[30px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center ml-1">8 min</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="min-w-full h-[100vh] flex flex-row bg-cover justify-center items-center"
          style={{ backgroundImage: `url("/gradientBackground.png")` }}
        >
          <div className="text-white font-bold w-full h-full flex flex-col justify-center items-center pb-6 px-16">
            <h1 className="text-2xl mb-10 mt-2 text-center">
              Three behemoth applications
            </h1>
            <div className="w-screen px-[30%] grid grid-cols-1 gap-4 overflow-scroll">
              <Link to="/economics">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/economicsCard.png"
                    alt="econimics"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[25px] h-[25px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center text-sm ml-1">15 min</p>
                  </div>
                </div>
              </Link>
              <Link to="/engineering">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/engineeringCard.png"
                    alt="engineering"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[25px] h-[25px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center text-sm ml-1">10 min</p>
                  </div>
                </div>
              </Link>
              <Link to="/statistics">
                <div className="rounded-2xl cursor-pointer">
                  <img
                    className="rounded-2xl"
                    src="/statisticsCard.png"
                    alt="statistics"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-[25px] h-[25px]">
                      <Lottie animationData={timer} />
                    </div>
                    <p className="font-thin text-center text-sm ml-1">8 min</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        <div
          style={{
            width: "20%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlignLast: "center",
          }}
        >
          <Lottie animationData={truck} />
        </div>
      </div>
    );
  }
}

export default Category;
