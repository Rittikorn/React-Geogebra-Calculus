const stcQ1C04 = () => {
  return (
    <p>
      When you diff some equation, do it both side. For example, the diffed
      population equation is{" "}
      <span className="font-cm text-[16px] font-[300]">
        P'(t)=−t<sup>2</sup>+64
      </span>{" "}
      or{" "}
      <span className="font-cm text-[16px] font-[300]">
        dP/dt=−t<sup>2</sup>+64
      </span>
      .
    </p>
  );
};
const stcQ1C06 = () => {
  return (
    <p>
      <span className="font-cm text-[16px] font-[300]">P'(4)=48</span> and{" "}
      <span className="font-cm text-[16px] font-[300]">P'(8)=0</span>.
    </p>
  );
};
const stcQ1C11 = () => {
  return (
    <p>
      Here is the{" "}
      <a
        href="https://www.geogebra.org/classic/vwux4pd5?embed"
        className="font-[700] underline"
      >
        Geogebra
      </a>{" "}
      for this question. Pay attention to a green line, which is population
      function. Between year 4 and 8, the graph is decreasingly increase, but
      after 8.3 years, Columbus will be facing with huge problem, which can
      model as a red line, a parabola graph that tell us about the population
      trend. If you haven't seen another two applications, engineering and
      statics, we highly recommended checking those out!{" "}
      <a href="/category" className="font-[700] underline">
        Click this to go back to category page.
      </a>
    </p>
  );
};

export const statisticsContext = {
  mobile: {
    q1: [
      {
        sender: "Bot",
        text: "Hello, I am math solving bot. Unlike other category, this question must require basic differentiation knowledge. I reccommends check out the economics or engineering section first.",
      },
      {
        sender: "Bot",
        text: "But if you are here for giggles, differentiation is a process in Calculus, where we find the instantaneous rate of change in function based on one of its variables, and this question fits perfectly for this tool.",
      },
      {
        sender: "You",
        text: "I see, this question wants the rate of change of the population. That is why we need to differentiate the population function.",
      },
      {
        sender: "Bot",
        text: stcQ1C04(),
      },
      {
        sender: "Bot",
        text: "All you have to do next is make t equals to 4 and 8 as the question want. Can you do it yourself?",
      },
      {
        sender: "You",
        text: stcQ1C06(),
      },
      {
        sender: "Bot",
        text: "Do you notice any trend between these two years?",
      },
      {
        sender: "You",
        text: "The population is surely growing in Columbus, but the diffed value is decreasing. So, decreasingly increase?",
      },
      {
        sender: "Bot",
        text: "That is correct. By the way, there are another 3 types of trend, incresingly increase, increasingly decrease, and decreasingly decrease.",
      },
      {
        sender: "You",
        text: "My brain is not ready for this...",
      },
      {
        sender: "Bot",
        text: stcQ1C11(),
      },
    ],
  },
};
