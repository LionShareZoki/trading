import React from "react";
import "./Newsfeed.css";
import Charts from "./Charts2.js";
import ChartsTest from "./ChartsTest";

function Newsfeed() {
  return (
    <div className="Newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartsection">
          <div className="newsfeed__portfolio">
            <h1>$114,656</h1>
            <p2></p2>
            <p>+$44.64 (+0.04%) Today</p>
            {/* <Input /> */}
          </div>
          <div className="newsfeed__chart">
            {" "}
            <ChartsTest />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
