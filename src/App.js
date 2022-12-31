import Lottie from "lottie-react";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import truck from "./assets/lotties/truck.json";

const Landing = lazy(() => import("./pages/landing"));
const Category = lazy(() => import("./pages/category"));
const Engineering = lazy(() => import("./pages/engineering"));
const Statistics = lazy(() => import("./pages/statistics"));
const Economics = lazy(() => import("./pages/economics"));
const NoSession = lazy(() => import("./pages/noSession"));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/calculus">
        <Suspense
          fallback={
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  width: "20%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  textAlignLast: "center",
                }}
              >
                <Lottie animationData={truck} />
              </div>
            </div>
          }
        >
          <Switch basename="/calculus">
            <Route exact path="/" component={Landing} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/engineering" component={Engineering} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/economics" component={Economics} />
            <Route component={NoSession} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      {/* <p className="my-10 font-bold text-3xl">Integration Simulation</p>
        <iframe
          title="iframe1"
          src="https://www.geogebra.org/classic/rqkrvhfx?embed"
          width="1000"
          height="800"
          style={{ borderRadius: "0.4em" }}
          frameborder="0"
        ></iframe> */}
    </React.Fragment>
  );
}

export default App;
