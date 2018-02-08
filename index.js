import { Chart } from './src/Chart'

const data = {
	labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
			"12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
	],
	datasets: [
			{
					title: "Some Data",
					values: [25, 40, 30, 35, 8, 52, 17, -4]
			},
			{
					title: "Another Set",
					values: [25, 50, -10, 15, 18, 32, 27, 14]
			}
	]
}

const chart = new Chart({
	id: "my-chart",
	title: "My Chart",
	subtitle: 'My Sub Chart',
	data: data,
	type: 'pie', // or 'line', 'scatter', 'pie', 'percentage'
	height: 250,
	width: 320,
	colors: ['#7cd6fd', '#743ee2'],

	format_tooltip_x: d => (d + '').toUpperCase(),
	format_tooltip_y: d => d + ' pts'
})
console.log(chart)

