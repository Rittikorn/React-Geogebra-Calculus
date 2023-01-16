import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import timer from "../assets/lotties/timer.json";
import Conversation from "../components/chat/conversation";
import useWindowSize from "../configs/windowSize";
import truck from "../assets/lotties/truck.json";
import { engineeringContext } from "../assets/constants/engineeringContext";

function Engineering() {
  const engChatQ1 = useRef(engineeringContext.mobile.q1);
  const engChatQ2 = useRef(engineeringContext.mobile.q2);
  const engChatQ3 = useRef(engineeringContext.mobile.q3);
  const [engChatA1, setEngChatA1] = useState([]);
  const [engChatA2, setEngChatA2] = useState([]);
  const [engChatA3, setEngChatA3] = useState([]);
  const [isGgbLoading, setIsGgbloading] = useState(true);

  // useEffect(() => {
  //   console.log(engChatA1);
  // }, [engChatA1]);

  const engOvRef = useRef(null);
  let userSize = useWindowSize();
  const sideNav = [
    "OV",
    "Q1",
    "A1a",
    "A1b",
    "Q2",
    "A2a",
    "A2b",
    "Q3",
    "A3a",
    "A3b",
  ];

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
                      {engineeringContext.nonmobile.intro[0]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.intro[1]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.intro[2]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
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
                      {engineeringContext.nonmobile.q1[0]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q1[1]}
                    </p>
                    {engineeringContext.nonmobile.q1[2]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">DIY Koi Pond</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q1[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q1[1]}
              </p>
              {engineeringContext.nonmobile.q1[2]}
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a1[0]}</p>
              <p className="mb-6">{engineeringContext.nonmobile.a1[1]}</p>
              <p className="">{engineeringContext.nonmobile.a1[2]}</p>
              <div className="mt-10 w-full flex justify-center">
                {engineeringContext.nonmobile.a1[3]}
              </div>
              <div className="w-full flex justify-center mt-2">
                {engineeringContext.nonmobile.a1[4]}
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">DIY Koi Pond</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q1[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q1[1]}
              </p>
              {engineeringContext.nonmobile.q1[2]}
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a1[5]}</p>
              <p className="mb-6">{engineeringContext.nonmobile.a1[6]}</p>
              <p>{engineeringContext.nonmobile.a1[7]}</p>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
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
                      {engineeringContext.nonmobile.q2[0]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q2[1]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q2[2]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q2[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Operation Plumbob
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[1]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[2]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[3]}
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a2[0]}</p>
              <p className="mb-6">{engineeringContext.nonmobile.a2[1]}</p>
              <p className="">{engineeringContext.nonmobile.a2[2]}</p>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Operation Plumbob
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[1]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[2]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q2[3]}
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a2[3]}</p>
              <div className="mt-10 w-full flex justify-center">
                {engineeringContext.nonmobile.a2[4]}
              </div>
              <div className="w-full flex justify-center mt-2">
                {engineeringContext.nonmobile.a2[5]}
              </div>
              <p className="mt-4">{engineeringContext.nonmobile.a2[6]}</p>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
            style={{
              backgroundImage: `url("https://i.pcmag.com/imagery/articles/05bCKMylhKnlDGyrBCbGYnc-1..v1598629793.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-black bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <h1 className="absolute hidden w-[310px] -ml-[137px] mt-[180px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    MAXIMUM OVERDRIVE
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://i.pcmag.com/imagery/articles/05bCKMylhKnlDGyrBCbGYnc-1..v1598629793.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      {engineeringContext.nonmobile.q3[0]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q3[1]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q3[2]}
                    </p>
                    <p className="font-light mt-4">
                      {engineeringContext.nonmobile.q3[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Maximum Overdrive
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[1]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[2]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[3]}
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a3[0]}</p>
              <p className="mb-6">{engineeringContext.nonmobile.a3[1]}</p>
              <p className="mb-6">{engineeringContext.nonmobile.a3[2]}</p>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">
                Maximum Overdrive
              </h1>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[0]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[1]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[2]}
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                {engineeringContext.nonmobile.q3[3]}
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">{engineeringContext.nonmobile.a3[3]}</p>
              <div className="mt-10 w-full flex justify-center">
                {engineeringContext.nonmobile.a3[4]}
              </div>
              <div className="w-full flex justify-center mt-2">
                {engineeringContext.nonmobile.a3[5]}
              </div>
              <p className="mt-4">{engineeringContext.nonmobile.a3[6]}</p>
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
                <p className="ml-1 font-light">10 min</p>
              </div>
              <h1 className="text-5xl font-bold">Engineering</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">{engineeringContext.mobile.intro[0]}</p>
              <p className="font-light mt-4">
                {engineeringContext.mobile.intro[1]}
              </p>
              <p className="font-light mt-4">
                {engineeringContext.mobile.intro[2]}
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
              <p className="font-light">{engineeringContext.nonmobile.q1[0]}</p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q1[1]}
              </p>
              {engineeringContext.nonmobile.q1[2]}
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
            {engChatQ1.current.length > 0 ? (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              </div>
            ) : (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#81d248] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-[700]">
                  DIY Koi Pond Solved
                </h1>
              </div>
            )}
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
              <p className="font-light">{engineeringContext.nonmobile.q2[0]}</p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q2[1]}
              </p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q2[2]}
              </p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q2[3]}
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
            {engChatQ2.current.length > 0 ? (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              </div>
            ) : (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#81d248] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-[700]">
                  Operation Plumbob Solved
                </h1>
              </div>
            )}
          </div>
          <div className="relative snap-start shrink-0 bg-orange-200 w-screen h-screen">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{
                backgroundImage: `url("https://i.pcmag.com/imagery/articles/05bCKMylhKnlDGyrBCbGYnc-1..v1598629793.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Electrical Engineering</p>
              </div>
              <h1 className="w-full text-3xl font-bold">Maximum Overdrive</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">{engineeringContext.nonmobile.q3[0]}</p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q3[1]}
              </p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q3[2]}
              </p>
              <p className="font-light mt-4">
                {engineeringContext.nonmobile.q3[3]}
              </p>
            </div>
          </div>
          <div
            onClick={() => {
              if (engChatQ3.current.length > 0) {
                const splicedQ3 = engChatQ3.current.shift();
                setEngChatA3((oldChatA3) => [...oldChatA3, splicedQ3]);
              }
            }}
            className="relative snap-start shrink-0 bg-blue-200 w-screen h-screen flex flex-col overflow-hidden"
          >
            <div className="w-full py-3 bg-[#263147]">
              <h1 className="text-xl text-white font-bold -mt-1 w-full text-center">
                Maximum Overdrive
              </h1>
            </div>
            <Conversation chat={engChatA3} order="3" />
            {engChatQ3.current.length > 0 ? (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#263147] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-thin">
                  Tap screen to reveal conversation
                </h1>
              </div>
            ) : (
              <div className="absolute bottom-0 w-full h-[50px] py-4 bg-[#81d248] cursor-pointer flex justify-center items-center">
                <h1 className="text-xl text-white font-[700]">
                  Maximum Overdrive Solved
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Engineering;
