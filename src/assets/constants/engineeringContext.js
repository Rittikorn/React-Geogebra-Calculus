const engQ1C06 = () => {
  return (
    <p>
      I know it is{" "}
      <span className="font-cm text-[16px] font-[300]">
        width×length×height
      </span>
      .
    </p>
  );
};
const engQ1C07 = () => {
  return (
    <p>
      Which is{" "}
      <span className="font-cm text-[16px] font-[300]">
        f(h)=h(14−2h)(10−2h)
      </span>
      , but how do I get maximum volume by Differentiation method?
    </p>
  );
};
const engQ1C09 = () => {
  return (
    <p>
      You don't have to understand what I just say, just pay attention to this
      equation.{" "}
      <span className="font-cm text-[16px] font-[300]">
        dy/dh=12h<sup>2</sup>−96h+140
      </span>{" "}
      or{" "}
      <span className="font-cm text-[16px] font-[300]">
        f'(h)=12h<sup>2</sup>−96h+140
      </span>
      .
    </p>
  );
};
const engQ1C11 = () => {
  return (
    <p>
      <span className="font-cm text-[16px] font-[300]">
        12h<sup>2</sup>−96h+140
      </span>{" "}
      is the result after diff, correct?
    </p>
  );
};
const engQ1C12 = () => {
  return (
    <p>
      Bullseye. Now, we simply do,{" "}
      <span className="font-cm text-[16px] font-[300]">
        0=12h<sup>2</sup>−96h+140
      </span>
      , to find miximum volume.
    </p>
  );
};
const engQ1C14 = () => {
  return (
    <p>
      Not so fast. You see, the pond length is{" "}
      <span className="font-cm text-[16px] font-[300]">10−2h</span>. That means{" "}
      <span className="font-cm text-[16px] font-[300]">h</span> cannot be more
      than 5 inches.
    </p>
  );
};
const engQ1C16 = () => {
  return (
    <p>
      Here is the{" "}
      <a
        href="https://www.geogebra.org/classic/huswxbhn?embed"
        className="font-[700] underline"
      >
        Geogebra
      </a>{" "}
      for this question. Green line represents volume of changable{" "}
      {<span className="font-cm text-[16px] font-[300]">h</span>}
      {". "}Blue Line represents a volume fuction after differentiated. You can
      interact with these graph by toggling and changing volume. Anyway, viewing
      Geogebra on phone is not good as tablet or PC. Let's move on to the next
      question to get better picture about differentiation.
    </p>
  );
};
const engQ2C05 = () => {
  return (
    <p>
      In last question, we diff pond volume by{" "}
      <span className="font-cm text-[16px] font-[300]">h</span>. This time, we
      diff distance function by time. It is{" "}
      <span className="font-cm text-[16px] font-[300]">v=s/t</span> that we all
      used to learn.
    </p>
  );
};
const engQ2C09 = () => {
  return (
    <p>
      Got it.{" "}
      <span className="font-cm text-[16px] font-[300]">v(t)=−32t+560</span>.
    </p>
  );
};
const engQ2C13 = () => {
  return (
    <p>
      Wait. If we diff it again, there will be only{" "}
      <span className="font-cm text-[16px] font-[300]">a(t)=−32</span>. Where
      does <span className="font-cm text-[16px] font-[300]">t</span> go?
    </p>
  );
};
const engQ2C15 = () => {
  return (
    <p>
      Is 32{" "}
      <span className="font-cm text-[16px] font-[300]">
        m/s<sup>2</sup>
      </span>{" "}
      fast?
    </p>
  );
};
const engQ2C17 = () => {
  return (
    <p>
      Anyway, Here is the{" "}
      <a
        href="https://www.geogebra.org/classic/huswxbhn?embed"
        className="font-[700] underline"
      >
        Geogebra
      </a>{" "}
      for this question. Green line represents volume of changable{" "}
      {<span className="font-cm text-[16px] font-[300]">h</span>}
      {". "}Blue Line represents a volume fuction after differentiated. You can
      interact with these graph by toggling and changing volume. Let's move on
      to the next question to get better picture about differentiation.
    </p>
  );
};
const engQ3C04 = () => {
  return (
    <p>
      First we find current equation,{" "}
      <span className="font-cm text-[16px] font-[300]">
        i(t)=dq/dt=(π/4)cos(πt)
      </span>
      . Then we find power equation,{" "}
      <span className="font-cm text-[16px] font-[300]">
        p(t)=i(t)×v(t)=[(π/4)cos(πt)][sin(πt)]=(π/4)sin(πt)cos(πt)
      </span>
      .
    </p>
  );
};
const engQ3C05 = () => {
  return (
    <p>
      Congrats, now you can see the real-world application between Engineering
      and Calculus. Here is the{" "}
      <a
        href="https://www.geogebra.org/classic/ayjtpka2?embed"
        className="font-[700] underline"
      >
        Geogebra
      </a>{" "}
      for this question. Green line represents voltage equation. Brown line
      represents a charge equation. Red line represents a current equation. And
      blue line represents power equation. You can interact with these graph by
      toggling and changing equation. if you haven't seen another two
      applications, statistics and econimics, we highly recommended checking
      those out!{" "}
      <a href="/category" className="font-[700] underline">
        Click this to go back to category page.
      </a>
    </p>
  );
};

export const engineeringContext = {
  mobile: {
    intro: [
      <>
        Welcome! If you are not already know, this website features real-world
        application uses of Calculus, represented by Geogebra graphing tool to
        fully interact with users!
      </>,
      <>
        Before we start, viewing from mobile will not be able to use Geogebra,
        instead, we come up with a stepped solution, simulating by chat UI.
      </>,
      <>
        Engineering category contains 3 main applications, Civil, Mechanical,
        and Electrical Engineering respectively.
      </>,
    ],
    q1: [
      {
        sender: "Bot",
        text: "Hello, I am math solving bot. This question does not really requires Calculus knowledge, instead, you have to plot a graph by hand yourself, and we do not like that.",
      },
      {
        sender: "Bot",
        text: "Differentiation is your big friend here, not only in this question, but also all of the questions we offer on website. So, do you have any basic differentiation background?",
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
        sender: "You",
        text: engQ1C07(),
      },
      {
        sender: "Bot",
        text: "There is a lot of background process, but to simplify the solution, we diff the volume function and make them equal to zero.",
      },
      {
        sender: "Bot",
        text: engQ1C09(),
      },
      {
        sender: "Bot",
        text: "When we diff an equation, we have to do both sides. In this case, we diff volume function by height.",
      },
      {
        sender: "You",
        text: engQ1C11(),
      },
      {
        sender: "Bot",
        text: engQ1C12(),
      },
      {
        sender: "You",
        text: "Wait. There is two answers, 1.92 and 6.08. Is it 6.08? Seems like a highest number here...",
      },
      {
        sender: "Bot",
        text: engQ1C14(),
      },
      {
        sender: "Bot",
        text: "Thus, the answer is 5 inches for the maximum pond volume, which is 120.16 cubic inches.",
      },
      {
        sender: "Bot",
        text: engQ1C16(),
      },
    ],
    q2: [
      {
        sender: "Bot",
        text: "Before we solve this question. what is the unit of your parent vehicle's odometer?",
      },
      {
        sender: "You",
        text: "It is either mph, or kmh. Why?",
      },
      {
        sender: "Bot",
        text: "The odometer tells the speed of a vehicle at that time. Which means, velocity equals distance divide by time.",
      },
      {
        sender: "You",
        text: "Make sense to me, but the given distance is not just 'number'. It's in equation function form. And how is this relate to Calculus?",
      },
      {
        sender: "Bot",
        text: engQ2C05(),
      },
      {
        sender: "You",
        text: "It is that simple?",
      },
      {
        sender: "Bot",
        text: "Of course. We are just calculating manhole speed, not sending a rocket to the moon.",
      },
      {
        sender: "Bot",
        text: "So, can you diff this yourself this time?",
      },
      {
        sender: "You",
        text: engQ2C09(),
      },
      {
        sender: "Bot",
        text: "Awesome! Now, make you can find manhole velocity at 3 seconds.",
      },
      {
        sender: "You",
        text: "It is 464, but what is the unit? m/s?",
      },
      {
        sender: "Bot",
        text: "Nice question. The question do not specify the unit. We can make it both unit per second or m/s. Anyway, same thing with acceleration, we diff velocity again.",
      },
      {
        sender: "You",
        text: engQ2C13(),
      },
      {
        sender: "Bot",
        text: "The given distance function is called quadretic function. Hence, it is constat acceleration movement. That's why it is not relate to time anymore. And if you wonder, it is in negative value because it is fighting against earth gravity.",
      },
      {
        sender: "You",
        text: engQ2C15(),
      },
      {
        sender: "Bot",
        text: "This is for learning porpose only. The real manhole speed is way faster than that. It is even faster than .50 BMG Rifle round, which can go up to over 3,000 ft/s.",
      },
      {
        sender: "Bot",
        text: engQ2C17(),
      },
    ],
    q3: [
      {
        sender: "Bot",
        text: "This problem seems to be complex at first, but this is introduction to electrical from high school, just having Calculus involved.",
      },
      {
        sender: "You",
        text: "So, we have to diff the charge equation to get current, and then multiply with voltage equation to get power dissipation, correct?",
      },
      {
        sender: "Bot",
        text: "Like I said, this is a basic eletrical knowledge. Can you solve this by yourself?",
      },
      {
        sender: "You",
        text: engQ3C04(),
      },
      {
        sender: "Bot",
        text: engQ3C05(),
      },
    ],
  },
  nonmobile: {
    intro: [
      <>
        Welcome! If you are not already know, this website features real-world
        application uses of Calculus, represented by Geogebra graphing tool to
        fully interact with users!
      </>,
      <>
        Before we start, viewing from mobile will not be able to use Geogebra,
        instead, we come up with a stepped solution, simulating by chat UI.
      </>,
      <>
        Engineering category contains 3 main applications, Civil, Mechanical,
        and Electrical Engineering respectively.
      </>,
    ],
    q1: [
      <>
        We all love huge squre pond full of koi in the middle of garden.
        Regardless, affordable alternative would be a 14 inches by 10 inches
        alluminium sheet with the tip cut.
      </>,
      <>
        What is the height as show below, to maximize pond volume for our koi to
        explore?
      </>,
      <>
        <img
          className="mt-6 rounded-lg"
          alt="eng-q1img"
          src="https://cdn.discordapp.com/attachments/731849212274147339/1058235164536348812/image.png"
        />
      </>,
    ],
    a1: [
      <>
        This question does not require Calculus, solving for the answer. Problem
        is, only a few people are able to plot a graph out of pond volume
        function by hand, which is{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            f(h)=h(14−2h)(10−2h)
          </span>
        }
      </>,
      <>
        Differentiation is your big friend here. We simply diff volume function{" "}
        {<span className="font-cm text-[16px] font-[300]">f(h)</span>} , which
        is{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            f'(h)=12h<sup>2</sup>−96h+140
          </span>
        }
      </>,
      <>
        If you do not have basic knowledge of differentiation, we simplify the
        whole solution in to a graph as shown below. Green line represents
        volume of changable{" "}
        {<span className="font-cm text-[16px] font-[300]">h</span>}
        {". "}Blue Line represents a volume fuction after differentiated. You
        can interact with these graph by toggling and changing volume.
      </>,
      <>
        <iframe
          title="iframee1"
          src="https://www.geogebra.org/classic/huswxbhn?embed"
          width="700"
          height="400"
          style={{ borderRadius: "0.4em" }}
          frameborder="0"
        ></iframe>
      </>,
      <>
        <a href="https://www.geogebra.org/classic/huswxbhn?embed">
          geogebra.org/classic/huswxbhn?embed
        </a>
      </>,
      <>
        In order to find maximum volume, make{" "}
        {<span className="font-cm text-[16px] font-[300]">f'(h)</span>} equals
        to zero, which is{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            0=12h<sup>2</sup>−96h+140
          </span>
        }
        . Then, solve the quadratic equation to find{" "}
        {<span className="font-cm text-[16px] font-[300]">h</span>}, which is
        1.92 and 6.08 inches.
      </>,
      <>
        Can we use both answers? If we take a look at the pond with,{" "}
        {<span className="font-cm text-[16px] font-[300]">10−2h</span>}, the
        maximum height allowed is only upto 5 inches! That means the only
        correct answer is 1.92 inches.
      </>,
      <>
        Thus, the height{" "}
        {<span className="font-cm text-[16px] font-[300]">h</span>} for maximum
        koi pond volume is 1.92 inches.
      </>,
    ],
    q2: [
      <>Rocket is fast, but do you know what is faster? A manhole.</>,
      <>
        In the summer of 1957, a nuclear bomb was detonated underground. It was
        unable to contain the explosion and blasted upwards at an extremely high
        speed.
      </>,
      <>
        For simplicity, the distance in feet is given by{" "}
        {
          <span className="font-cm text-[18px] font-[300]">
            s(t)=−16t<sup>2</sup>+560t
          </span>
        }
        .
      </>,
      <>What is the velocity and acceleration of the manhole at 3 seconds?</>,
    ],
    a2: [
      <>
        Most of vehicles odometer use mph or kph unit. That means velocity can
        represents as{" "}
        {<span className="font-cm text-[16px] font-[300]">v=s/t</span>}, as we
        learned from high school.
      </>,
      <>
        No matters how complicate the distance function is, once it get
        differentiated by time, it transforms to velocity, which is{" "}
        {<span className="font-cm text-[16px] font-[300]">ds/dt=−32t+560</span>}{" "}
        or{" "}
        {<span className="font-cm text-[16px] font-[300]">v(t)=−32t+560</span>}.
        That means the manhole velocity is 464 unit/s or m/s.
      </>,
      <>
        Next, we diff the velocity function by time again, we simply gets
        acceleration,{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            −32 m/s<sup>2</sup>
          </span>
        }
        . Notice that{" "}
        {<span className="font-cm text-[16px] font-[300]">t</span>} is gone.
        This is normal, as we diff the quadratic function twice, we note this as{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            s&apos;&apos;(t)=v&apos;(t)=a(t)=−32 m/s<sup>2</sup>
          </span>
        }
        .
      </>,
      <>
        We simplify the whole solution in to a graph as shown below. Blue line
        represents distance function. Orange line represents a velocity
        function. Purple line represents an acceleration.
      </>,
      <>
        <iframe
          title="iframee1"
          src="https://www.geogebra.org/classic/g38rug9m?embed"
          width="700"
          height="400"
          style={{ borderRadius: "0.4em" }}
          frameborder="0"
        ></iframe>
      </>,
      <>
        <a href="https://www.geogebra.org/classic/g38rug9m?embed">
          geogebra.org/classic/g38rug9m?embed
        </a>
      </>,
      <>
        Thus, the manhole velocity and acceleration at 3 seconds is{" "}
        {<span className="font-cm text-[16px] font-[300]">−32t+560 m/s</span>}{" "}
        and{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            −32 m/s<sup>2</sup>
          </span>
        }{" "}
        respectively.
      </>,
    ],
    q3: [
      <>
        No, we are not calculating trillion transistors circuit today. Instead,
        we go easy with fundamental electrical knowledge.
      </>,
      <>
        Given random unknown circuit that has charge equation as{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            q(t)=(1/4)sin(πt)
          </span>
        }{" "}
        coulombs, and voltage equation as{" "}
        {<span className="font-cm text-[16px] font-[300]">v(t)=sin(πt)</span>}{" "}
        volts.
      </>,
      <>
        For the gist of what shown in the background image. Let's find the power
        dissipated from the element and current passing through it.
      </>,
      <>
        Hint:{" "}
        {<span className="font-cm text-[16px] font-[300]">i(t)=dq/dt</span>} and{" "}
        {<span className="font-cm text-[16px] font-[300]">p(t)=i(t)×v(t)</span>}
        .
      </>,
    ],
    a3: [
      <>
        The plan is to diff the charge equation to get the current, then
        multiply with voltage equation to get power dissipation.
      </>,
      <>
        {
          <span className="font-cm text-[16px] font-[300]">
            i(t)=dq/dt=(π/4)cos(πt)
          </span>
        }{" "}
        Amps
      </>,
      <>
        {
          <span className="font-cm text-[16px] font-[300]">
            p(t)=i(t)×v(t)=[(π/4)cos(πt)][sin(πt)]=(π/4)sin(πt)cos(πt)
          </span>
        }{" "}
        Watts
      </>,
      <>
        We simplify the whole solution in to a graph as shown below. Green line
        represents voltage equation. Brown line represents a charge equation.
        Red line represents a current equation. And blue line represents power
        equation.
      </>,
      <>
        <iframe
          title="iframee1"
          src="https://www.geogebra.org/classic/ayjtpka2?embed"
          width="700"
          height="400"
          style={{ borderRadius: "0.4em" }}
          frameborder="0"
        ></iframe>
      </>,
      <>
        <a href="https://www.geogebra.org/classic/ayjtpka2?embed">
          geogebra.org/classic/ayjtpka2?embed
        </a>
      </>,
      <>
        Thus, the current and power equation from a circuit are{" "}
        {<span className="font-cm text-[16px] font-[300]">(π/4)cos(πt)</span>}{" "}
        amps, and{" "}
        {
          <span className="font-cm text-[16px] font-[300]">
            (π/4)sin(πt)cos(πt)
          </span>
        }{" "}
        respectively.{" "}
        {
          <a href="/category" className="font-[700] underline">
            Click this to go back to category page.
          </a>
        }
      </>,
    ],
  },
};
