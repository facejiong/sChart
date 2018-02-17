import Base from './Base';
import {Axis} from '../plugins/Axis';
import { Option, Position } from '../Option';
import {createText, createRect, createElement, createLine} from '../plugins/ElementFactory';
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches';

export class LineChart extends Base {
	private min: number = 0;
	private max: number = 0;
	private zeroY: number = 0;
	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.render()
	}
	private computeMinMax() {
		const {labels, datasets} = this.data
		datasets.map((current) => {
			current.values.map((cur) => {
				this.min = Math.min(cur, this.min)
				this.max = Math.max(cur, this.max)
			})
		})
		if (this.min >= 0) {
			this.min = 0;
			this.zeroY = 0;
		} else {
			let minPow = Math.pow(10, String(Math.abs(this.min)).length - 1);
			this.min = - Math.ceil(Math.abs(this.min) / minPow) * minPow;
		}
		if (this.max <= 0) {
			this.max = 0;
			this.zeroY = 0;
		} else {
			let maxPow = Math.pow(10, String(this.max).length - 1);
			this.max = Math.ceil(this.max / maxPow) * maxPow;
		}
		if (this.max >0 && this.min < 0) {
			this.zeroY = this.height *  Math.abs(this.max) / (Math.abs(this.min) + Math.abs(this.max))
		}
	}
	private renderAxis() {
		const axis = new Axis(this.width, this.height, this.padding);
		const axisElements = axis.render();
		console.log(axisElements)
		this.id.appendChild(axisElements);
		// const axis = new Axis();
	}
	private renderBarGroup() {

	}
	private renderLine() {
		const {labels, datasets} = this.data;
		const num = labels.length;
		const groupNum = datasets.length;
		// const barWidth = this.width / (num * 2 * groupNum);
		const lineOffset = this.width / (num + 1);
		const heightValue = Math.abs(this.min) + Math.abs(this.max)

		datasets.map((curDataset, indexDataset) => {
			let lineGroupElement = createElement('g', {className: 'line-group'});
			console.log(indexDataset)
			// groupOffset = barWidth * (indexDataset + 1);
			curDataset.values.map((curValue, indexValue, arr) => {
				let y1 = this.height * arr[indexValue] / heightValue;
				let y2 = this.height * arr[indexValue + 1] / heightValue;
				y1 = y1 > 0 ? this.zeroY - y1 : this.zeroY;
				y2 = y2 > 0 ? this.zeroY - y2 : this.zeroY;
				let x1 = lineOffset * (indexValue + 0.5);
				let x2 = lineOffset * (indexValue + 1.5);
				let slice = createLine('line', x1, y1,
					x2, y2, this.colors[indexDataset]);
				lineGroupElement.appendChild(slice)
			})
			this.groupChartElement.appendChild(lineGroupElement)
		})
		console.log(heightValue)
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		this.computeMinMax();
		this.renderAxis();
		this.renderLine()
		// 顺序 逆序
		// this.sortData();
		// this.drawPie();
	}
}
