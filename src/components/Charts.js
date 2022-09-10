// import * as React from "react";
// import { createChart } from "lightweight-charts";
// import Button from "./header/Button";

// export class LightweightChart extends React.PureComponent {
//   static defaultProps = {
//     containerId: "lightweight_chart_container",
//   };

//   chart = null;

//   componentDidMount() {
//     const chart = createChart(this.props.containerId, {
//       width: 800,
//       height: 600,
//     });
//     chart.timeScale().fitContent();
//     this.chart = chart;

//     const lineSeries = chart.addLineSeries();

//     lineSeries.setData([
//       { time: "2019-04-10", value: 54.01 },
//       { time: "2019-04-11", value: 59.01 },
//     ]);

//     const barSeries = chart.addCandlestickSeries({
//       thinBars: false,
//     });

//     // Testing fetching data from API
//     // const fetchData = () => {
//     //   fetch(
//     //     `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5MIN&apikey=HIQ4DCHAD053F3U3`
//     //   )
//     //     .then((response) => {
//     // //       return response.json();
//     //     })
//     //     .then((data) => {
//     //       barSeries.push(data);
//     //     }).then;
//     // };

//     /////////////////////////////////////////////////////7
//     // set the data
//     fetch(
//       `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=HIQ4DCHAD053F3U3`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         const cdata = data.map((d) => {
//           return { time: {}, open: 0, high: 0, low: 0, close: 0 };
//         });
//       });
//     barSeries.setData([
//       {
//         time: "2019-05-28",
//         open: 59.21,
//         high: 59.66,
//         low: 59.02,
//         close: 59.57,
//       },
//     ]);
//   }

//   componentWillUnmount() {
//     if (this.chart !== null) {
//       this.chart.remove();
//       this.chart = null;
//     }
//   }

//   render() {
//     return <div id={this.props.containerId} className={"LightweightChart"} />;
//   }
// }

// export default LightweightChart;
