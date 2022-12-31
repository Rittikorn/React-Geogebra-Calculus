import React from "react";
import { useHistory } from "react-router-dom";
const NoSession = () => {
  let history = useHistory();
  return (
    <>
      <div className="container mx-auto h-[100vh] flex justify-center items-center">
        <div style={{ alignItems: "center", placeContent: "center" }}>
          <h1 className="text-lg text-black text-center">Access Denied</h1>
          <br />
          <p className="">
            It seems that you're lost. Let us help guide you out and get you
            back homepage.
          </p>
          <button
            onClick={() => history.replace("/")}
            className="w-full text-center mx-auto text-blue-500 rounded-lg bg-white p-4 my-3 "
          >
            {"<"} back to homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default NoSession;
