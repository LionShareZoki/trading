import * as React from "react";
import { createChart } from "lightweight-charts";
import Button from "./header/Button";

export class LightweightChart extends React.PureComponent {
  static defaultProps = {
    containerId: "lightweight_chart_container",
  };

  chart = null;

  componentDidMount() {
    const chart = createChart(this.props.containerId, {
      width: 800,
      height: 600,
    });
    chart.timeScale().fitContent();
    this.chart = chart;

    const lineSeries = chart.addLineSeries();

    const barSeries = chart.addCandlestickSeries({
      thinBars: false,
    });

    /////////////////////////////////////////////////////7
    // set the data

    var array = [
      {
        time: "2022-08-30",
        open: 120,
        high: 121,
        low: 119,
        close: 120.5,
      },
    ];
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=HIQ4DCHAD053F3U3`
    )
      .then((res) => res.json())
      .then((data) => {
        const tdata = data["Time Series (Daily)"];
        // console.log(tdata);
        const tdataarr = Object.entries(tdata);
        const mapa = tdataarr.map((element) => {
          const key = element[0];

          var last2 = Number(key.slice(-2));
          var sixthSeventh = Number(`${key[5]}${key[6]}`);
          var first4 = Number(key.substring(0, 4));

          const val = element[1];

          return {
            time: {
              day: Number(`${last2}`),
              month: Number(`${sixthSeventh}`),
              year: Number(`${first4}`),
            },
            open: Number(`${val[["1. open"]]}`),
            high: Number(`${val[["2. high"]]}`),
            low: Number(`${val[["4. close"]]}`),
            close: Number(`${val[["4. close"]]}`),
          };
          //   barSeries.setData(mapa);
        });
        console.log(mapa);
      })
      .catch((err) => console.info(err));
    // console.log(array);
    // barSeries.setData(array);
    // barSeries.setData(array);
  }

  componentWillUnmount() {
    if (this.chart !== null) {
      this.chart.remove();
      this.chart = null;
    }
  }

  render() {
    return <div id={this.props.containerId} className={"LightweightChart"} />;
  }
}

export default LightweightChart;
