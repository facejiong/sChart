import Base from './Base';
import {Axis} from '../plugins/Axis';
import { Option, Position } from '../Option';
import {createText, createRect, createElement} from '../plugins/ElementFactory';
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches';

export class BarChart extends Base {
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
	private renderBar() {
		const {labels, datasets} = this.data;
		const num = labels.length;
		const groupNum = datasets.length;
		const barWidth = this.width / (num * 2 * groupNum);
		const barOffset = this.width / (num);
		const heightValue = Math.abs(this.min) + Math.abs(this.max)

		datasets.map((curDataset, indexDataset) => {
			let barGroupElement = createElement('g', {className: 'bar-group'});
			console.log(indexDataset)
			let groupOffset = 0;
			groupOffset = barWidth * (indexDataset + 1);
			console.log('groupOffset:' + groupOffset)
			curDataset.values.map((curValue, indexValue) => {
				let barHeight = this.height * curValue / heightValue;
				console.log(groupOffset)
				let positionY = barHeight > 0 ? this.zeroY - barHeight : this.zeroY;
				let positionX = barOffset * (indexValue + 1) + groupOffset;
				let slice = createRect('bar-rect', barWidth,  Math.abs(barHeight),
					positionX, positionY, 'none', this.colors[indexDataset]);
				barGroupElement.appendChild(slice)
			})
			this.groupChartElement.appendChild(barGroupElement)
		})
		console.log(heightValue)
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		this.computeMinMax();
		this.renderAxis();
		this.renderBar()
		// 顺序 逆序
		// this.sortData();
		// this.drawPie();
	}
}
