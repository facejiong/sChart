<p align="center">
  <img src="./docs/line.png">
</p>


# sChart
#### simple svg charts with zero dependencies [more examples](https://facejiong.github.io/scharts/demo.html), [more png](https://github.com/facejiong/sChart/blob/master/docs/more.png)

[![](https://img.shields.io/travis/facejiong/sChart.svg?style=flat-square)](https://travis-ci.org/facejiong/sChart)
[![](https://img.shields.io/coveralls/github/facejiong/sCharts.svg?style=flat-square)](https://coveralls.io/github/facejiong/sCharts)
[![](https://img.shields.io/npm/v/s-chart.svg?style=flat-square)](https://www.npmjs.com/package/s-chart)
[![](http://img.badgesize.io/facejiong/sCharts/master/lib/schart.js.svg?compression=gzip)](https://www.npmjs.com/package/s-chart)
[![](http://david-dm.org/facejiong/sChart.svg?style=flat-square)](https://david-dm.org/facejiong/sChart)

### Contents
* [Installation](#installation)
* [Usage](#usage)
* [Updates](#updates)
* [License](#license)

#### Installation
* Install via [`npm`](https://www.npmjs.com/get-npm):

  ```console
  $ npm install s-chart
  ```

  and include in your project:
  ```js
  import Chart from "s-chart"
  ```

* ...or include within your HTML

  ```html
    <script src="./schart.js"></script>
  ```

#### Usage
```js
const data0 = [
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
	data: data0,
	type: 'pie', // or 'line', 'scatter', 'pie', 'percentage', 'scatter'
	height: 250,
	width: 640,
	sortDataType: 'descending', // ascending descending none
})
```
View Examples:

1. Clone this repo.
2. `cd` into project directory.
3. `npm install -g parcel`
4. `npm run example`

If you want to contribute:

1. Clone this repo.
2. `cd` into project directory
3. `npm install`
4. `npm run build`

#### Updates

##### v0.1.0
- The very first version out, with pie, percentage, bars, lines and scatter.

#### License
This repository has been released under the [MIT License](LICENSE)

------------------
Project maintained by facejiong

