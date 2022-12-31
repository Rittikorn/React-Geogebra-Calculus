import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import truck from "../assets/lotties/truck.json";
import useWindowSize from "../configs/windowSize";

function Landing() {
  let userSize = useWindowSize();
  const [sourceLoaded, setSourceLoaded] = useState(null);

  const useProgressiveImage = (src) => {
    useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => setSourceLoaded(src);
    }, [src]);

    return sourceLoaded;
  };

  const loaded = useProgressiveImage("/landingBackground.png");

  useEffect(() => {
    console.log(loaded);
  }, [loaded]);

  if (loaded) {
    if (userSize.width >= 450) {
      return (
        <div
          className="min-w-full h-[100vh] flex flex-row bg-cover px-[10%] py-[9%]"
          style={{ backgroundImage: `url("/landingBackground.png")` }}
        >
          <div className="">
            <h1 className="text-7xl text-white font-bold lg:text-8xl">
              We beg to DIFFer
            </h1>
            <div className="pt-14 max-w-full lg:max-w-[50%]">
              <p className="text-xl text-white font-[400] lg:text-2xl">
                Believe it or not, some AI-Generated image use Gradient Descent
                algorithm, a piece of code using derivative knowledge to
                deep-learn from data, represents as a path of climbing up the
                mountain
              </p>
            </div>
            <Link to="/category">
              <button className="bg-[#5FB4E4] text-white text-3xl font-bold w-[340px] h-[70px] flex justify-center items-center rounded-full mt-16 hover:bg-[#6FBFED] pb-1">
                <div className="pr-2">Learn more</div>
                <div className="pl-2">{">"}</div>
              </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-screen h-screen flex flex-col bg-cover relative"
          style={{ backgroundImage: `url("/landingBackground.png")` }}
        >
          <div className="max-w-full px-8 py-10 flex flex-col">
            <h1 className="text-6xl text-center leading-tight text-white font-bold lg:text-8xl">
              We beg to DIFFer
            </h1>
            <div className="pt-10 max-w-full">
              <p className="text-lg text-center font-thin text-white">
                Believe it or not, some AI-Generated image use Gradient Descent
                algorithm, a piece of code using derivative knowledge to
                deep-learn from data, represents as a path of climbing up the
                mountain
              </p>
            </div>
          </div>
          <div className="absolute w-screen bottom-16 px-8">
            <Link to="/category">
              <button className="bg-[#5FB4E4] text-white text-xl font-bold w-full h-[60px] flex justify-center items-center rounded-full hover:bg-[#6FBFED] pb-1">
                <div className="pr-2">Learn more</div>
                <div className="pl-2">{">"}</div>
              </button>
            </Link>
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

export default Landing;
