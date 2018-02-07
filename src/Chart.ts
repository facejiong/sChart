import {BarChart} from './chart/BarChart';
import {LineChart} from './chart/LineChart';
import {ScatterChart} from './chart/ScatterChart';
import {PercentageChart} from './chart/PercentageChart';
import {PieChart} from './chart/PieChart';
import {Heatmap} from './chart/Heatmap';

const typeCharts = {
	line: LineChart,
	bar: BarChart,
	scatter: ScatterChart,
	percentage: PercentageChart,
	heatmap: Heatmap,
	pie: PieChart
}

export default class {
	constructor(option: object) {
		return new typeCharts[option.type](option)
	}
}
