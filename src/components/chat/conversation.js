import { useEffect, useRef } from "react";

const Conversation = ({ chat, order }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const AlwaysScrollToBottom = () => {
    if (order === "1")
      ref1?.current?.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    if (order === "2")
      ref2?.current?.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
    if (order === "3")
      ref3?.current?.scrollIntoView({
        block: "nearest",
        inline: "start",
      });
  };

  useEffect(() => {
    console.log(chat);
    if (chat?.length > 0) AlwaysScrollToBottom();
  }, [chat]);

  if (chat?.length === 0)
    return (
      <div className="w-full h-full mb-[50px] overflow-scroll flex justify-center items-center">
        <p className="text-[2xl] text-white font-bold">
          Touch the screen to start conversation.
        </p>
      </div>
    );
  else {
    return (
      <div className="w-full h-full px-4 py-4 mb-[50px] overflow-scroll">
        {chat.map((c, i) => {
          if (c.sender === "Bot") {
            if (i === 0) {
              return (
                <div
                  key={i}
                  className="w-full flex flex-col mb-2 text-[#3F3F3F]"
                >
                  {/* <p className="text-[#263147] pl-4 font-bold mb-1">{c.sender}</p> */}
                  <div className="rounded-lg bg-white w-fit max-w-[80%] px-4 py-1">
                    <p className="">{c.text}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className="w-full flex flex-col mb-2 text-[#3F3F3F]"
                >
                  {c.sender !== chat[i - 1].sender && (
                    <p className="text-[#263147] font-bold pt-2"></p>
                  )}
                  <div className="rounded-lg bg-white w-fit max-w-[80%] px-4 pt-1 pb-2">
                    <p>{c.text}</p>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div
                key={i}
                className="w-full flex flex-col items-end text-white mb-2"
              >
                {c.sender !== chat[i - 1]?.sender && (
                  <p className="font-bold pr-4 pt-2"></p>
                )}
                <div className="rounded-lg bg-[#81d248] w-fit max-w-[80%] px-4 py-1">
                  <p className="w-full text-end">{c.text}</p>
                </div>
              </div>
            );
          }
        })}
        {order === "1" && <div ref={ref1} />}
        {order === "2" && <div ref={ref2} />}
        {order === "3" && <div ref={ref3} />}
      </div>
    );
  }
};

export default Conversation;
