const Conversation = ({ chat }) => {
  return (
    <div className="w-full h-full px-4 py-4 border overflow-scroll">
      {chat.map((c, i) => {
        if (c.sender === "Bot") {
          if (i === 0) {
            return (
              <div className="w-full flex flex-col mb-2 text-[#3F3F3F]">
                {/* <p className="text-[#263147] pl-4 font-bold mb-1">{c.sender}</p> */}
                <div className="rounded-lg bg-white w-fit max-w-[80%] px-4 py-1">
                  <p className="">{c.text}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="w-full flex flex-col mb-2 text-[#3F3F3F]">
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
            <div className="w-full flex flex-col items-end text-white mb-2">
              {c.sender !== chat[i - 1].sender && (
                <p className="text-[#79e278] font-bold pr-4 pt-2"></p>
              )}
              <div className="rounded-lg bg-[#81d248] w-fit max-w-[80%] px-4 py-1">
                <p className="w-full text-end">{c.text}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Conversation;
