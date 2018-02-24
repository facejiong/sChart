import {BarChart} from "./charts/BarChart";
import {Heatmap} from "./charts/Heatmap";
import {LineChart} from "./charts/LineChart";
import {PercentageChart} from "./charts/PercentageChart";
import {PieChart} from "./charts/PieChart";
import {ScatterChart} from "./charts/ScatterChart";

import {InterfaceOption} from "./Option";

const typeCharts = {
  bar: BarChart,
  heatmap: Heatmap,
  line: LineChart,
  percentage: PercentageChart,
  pie: PieChart,
  scatter: ScatterChart,
};

export default class Chart {
  constructor(option: InterfaceOption) {
    return new typeCharts[option.type](option);
  }
}
