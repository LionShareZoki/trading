// import * as React from "react";
// import { createChart } from "lightweight-charts";

// const api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=HIQ4DCHAD053F3U3`;
// const Charts = async () => {
//   const res = fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       const tdata = data["Time Series (Daily)"];
//       // console.log(tdata);
//       const tdataarr = Object.entries(tdata);
//       console.log(tdataarr);
//       const mapa = tdataarr.map((element) => {
//         const key = element[0];
//         const val = element[1];
//         const open = val[["1. open"]];
//         const high = val[["2. high"]];
//         const low = val[["3. low"]];
//         const close = val[["4. close"]];
//       });
//     });
// };

// export default Charts;
