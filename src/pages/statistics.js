import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import timer from "../assets/lotties/timer.json";
import Conversation from "../components/chat/conversation";
import useWindowSize from "../configs/windowSize";
import truck from "../assets/lotties/truck.json";
import { statisticsContext } from "../assets/constants/statisticsContext";

function Statistics() {
  const engChatQ1 = useRef(statisticsContext.mobile.q1);
  const [engChatA1, setEngChatA1] = useState([]);
  const [isGgbLoading, setIsGgbloading] = useState(true);

  // useEffect(() => {
  //   console.log(engChatA1);
  // }, [engChatA1]);

  const engOvRef = useRef(null);
  let userSize = useWindowSize();
  const sideNav = ["OV", "Q1", "A1a", "A1b"];

  const resetSidenavColor = () => {
    sideNav.forEach((page, index) => {
      const context = document.getElementById(page);
      if (context) context.style.color = "#FFFFFF";
    });
  };

  const handleScroll = (e) => {
    const newContext = document.getElementById(
      sideNav[Math.ceil(e.target.scrollTop / (userSize.height + 1))]
    );
    resetSidenavColor();
    if (newContext) newContext.style.color = "#6944FF";
  };

  useEffect(() => {
    const context = document.getElementById("OV");
    context && (context.style.color = "#6944FF");
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGgbloading(false);
      engOvRef?.current?.scrollIntoView({ block: "start" });
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (userSize.width >= 450) {
    return (
      <div className="relative">
        {isGgbLoading && (
          <div className="bg-white fixed w-screen h-screen flex flex-col items-center justify-center z-20">
            <div className="w-[500px] -ml-12 -mt-32">
              <Lottie animationData={truck} />
            </div>
            <h1 className="text-3xl font-[700] -mt-28">
              Initializing Geogebra, please wait.
            </h1>
          </div>
        )}
        <div className="w-fit h-full hidden justify-center items-center overflow-x-hidden overflow-y-auto absolute z-10 right-4 md:flex">
          <div className="flex flex-col w-fit">
            {sideNav.map((page, index) => {
              return (
                <div
                  key={index}
                  id={page}
                  className="w-[50px] h-[50px] text-md lg:text-xl font-bold flex justify-center items-center"
                  style={{ color: "#FFFFFF" }}
                >
                  {page}
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="engscroll"
          onScroll={handleScroll}
          className="w-[100vw] h-[100vh] overflow-scroll snap-mandatory snap-y scrollbar-hide"
        >
          <div
            className="w-full h-full bg-cover snap-start"
            style={{ backgroundImage: `url("/landingBackground.png")` }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                ref={engOvRef}
                id="eng-ov"
                className="flex flex-col bg-white bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="/landingBackground.png"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      Welcome! If you are not already know, this website
                      features real-world application uses of Calculus,
                      represented by Geogebra graphing tool to fully interact
                      with users!
                    </p>
                    <p className="font-light mt-4">
                      Before we start, viewing from mobile will not be able to
                      use Geogebra, instead, we come up with a stepped solution,
                      simulating by chat UI.
                    </p>
                    <p className="font-light mt-4">
                      Statistics category will be only focus in population rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
            style={{
              backgroundImage: `url("https://imgix.bustle.com/uploads/image/2022/3/17/4e8c86fb-143e-4fd3-87ca-6b2572d15cc7-elden-ring-columbus.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-black bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <h1 className="absolute hidden w-[300px] -ml-[132px] mt-[150px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    HEAVEN OR OHIO?
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://imgix.bustle.com/uploads/image/2022/3/17/4e8c86fb-143e-4fd3-87ca-6b2572d15cc7-elden-ring-columbus.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      907 thousand people still survive in Columbus this year.
                      Will the population grow or Ohioan is giving up?
                    </p>
                    <p className="font-light mt-4">
                      According to top-secret data in area 51, Columbus
                      population (measured in thousands) can be modeled by the
                      function{" "}
                      {
                        <span className="font-cm text-[16px] font-[300]">
                          P(t)=−t<sup>3</sup>/3+64t+907
                        </span>
                      }
                      , where{" "}
                      {
                        <span className="font-cm text-[16px] font-[300]">
                          t
                        </span>
                      }{" "}
                      is measured in years.
                    </p>
                    <p className="font-light mt-4">
                      Find the rate of change of the population growth at 4
                      years from now, and compare it to 8 years from now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Heaven or Ohio?
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                907 thousand people still survive in Columbus this year. Will
                the population grow or Ohioan is giving up?
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                According to top-secret data in area 51, Columbus population
                (measured in thousands) can be modeled by the function{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P(t)=−t<sup>3</sup>/3+64t+907
                  </span>
                }
                , where{" "}
                {<span className="font-cm text-[16px] font-[300]">t</span>} is
                measured in years.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Find the rate of change of the population growth at 4 years from
                now, and compare it to 8 years from now.
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                This question require basic differentiation knowledge. We
                strongly advise checking out economics and engineering section
                first, in order to keep up with the solution.
              </p>
              <p className="mb-6">
                differentiation is a process in Calculus, where we find the
                instantaneous rate of change in function based on one of its
                variables, and this question fits perfectly for this tool. There
                are 4 types of rate of change, increasingly increase,
                decreasingly increase, increasing decrease, and decreasingly
                decrease. Our goal is to find, which population trend does it
                belong to?
              </p>
              <p className="">
                We simplify the whole solution into a graph as shown below. Blue
                line represents population function. Orange Line is population
                fuction after being differentiated. year and graph visibilty and
                be change and interact.
              </p>
              <div className="mt-10 w-full flex justify-center">
                <iframe
                  title="iframee1"
                  src="https://www.geogebra.org/classic/vwux4pd5?embed"
                  width="700"
                  height="400"
                  style={{ borderRadius: "0.4em" }}
                  frameborder="0"
                ></iframe>
              </div>
              <div className="w-full flex justify-center mt-2">
                <a href="https://www.geogebra.org/classic/vwux4pd5?embed">
                  geogebra.org/classic/vwux4pd5?embed
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Heaven or Ohio?
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                907 thousand people still survive in Columbus this year. Will
                the population grow or Ohioan is giving up?
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                According to top-secret data in area 51, Columbus population
                (measured in thousands) can be modeled by the function{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P(t)=−t<sup>3</sup>/3+64t+907
                  </span>
                }
                , where{" "}
                {<span className="font-cm text-[16px] font-[300]">t</span>} is
                measured in years.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Find the rate of change of the population growth at 4 years from
                now, and compare it to 8 years from now.
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                When we differentiate an equation, we have do both sides. For
                example, the diffed population function is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P'(t)=−t<sup>2</sup>+64
                  </span>
                }{" "}
                or{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    dP/dt=−t<sup>2</sup>+64
                  </span>
                }
                . This is called "rate of change of the population".
              </p>
              <p className="mb-6">
                Next, make{" "}
                {<span className="font-cm text-[16px] font-[300]">t</span>}{" "}
                equals to 4 and 8, which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P'(4)=48
                  </span>
                }
                , and{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P'(8)=0
                  </span>
                }
                . That means the population in Columbus is surely increasing,
                but it is decreaingly increase, as seen from the green line
                graph.
              </p>
              <p>
                Additionally, after year 8.3 from the graph, we can see that it
                is increasingly decrease, or the decreasing rate is increasing.{" "}
                {
                  <a href="/category" className="font-[700] underline">
                    Click this to go back to category page.
                  </a>
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full">
        <div className="flex snap-x snap-mandatory h-full w-full mx:auto overflow-y-hidden overflow-x-scroll">
          <div className="relative snap-start shrink-0 bg-[#F5F5F5] w-full h-screen overflow-hidden">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{ backgroundImage: `url("/landingBackground.png")` }}
            >
              <div className="flex flex-row -ml-1">
                <div className="w-[25px] h-[25px]">
                  <Lottie animationData={timer} />
                </div>
                <p className="ml-1 font-light">8 min</p>
              </div>
              <h1 className="text-5xl font-bold">Statistics</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">
                Welcome! If you are not already know, this website features
                real-world application uses of Calculus, represented by Geogebra
                graphing tool to fully interact with users!
              </p>
              <p className="font-light mt-4">
                Before we start, viewing from mobile will not be able to use
                Geogebra, instead, we come up with a stepped solution,
                simulating by chat UI.
              </p>
              <p className="font-light mt-4">
                Statistics category will be only focus on population rate.
              </p>
              <p className="font-light mt-4 underline">
                Please kindly swipe left to get started.
              </p>
            </div>
          </div>
          <div className="relative snap-start shrink-0 bg-orange-200 w-screen h-screen">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{
                backgroundImage: `url("https://imgix.bustle.com/uploads/image/2022/3/17/4e8c86fb-143e-4fd3-87ca-6b2572d15cc7-elden-ring-columbus.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Population</p>
              </div>
              <h1 className="text-3xl font-bold">Heaven or Ohio?</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">
                907 thousand people still survive in Columbus this year. Will
                the population grow or Ohioan is giving up?
              </p>
              <p className="font-light mt-4">
                According to top-secret data in area 51, Columbus population
                (measured in thousands) can be modeled by the function{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    P(t)=−t<sup>3</sup>/3+64t+907
                  </span>
                }
                , where{" "}
                {<span className="font-cm text-[16px] font-[300]">t</span>} is
                measured in years.
              </p>
              <p className="font-light mt-4">
                Find the rate of change of the population growth at 4 years from
                now, and compare it to 8 years from now.
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              if (engChatQ1.current.length > 0) {
                const splicedQ1 = engChatQ1.current.shift();
                setEngChatA1((oldChatA1) => [...oldChatA1, splicedQ1]);
              }
            }}
            className="relative snap-start shrink-0 bg-blue-200 w-screen h-screen flex flex-col overflow-hidden"
          >
            <div className="w-full py-3 h-[] bg-[#263147]">
              <h1 className="text-xl text-white font-bold -mt-1 w-full text-center">
                Heaven or Ohio?
              </h1>
            </div>
            <Conversation chat={engChatA1} order="1" />
            {engChatQ1.current.length > 0 ? (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              </div>
            ) : (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#81d248] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-[700]">
                  Heaven or Ohio? Solved
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
