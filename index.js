import { Chart } from './src/Chart'

const pieData = [
	{
		label: 'a',
		value: 234
	},
	{
		label: 'b',
		value: 100
	},
	{
		label: 'c',
		value: 500
	}
]

const chart = new Chart({
	id: "my-chart",
	title: "My Chart",
	// subtitle: 'My Sub Chart',
	data: pieData,
	type: 'pie', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 320,

	format_tooltip_x: d => (d + '').toUpperCase(),
	format_tooltip_y: d => d + ' pts'
})
console.log(chart)

