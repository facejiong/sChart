import { Chart } from '../src/Chart'

// pie
var data0 = [
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
var pieChart = new Chart({
	id: 'pie-chart',
	title: 'Pie Chart',
	// subtitle: 'My Sub Chart',
	data: data0,
	type: 'pie', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
	sortDataType: 'descending', // ascending descending none
})
console.log(pieChart)

var percentageChart = new Chart({
	id: 'percentage-chart',
	title: 'Percentage Chart',
	data: data0,
	type: 'percentage', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(percentageChart)
// bar
var data1 = {
	labels: ['2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04',
		'2018-01-05', '2018-01-06', '2018-01-07', '2018-01-08'],

	datasets: [
		{
			title: '实例1',
			values: [-253, -30, 330, -350, -108, 142, -117, -298]
		},
		{
			title: '实例2',
			values: [-220, -102, -310, 115, -180, -332, -227, -114]
		},
	]
};
var barChart = new Chart({
	id: 'bar-chart',
	title: 'Bar Chart',
	data: data1,
	type: 'bar', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(barChart)
var lineChart = new Chart({
	id: 'line-chart',
	title: 'Line Chart',
	data: data1,
	type: 'line', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(lineChart)
var scatterData = [
	{label: '实例1',x: 23, y: 34, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例2',x: 213, y: 324, r: 12, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例3',x: 23, y: 314, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例4',x: 23, y: 384, r: 5, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例5',x: 123, y: 734, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例6',x: 33, y: 234, r: 4, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例7',x: 243, y: 134, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例8',x: 53, y: 444, r: 7},
	{label: '实例9',x: 73, y: 504, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例10',x: 23, y: 34, r: 6, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例11',x: 13, y: 84, r: 8, color: 'rgba(167, 232, 180, 0.5)'},
	{label: '实例12',x: 23, y: 341, r: 7, color: 'rgba(167, 232, 180, 0.5)'},
]
var scatterChart = new Chart({
	id: 'scatter-chart',
	title: 'Scatter Chart',
	data: scatterData,
	type: 'scatter', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 640,
})
console.log(scatterChart)
