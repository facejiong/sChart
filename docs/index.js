import { Chart } from '../src/Chart'
const scatterData = [
	{
		label: 'a',
		x: 23,
		y: 34,
		r: 8,
		color: 'rgba(167, 232, 180, 0.5)'
	},
	{
		label: 'b',
		x: 234,
		y: 94,
		r: 8,
		color: 'rgba(167, 232, 180, 0.5)'
	},
	{
		label: 'c',
		x: 24,
		y: 14,
		r: 32,
		color: 'rgba(167, 232, 180, 0.8)',
	},
	{
		label: 'd',
		x: 234,
		y: 300,
		r: 8,
		color: 'rgba(167, 232, 180, 0.5)'
	},
		{
		label: 'e',
		x: 234,
		y: 341,
		r: 6,
		color: 'rgba(167, 232, 180, 0.5)'
	}
]

// pie
const pieData = [
	{
		label: '实例1',
		value: 234
	},
	{
		label: '实例2',
		value: 100
	},
	{
		label: '实例3',
		value: 500
	},
		{
		label: '实例4',
		value: 400
	}
]
const pieChart = new Chart({
	id: 'pie-chart',
	title: 'Pie Chart',
	// subtitle: 'My Sub Chart',
	data: pieData,
	type: 'pie', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
	sortDataType: 'descending', // ascending descending none
})
console.log(pieChart)
// bar
let barData = {
	labels: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04',
		'2018-01-05', '2018-01-06', '2018-01-07', '2018-01-08'],

	datasets: [
		{
			title: '实例1',
			values: [25, 40, 30, 35, 8, 52, 17, -4]
		},
		{
			title: '实例2',
			values: [25, 50, -10, 15, 18, 32, 27, 14]
		},
		{
			title: '实例3',
			values: [15, 20, -3, -15, 58, 12, -17, 37]
		}
	]
};
const barChart = new Chart({
	id: 'bar-chart',
	title: 'Bar Chart',
	data: barData,
	type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(barChart)
const percentageChart = new Chart({
	id: 'percentage-chart',
	title: 'Percentage Chart',
	data: pieData,
	type: 'percentage', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(percentageChart)
