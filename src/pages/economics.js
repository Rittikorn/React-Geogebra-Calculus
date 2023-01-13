import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
import timer from "../assets/lotties/timer.json";
import Conversation from "../components/chat/conversation";
import useWindowSize from "../configs/windowSize";
import truck from "../assets/lotties/truck.json";

function Economics() {
  const ecmQ1C05 = () => {
    return (
      <p>
        Revenue equation is{" "}
        <span className="font-cm text-[16px] font-[300]">R=pq</span> where R is
        revenue equation, p is price of subscription, and q is amount of people,
        correct?
      </p>
    );
  };
  const ecmQ1C07 = () => {
    return (
      <p>
        According to my awesome math skill, that line is{" "}
        <span className="font-cm text-[16px] font-[300]">q=1700−10p</span>, and
        like you said, we take linear q in revenue equation, which is{" "}
        <span className="font-cm text-[16px] font-[300]">R=p(1700−10p)</span>.
      </p>
    );
  };
  const ecmQ1C12 = () => {
    return (
      <p>
        I recommended you check out{" "}
        <a
          href="https://tutorial.math.lamar.edu/classes/calci/diffformulas.aspx"
          className="underline font-[700]"
        >
          this article
        </a>{" "}
        for tutorial about using differentiation tool. But if you are an
        impatience man, the result after using the tool is{" "}
        <span className="font-cm text-[16px] font-[300]">
          R'=dR/dp=1700−20p
        </span>
        .
      </p>
    );
  };
  const ecmQ1C13 = () => {
    return (
      <p>
        I know that the answer of p is 85 from parabola. So, I assume that we
        have to make <span className="font-cm text-[16px] font-[300]">R'</span>{" "}
        equals to zero, so that we will get the exact same answer.
      </p>
    );
  };
  const ecmQ1C15 = () => {
    return (
      <p>
        Anyway, Here is the{" "}
        <a
          href="https://www.geogebra.org/classic/y6jnykyz?embed"
          className="font-[700] underline"
        >
          Geogebra
        </a>{" "}
        fot this question. Pink line represents revenue equation{" "}
        {<span className="font-cm text-[16px] font-[300]">R</span>}
        {". "}Blue Line represents a revenue equation after differentiation
        process. You can interact with these graphs by toggling and changing
        subsciption price. Let's move on to the next question to get better
        picture about differentiation.
      </p>
    );
  };
  const ecmQ2C03 = () => {
    return (
      <p>
        Which is{" "}
        <span className="font-cm text-[16px] font-[300]">P(x)=(2500x)−</span>{" "}
        <span className="font-cm text-[16px] font-[300]">
          (2x<sup>3</sup>−75x<sup>2</sup>+400x+900)
        </span>
        . <br />
        Thus, profit equation is{" "}
        <span className="font-cm text-[16px] font-[300]">
          P(x)=−(2x<sup>3</sup>−75x<sup>2</sup>−2100x+900)
        </span>
        .
      </p>
    );
  };
  const ecmQ2C05 = () => {
    return (
      <p>
        According to previous solution, we make diffed equation equals to zero
        to find maximum value. If we diff profit function, we get{" "}
        <span className="font-cm text-[16px] font-[300]">P'(x)=dP/dx=</span>
        <br />
        <span className="font-cm text-[16px] font-[300]">
          −6x<sup>2</sup>+150x<sup>2</sup>+2100=0
        </span>
        .
      </p>
    );
  };
  const ecmQ2C06 = () => {
    return (
      <p>
        Next, solve the quadretic equation and we will get{" "}
        <span className="font-cm text-[16px] font-[300]">x=−10, 35</span>. But,
        since amount of subscribers can not be a negative value. The only
        correct answer is 35 people or 35 requests.
      </p>
    );
  };
  const ecmQ2C07 = () => {
    return (
      <p>
        Congrats! You understand the basic of differentiation. Anyway, Here is
        the{" "}
        <a
          href="https://www.geogebra.org/classic/d2vtptr6?embed"
          className="font-[700] underline"
        >
          Geogebra
        </a>{" "}
        fot this question. Blue line represents profit equation{" "}
        {<span className="font-cm text-[16px] font-[300]">R</span>}
        {". "}Orange Line represents a profit equation after differentiation
        process. You can interact with these graphs by toggling and changing
        amount of request. If you haven't seen another two applications,
        engineering and statics, we highly recommended checking those out!{" "}
        <a href="/category" className="font-[700] underline">
          Click this to go back to category page.
        </a>
      </p>
    );
  };
  const engChatQ1 = useRef([
    {
      sender: "Bot",
      text: "Hello, I am math solving bot. Do you have any question before we start?",
    },
    {
      sender: "You",
      text: "You said, each 5 dollars more will lost 50 people. That is linear. Isn't the revenue graph suppose to be parabola?",
    },
    {
      sender: "Bot",
      text: "You are not wrong. But you do not understand the big picture.",
    },
    {
      sender: "Bot",
      text: "You see, the question is talking about subscription price and amount of people, not the total income for performer. Otherwise, it will be parabola, because of revenue equation.",
    },
    {
      sender: "You",
      text: ecmQ1C05(),
    },
    {
      sender: "Bot",
      text: "Yes, but you can't just make p equals to 50 dollars. You are suppose to find that linear equation first. Otherwise, this is all for nothing.",
    },
    {
      sender: "You",
      text: ecmQ1C07(),
    },
    {
      sender: "You",
      text: "I have no idea how this is related with Calculus. It is parabola, we can find maximum value without Calculus.",
    },
    {
      sender: "Bot",
      text: "About time! Real-life is not always like this, it may comes in square root or logarithm function. This is when differentiation is your best friend.",
    },
    {
      sender: "Bot",
      text: "Diffentiation is a process in Calculus, where we find the instantaneous rate of change in function based on one of its variables, and this question fits perfectly for this tool.",
    },
    {
      sender: "You",
      text: "Again, no idea how to use that tool to find maximum revenue.",
    },
    {
      sender: "Bot",
      text: ecmQ1C12(),
    },
    {
      sender: "You",
      text: ecmQ1C13(),
    },
    {
      sender: "You",
      text: "That means the best spot for subscription plan is 85 dollars, which bring us in the total income of 72,250 dollars in revenue! That is a lot!",
    },
    {
      sender: "Bot",
      text: ecmQ1C15(),
    },
  ]);
  const engChatQ2 = useRef([
    {
      sender: "Bot",
      text: "Okay, quick question. What is the relation between Profit, Revenue, and Cost?",
    },
    {
      sender: "You",
      text: "Easy, Profit = Revenue − Cost.",
    },
    {
      sender: "You",
      text: ecmQ2C03(),
    },
    {
      sender: "Bot",
      text: "Same as before. this question does not need differentiation process, but it makes this problem easier to solve. Can you do it yourself this time?",
    },
    {
      sender: "You",
      text: ecmQ2C05(),
    },
    {
      sender: "You",
      text: ecmQ2C06(),
    },
    {
      sender: "Bot",
      text: ecmQ2C07(),
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
  const sideNav = ["OV", "Q1", "A1a", "A1b", "Q2", "A2a", "A2b"];

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
                      Economics category contains two main applications, Demand
                      Revenue, and profit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
            style={{
              backgroundImage: `url("https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjmxwrzuE53HC5RTiYD1WkCKdKhz0G9GiG1yAKGyP0ng5e1TzsT.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-black bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[400px] flex">
                  <h1 className="absolute hidden w-[300px] -ml-[133px] mt-[120px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    GIMME LOVE
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjmxwrzuE53HC5RTiYD1WkCKdKhz0G9GiG1yAKGyP0ng5e1TzsT.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[400px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      All OnlyFans performers have to maximize revenue. The more
                      expensive your subscription plan is, the less customer per
                      month.
                    </p>
                    <p className="font-light mt-4">
                      Let's say 50 dollars can give 1,200 subscribers a good
                      time, and each 5 dollars the price raises, the less 50
                      people can keep up with.
                    </p>
                    <p className="font-light mt-4">
                      Find the perfect spot for subscription price and total
                      income. This question alone may change your career path.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">Gimme Love</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                All OnlyFans performers have to maximize revenue. The more
                expensive your subscription plan is, the less customer per
                month.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Let's say 50 dollars can give 1,200 subscribers a good time, and
                each 5 dollars the price raises, the less 50 people can keep up
                with.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Find the perfect spot for subscription price and total income.
                This question alone may change your career path.
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                Before getting start, we have to get better picture about
                "Revenue", a total income by product of price and quantity,
                which can describe as{" "}
                {<span className="font-cm text-[16px] font-[300]">R=pq</span>}.
              </p>
              <p className="mb-6">
                If we stop paying attention to Calculus and work on revenue
                equation, we can see that quantity is in linear scale, as the
                question describe: "each 5 dollars the price raises, the less 50
                people can keep up with". Regardless, that line is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    q=1700−10p
                  </span>
                }
                .
              </p>
              <p className="">
                Theoretically, we do not need Calculus to solve this question,
                as we know that revenue equation is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    R=p(1700−10p)
                  </span>
                }
                , which is parabola.
              </p>
              <div className="mt-10 w-full flex justify-center">
                <iframe
                  title="iframee1"
                  src="https://www.geogebra.org/classic/y6jnykyz?embed"
                  width="700"
                  height="400"
                  style={{ borderRadius: "0.4em" }}
                  frameborder="0"
                ></iframe>
              </div>
              <div className="w-full flex justify-center mt-2">
                <a href="https://www.geogebra.org/classic/y6jnykyz?embed">
                  geogebra.org/classic/y6jnykyz?embed
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">Gimme Love</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                All OnlyFans performers have to maximize revenue. The more
                expensive your subscription plan is, the less customer per
                month.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Let's say 50 dollars can give 1,200 subscribers a good time, and
                each 5 dollars the price raises, the less 50 people can keep up
                with.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Find the perfect spot for subscription price and total income.
                This question alone may change your career path.
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                But, in real world application, revenue equation may absense in
                logarithmic or square root form, and this is when
                differentiation, a Calculus tool, is your handy friend.
              </p>
              <p className="mb-6">
                Diffentiation is a process in Calculus, where we find the
                instantaneous rate of change in function based on one of its
                variables. Which means, it is easier way to find maximum revenue
                from changing price.
              </p>
              <p className="mb-6">
                To be precise, we can represent a revenue equation after
                differentiation process as,{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    R'(p)=dR/dp=1700−20p
                  </span>
                }
                . And in order to find maximum revenue, we make the diffed
                equation equal to zero, which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    0=1700−20p
                  </span>
                }
                .
              </p>
              <p>
                Finally, after solving for price, the answer will be 85 dollars
                of subscription plan. That means, total income or revenue will
                be 72,250 dollars.
              </p>
            </div>
          </div>
          <div
            className="w-full h-full bg-cover snap-start"
            style={{
              backgroundImage: `url("https://fox56news.com/wp-content/uploads/sites/24/2022/12/MariahGettyImages-1189630708.jpg")`,
            }}
          >
            <div className="backdrop-blur-lg w-full h-full flex justify-center items-center">
              <div
                id="eng-q1"
                className="flex flex-col bg-black bg-opacity-40 backdrop-blur-xl rounded-xl shadow-lg md:flex-row"
              >
                <div className="relative w-[400px] h-[150px] md:w-[200px] md:h-[450px] flex">
                  <h1 className="absolute hidden w-[380px] -ml-[172px] mt-[100px] tracking-widest transform -rotate-90 font-[700] text-center text-2xl text-white md:flex">
                    SANTA COST
                  </h1>
                  <img
                    className="object-cover rounded-t-xl w-full md:rounded-l-xl md:rounded-r-none md:h-full"
                    alt="icb"
                    src="https://fox56news.com/wp-content/uploads/sites/24/2022/12/MariahGettyImages-1189630708.jpg"
                  />
                </div>
                <div className="text-white text-2xl h-[500px] overflow-scroll w-[400px] md:w-[500px] md:h-[450px] scrollbar-hide">
                  <div className="px-10 py-7 text-white text-[16px] md:text-xl">
                    <p className="font-light">
                      It is December! And the theme of your OnlyFans this month
                      is, of course, Christmas!
                    </p>
                    <p className="font-light mt-4">
                      One way to maintain the fanbase is opening a request from
                      each paid subscribers. This method will cost a lot, but it
                      is a high risk, high gain decision.
                    </p>
                    <p className="font-light mt-4">
                      Assuming that the cost which varies by amount of
                      subscriber is{" "}
                      {
                        <span className="font-cm text-[14px] font-[300]">
                          C(x)=2x<sup>3</sup>−75x<sup>2</sup>+400x+900
                        </span>
                      }
                      , with total revenue of{" "}
                      {
                        <span className="font-cm text-[14px] font-[300]">
                          R(x)=2500x
                        </span>
                      }
                      .
                    </p>
                    <p className="font-light mt-4">
                      Too much requests will break your bank! What is the
                      perfect amount of request you should accept to maximize
                      your New's Year profit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">Santa Cost</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                It is December! And the theme of your OnlyFans this month is, of
                course, Christmas!
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                One way to maintain the fanbase is opening a request from each
                paid subscribers. This method will cost a lot, but it is a high
                risk, high gain decision.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Assuming that the cost which varies by amount of subscriber is{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    C(x)=2x<sup>3</sup>−75x<sup>2</sup>+400x+900
                  </span>
                }
                , with total revenue of{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    R(x)=2500x
                  </span>
                }
                .
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Too much requests will break your bank! What is the perfect
                amount of request you should accept to maximize your New's Year
                profit?
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                Most of vehicles odometer use mph or kph unit. That means
                velocity can represents as{" "}
                {<span className="font-cm text-[16px] font-[300]">v=s/t</span>},
                as we learned from high school.
              </p>
              <p className="mb-6">
                No matters how complicate the distance function is, once it get
                differentiated by time, it transforms to velocity, which is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    ds/dt=−32t+560
                  </span>
                }{" "}
                or{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    v(t)=−32t+560
                  </span>
                }
                . That means the manhole velocity is 464 unit/s or m/s.
              </p>
              <p className="">
                Next, we diff the velocity function by time again, we simply
                gets acceleration,{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    −32 m/s<sup>2</sup>
                  </span>
                }
                . Notice that{" "}
                {<span className="font-cm text-[16px] font-[300]">t</span>} is
                gone. This is normal, as we diff the quadratic function twice,
                we note this as{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    s&apos;&apos;(t)=v&apos;(t)=a(t)=−32 m/s<sup>2</sup>
                  </span>
                }
                .
              </p>
            </div>
          </div>
          <div className="w-full h-full snap-start flex md:grid md:grid-cols-7">
            <div className="hidden bg-white px-6 pt-8 md:col-span-2 md:flex md:flex-col md:col-span-2 md:row-span-1 h-full overflow-hidden">
              <h1 className="text-lg lg:text-2xl font-[700]">Santa Cost</h1>
              <p className="text-md lg:text-xl font-light mt-4">
                It is December! And the theme of your OnlyFans this month is, of
                course, Christmas!
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                One way to maintain the fanbase is opening a request from each
                paid subscribers. This method will cost a lot, but it is a high
                risk, high gain decision.
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Assuming that the cost which varies by amount of subscriber is{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    C(x)=2x<sup>3</sup>−75x<sup>2</sup>+400x+900
                  </span>
                }
                , with total revenue of{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    R(x)=2500x
                  </span>
                }
                .
              </p>
              <p className="text-md lg:text-xl font-light mt-4">
                Too much requests will break your bank! What is the perfect
                amount of request you should accept to maximize your New's Year
                profit?
              </p>
            </div>
            <div className="bg-black h-full pr-12 pl-12 pt-8 md:col-span-5 md:pr-20 text-white overflow-hidden text-[16px] lg:text-lg">
              <p className="mb-6">
                We simplify the whole solution in to a graph as shown below.
                Blue line represents distance function. Orange line represents a
                velocity function. Purple line represents an acceleration.
              </p>
              <div className="mt-10 w-full flex justify-center">
                <iframe
                  title="iframee1"
                  src="https://www.geogebra.org/classic/d2vtptr6?embed"
                  width="700"
                  height="400"
                  style={{ borderRadius: "0.4em" }}
                  frameborder="0"
                ></iframe>
              </div>
              <div className="w-full flex justify-center mt-2">
                <a href="https://www.geogebra.org/classic/d2vtptr6?embed">
                  geogebra.org/classic/d2vtptr6?embed
                </a>
              </div>
              <p className="mt-4">
                Thus, the manhole velocity and acceleration at 3 seconds is{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    −32t+560 m/s
                  </span>
                }{" "}
                and{" "}
                {
                  <span className="font-cm text-[16px] font-[300]">
                    −32 m/s<sup>2</sup>
                  </span>
                }{" "}
                respectively.
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
                <p className="ml-1 font-light">15 min</p>
              </div>
              <h1 className="text-5xl font-bold">Economics</h1>
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
                Economics category contains two main applications, Demand
                Revenue, and Profit.
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
                backgroundImage: `url("https://static.thairath.co.th/media/dFQROr7oWzulq5FZYjmxwrzuE53HC5RTiYD1WkCKdKhz0G9GiG1yAKGyP0ng5e1TzsT.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Demand and Revenue</p>
              </div>
              <h1 className="text-3xl font-bold">Gimme Love</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light mt-4">
                All OnlyFans performers have to maximize revenue. The more
                expensive your subscription plan is, the less customer per
                month.
              </p>
              <p className="font-light mt-4">
                Let's say 50 dollars can give 1,200 subscribers a good time, and
                each 5 dollars the price raises, the less 50 people can keep up
                with.
              </p>
              <p className="font-light mt-4">
                Find the perfect spot for subscription price and total income.
                This question alone may change your career path.
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
                Gimme Love
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
                  Gimme Love Solved
                </h1>
              </div>
            )}
          </div>
          <div className="relative snap-start shrink-0 bg-orange-200 w-screen h-screen">
            <div
              className="h-[30vh] bg-cover text-white px-6 pt-6"
              style={{
                backgroundImage: `url("https://fox56news.com/wp-content/uploads/sites/24/2022/12/MariahGettyImages-1189630708.jpg")`,
              }}
            >
              <div className="flex flex-row -ml-1">
                <p className="ml-1 font-light">Cost and Profit</p>
              </div>
              <h1 className="w-full text-3xl font-bold">Santa Cost</h1>
            </div>
            <div className="bg-white rounded-t-xl shadow-sm w-full h-full overflow-x-scroll -mt-16 px-6 py-4">
              <p className="font-light">
                It is December! And the theme of your OnlyFans this month is, of
                course, Christmas!
              </p>
              <p className="font-light mt-4">
                One way to maintain the fanbase is opening a request from each
                paid subscribers. This method will cost a lot, but it is a high
                risk, high gain decision.
              </p>
              <p className="font-light mt-4">
                Assuming that the cost which varies by amount of subscriber is{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    C(x)=2x<sup>3</sup>−75x<sup>2</sup>+400x+900
                  </span>
                }
                , with total revenue of{" "}
                {
                  <span className="font-cm text-[14px] font-[300]">
                    R(x)=2500x
                  </span>
                }
                .
              </p>
              <p className="font-light mt-4">
                Too much requests will break your bank! What is the perfect
                amount of request you should accept to maximize your New's Year
                profit?
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
                Santa Cost
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
                  Santa Cost Solved
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Economics;
