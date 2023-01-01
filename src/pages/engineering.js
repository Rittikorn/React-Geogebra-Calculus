import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import timer from "../assets/lotties/timer.json";
import Conversation from "../components/chat/conversation";
import useWindowSize from "../configs/windowSize";
import truck from "../assets/lotties/truck.json";

function Engineering() {
  const engQ1C06 = () => {
    return (
      <p>
        I know it is{" "}
        <span className="font-cm text-[16px] font-[300]">
          width×length×height
        </span>
        , Which is{" "}
        <span className="font-cm text-[16px] font-[300]">
          f(h)=h(14−2h)(10−2h)
        </span>
        , but how do I get maximum volume by Differentiation method?
      </p>
    );
  };
  const engChatQ1 = useRef([
    {
      sender: "Bot",
      text: "Hello, I am math solving bot. This question does not really requires Calculus knowledge, instead, you have to plot a graph by hand yourself, and we do not like that.",
    },
    {
      sender: "Bot",
      text: "Differentiation is your big friend here, not only in the question, but also all questions we present on this website. So, do you know basic differentiation?",
    },
    {
      sender: "You",
      text: "Not really...",
    },
    {
      sender: "Bot",
      text: "That is ok.",
    },
    {
      sender: "Bot",
      text: "This question wants maximum pond volume. Do you know how to calculate the volume?",
    },
    {
      sender: "You",
      text: engQ1C06(),
    },
    {
      sender: "Bot",
      text: "There is a lot of background process, but to simplify the solution, we diff the volume function and make them equal to zero.",
    },
  ]);
  const engChatQ2 = useRef([
    {
      sender: "Bot",
      text: "Same as before...",
    },
    {
      sender: "Bot",
      text: "Differentiation is your big friend here, not only in the question, but also all questions we present on this website. So, do you know basic differentiation?",
    },
    {
      sender: "You",
      text: "Not really...",
    },
    {
      sender: "Bot",
      text: "That is ok.",
    },
    {
      sender: "Bot",
      text: "This question wants maximum pond volume. Do you know how to calculate the volume?",
    },
    {
      sender: "You",
      text: engQ1C06(),
    },
    {
      sender: "Bot",
      text: "There is a lot of background process, but to simplify the solution, we diff the volume function and make them equal to zero.",
    },
  ]);
  const [engChatA1, setEngChatA1] = useState([]);
  const [engChatA2, setEngChatA2] = useState([]);
  const [isGgbLoading, setIsGgbloading] = useState(true);

  // useEffect(() => {
  //   console.log(engChatA1);
  // }, [engChatA1]);

  const engOvRef = useRef(null);
  let userSize = useWindowSize();
  const sideNav = ["OV", "Q1", "A1a", "A1b", "Q2", "A2", "Q3", "A3"];

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
    }, 7000);
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
                  className="w-[50px] h-[50px] text-xl font-bold flex justify-center items-center"
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
            className="w-full h-full bg-red-500 bg-cover snap-start"
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
                      Engineering category contains 3 main applications, Civil,
                      Mechanical, and Electrical Engineering respectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full bg-red-500 bg-cover snap-start"
            style={{
              backgroundImage: `url("https://vcdn-english.vnecdn.net/2020/09/08/13-4-2-2285-1599537839.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-white bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <h1 className="absolute hidden w-[300px] -ml-[132px] mt-[120px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    DIY KOI POND
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://vcdn-english.vnecdn.net/2020/09/08/13-4-2-2285-1599537839.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      We all love huge squre pond full of koi in the middle of
                      garden. Regardless, affordable alternative would be a 14
                      inches by 10 inches alluminium sheet with the tip cut.
                    </p>
                    <p className="font-light mt-4">
                      What is the height as show below, to maximize pond volume
                      for our koi to explore?
                    </p>
                    <img
                      className="mt-6 rounded-lg"
                      alt="eng-q1img"
                      src="https://cdn.discordapp.com/attachments/731849212274147339/1058235164536348812/image.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-2xl font-[700]">DIY Koi Pond</h1>
              <p className="text-xl font-light mt-4">
                We all love huge squre pond full of koi in the middle of garden.
                Regardless, affordable alternative would be a 14 inches by 10
                inches alluminium sheet with the tip cut.
              </p>
              <p className="text-xl font-light mt-4">
                What is the height h as show below, to maximize pond volume for
                our koi to explore?
              </p>
              <img
                className="mt-6 rounded-lg"
                alt="eng-q1img"
                src="https://cdn.discordapp.com/attachments/731849212274147339/1058235164536348812/image.png"
              />
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[14px] md:text-lg">
              <p className="mb-6">
                This question does not require Calculus, solving for the answer.
                Problem is, only a few people are able to plot a graph out of
                pond volume function by hand, which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    f(h)=h(14−2h)(10−2h)
                  </span>
                }
              </p>
              <p className="mb-6">
                Differentiation is your big friend here. We simply diff volume
                function{" "}
                {<span className="font-cm text-[16px] font-[300]">f(h)</span>} ,
                which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    f'(h)=12h<sup>2</sup>−96h+140
                  </span>
                }
              </p>
              <p className="">
                If you do not have basic knowledge of differentiation, we
                simplify the whole solution in to a graph as shown below. Green
                line represents volume of changable{" "}
                {<span className="font-cm text-[16px] font-[300]">h</span>}
                {". "}Blue Line represents a volume fuction after
                differentiated. You can interact with these graph by toggling
                and changing volume.
              </p>
              <div className="mt-10 w-full flex justify-center">
                <iframe
                  title="iframee1"
                  src="https://www.geogebra.org/classic/huswxbhn?embed"
                  width="700"
                  height="400"
                  style={{ borderRadius: "0.4em" }}
                  frameborder="0"
                ></iframe>
              </div>
              <div className="w-full flex justify-center mt-2">
                <a href="https://www.geogebra.org/classic/huswxbhn?embed">
                  geogebra.org/classic/huswxbhn?embed
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-2xl font-[700]">DIY Koi Pond</h1>
              <p className="text-xl font-light mt-4">
                We all love huge squre pond full of koi in the middle of garden.
                Regardless, affordable alternative would be a 14 inches by 10
                inches alluminium sheet with the tip cut.
              </p>
              <p className="text-xl font-light mt-4">
                What is the height h as show below, to maximize pond volume for
                our koi to explore?
              </p>
              <img
                className="mt-6 rounded-lg"
                alt="eng-q1img"
                src="https://cdn.discordapp.com/attachments/731849212274147339/1058235164536348812/image.png"
              />
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[14px] md:text-lg">
              <p className="mb-6">
                In order to find maximum volume, make{" "}
                {<span className="font-cm text-[16px] font-[300]">f'(h)</span>}{" "}
                equals to zero, which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    0=12h<sup>2</sup>−96h+140
                  </span>
                }
                . Then, solve the quadratic equation to find{" "}
                {<span className="font-cm text-[16px] font-[300]">h</span>},
                which is 1.92 and 6.08 inches.
              </p>
              <p className="mb-6">
                Can we use both answers? If we take a look at the pond with,{" "}
                {<span className="font-cm text-[16px] font-[300]">10−2h</span>},
                the maximum height allowed is only upto 5 inches! That means the
                only correct answer is 1.92 inches.
              </p>
              <p>
                Thus, the height{" "}
                {<span className="font-cm text-[16px] font-[300]">h</span>} for
                maximum koi pond volume is 1.92 inches.
              </p>
            </div>
          </div>
          <div
            className="w-full h-full bg-red-500 bg-cover snap-start"
            style={{
              backgroundImage: `url("https://static01.nyt.com/images/2022/07/24/world/24sci-china-rocket-sub-top/24sci-china-rocket-sub-top-videoSixteenByNine3000.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-black bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <h1 className="absolute hidden w-[380px] -ml-[170px] mt-[140px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    OPERATION PLUMBOB
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://static01.nyt.com/images/2022/07/24/world/24sci-china-rocket-sub-top/24sci-china-rocket-sub-top-videoSixteenByNine3000.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      Rocket is fast, but do you know what is faster? A manhole.
                    </p>
                    <p className="font-light mt-4">
                      In the summer of 1957, a nuclear bomb was detonated
                      underground. It was unable to contain the explosion and
                      blasted upwards at an extremely high speed.
                    </p>
                    <p className="font-light mt-4">
                      For simplicity, the distance in feet is given by{" "}
                      {
                        <span className="font-cm text-[18px] font-[300]">
                          s(t)=−16t<sup>2</sup>+560t
                        </span>
                      }
                      {". "}
                    </p>
                    <p className="font-light mt-4">
                      What is the velocity and acceleration of the manhole after
                      3 seconds?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative bg-black w-full h-[100vh]">
        <div className="flex snap-x snap-mandatory h-screen w-full mx:auto overflow-y-hidden overflow-x-scroll">
          <div className="relative snap-start shrink-0 bg-[#F5F5F5] w-full h-screen overflow-hidden">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{ backgroundImage: `url("/landingBackground.png")` }}
            >
              <div className="flex flex-row -ml-1">
                <div className="w-[25px] h-[25px]">
                  <Lottie animationData={timer} />
                </div>
                <p className="ml-1 font-light">10 min</p>
              </div>
              <h1 className="text-5xl font-bold">Engineering</h1>
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
                Engineering category contains 3 main applications, Civil,
                Mechanical, and Electrical Engineering respectively.
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
                backgroundImage: `url("https://vcdn-english.vnecdn.net/2020/09/08/13-4-2-2285-1599537839.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Civil Engineering</p>
              </div>
              <h1 className="text-3xl font-bold">DIY Koi Pond</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">
                We all love huge squre pond full of koi in the middle of garden.
                Regardless, affordable alternative would be a 14 inches by 10
                inches alluminium sheet with the tip cut.
              </p>
              <p className="font-light mt-4">
                What is the height h as show below, to maximize pond volume for
                our koi to explore?
              </p>
              <img
                className="mt-6 rounded-lg"
                alt="eng-q1img"
                src="https://cdn.discordapp.com/attachments/731849212274147339/1058235164536348812/image.png"
              />
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
                DIY Koi Pond
              </h1>
            </div>
            <Conversation chat={engChatA1} order="1" />
            <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
              {engChatQ1.current.length > 0 ? (
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              ) : (
                <h1 className="text-xl text-white font-thin">
                  DIY Koi Pond Solved
                </h1>
              )}
            </div>
          </div>
          <div className="relative snap-start shrink-0 bg-orange-200 w-screen h-screen">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{
                backgroundImage: `url("https://static01.nyt.com/images/2022/07/24/world/24sci-china-rocket-sub-top/24sci-china-rocket-sub-top-videoSixteenByNine3000.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Mechanical Engineering</p>
              </div>
              <h1 className="w-full text-3xl font-bold">Operation Plumbob</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">
                Rocket is fast, but do you know what is faster? A manhole.
              </p>
              <p className="font-light mt-4">
                In the summer of 1957, a nuclear bomb was detonated underground.
                It was unable to contain the explosion and blasted upwards at an
                extremely high speed.
              </p>
              <p className="font-light mt-4">
                For simplicity, the distance in feet is given by{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    s(t)=−16t<sup>2</sup>+560t
                  </span>
                }
                {". "}
              </p>
              <p className="font-light mt-4">
                What is the velocity and acceleration of the manhole after 3
                seconds?
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              if (engChatQ2.current.length > 0) {
                const splicedQ2 = engChatQ2.current.shift();
                setEngChatA2((oldChatA2) => [...oldChatA2, splicedQ2]);
              }
            }}
            className="relative snap-start shrink-0 bg-blue-200 w-screen h-screen flex flex-col overflow-hidden"
          >
            <div className="w-full py-3 bg-[#263147]">
              <h1 className="text-xl text-white font-bold -mt-1 w-full text-center">
                Operation Plumbob
              </h1>
            </div>
            <Conversation chat={engChatA2} order="2" />
            <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
              {engChatQ2.current.length > 0 ? (
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              ) : (
                <h1 className="text-xl text-white font-thin">
                  Operation Plumbob Solved
                </h1>
              )}
            </div>
          </div>
          <div className="relative snap-start shrink-0 bg-blue-200 w-screen h-screen">
            6
          </div>
          <div className="relative snap-start shrink-0 bg-orange-200 w-screen h-screen">
            7
          </div>
        </div>
      </div>
    );
  }
}

export default Engineering;
