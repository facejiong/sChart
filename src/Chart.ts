import {BarChart} from './charts/BarChart';
import {LineChart} from './charts/LineChart';
import {ScatterChart} from './charts/ScatterChart';
import {PercentageChart} from './charts/PercentageChart';
import {PieChart} from './charts/PieChart';
import {Heatmap} from './charts/Heatmap';

const typeCharts = {
	line: LineChart,
	bar: BarChart,
	scatter: ScatterChart,
	percentage: PercentageChart,
	heatmap: Heatmap,
	pie: PieChart
}

export class Chart {
	constructor(option: object) {
		return new typeCharts[option.type](option)
	}
}
