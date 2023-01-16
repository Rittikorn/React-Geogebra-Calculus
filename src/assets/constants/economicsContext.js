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
      <span className="font-cm text-[16px] font-[300]">R'=dR/dp=1700−20p</span>.
    </p>
  );
};
const ecmQ1C13 = () => {
  return (
    <p>
      I know that the answer of p is 85 from parabola. So, I assume that we have
      to make <span className="font-cm text-[16px] font-[300]">R'</span> equals
      to zero, so that we will get the exact same answer.
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
      for this question. Pink line represents revenue equation{" "}
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
      According to previous solution, we make diffed equation equals to zero to
      find maximum value. If we diff profit function, we get{" "}
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
      since amount of subscribers can not be a negative value. The only correct
      answer is 35 people or 35 requests.
    </p>
  );
};
const ecmQ2C07 = () => {
  return (
    <p>
      Congrats! You understand the basic of differentiation. Anyway, Here is the{" "}
      <a
        href="https://www.geogebra.org/classic/d2vtptr6?embed"
        className="font-[700] underline"
      >
        Geogebra
      </a>{" "}
      fot this question. Blue line represents profit equation{" "}
      {<span className="font-cm text-[16px] font-[300]">P</span>}
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

export const economicsContext = {
  mobile: {
    q1: [
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
    ],
    q2: [
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
    ],
  },
};
