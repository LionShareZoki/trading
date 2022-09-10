import "./Button.css";
import magnifier from "./searchIcon.png";
import React, { useState } from "react";

// const UsingFetch = () => {
//   const [symbol, setSymbol] = useState("AAPL");
//   const [timeInterval, setTimeInterval] = useState("5min");
// };

// const fetchData = (props) => {
//   fetch(
//     `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${timeInterval}&apikey=HIQ4DCHAD053F3U3`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setSymbol(data);
//     });
// };

const Button = (props) => {
  const onSubmitHandler = (props) => {};
  return (
    <button onSubmit={onSubmitHandler} className="button" type="submit">
      <img src={magnifier} width="11px" />
    </button>
  );
};

export default Button;
