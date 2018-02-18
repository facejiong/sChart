import Base from './Base';
import {Axis} from '../plugins/Axis';
import { Option, Position } from '../Option';
import {createText, createCircle, createElement} from '../plugins/ElementFactory';
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches';

export class ScatterChart extends Base {
	private minX: number = 0;
	private maxX: number = 0;
	private minY: number = 0;
	private maxY: number = 0;
	private zeroX: number = 0;
	private zeroY: number = 0;
	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.render()
	}
	private ceilNumber(num) {
		let pow = Math.pow(10, String(Math.abs(num)).length - 1)
		let absNum = Math.ceil(Math.abs(num) / num) * num
		return num > 0 ? absNum : -absNum
	}
	private computeMinMax() {
		this.data.map((current) => {
			this.minX = Math.min(current.x, this.minX)
			this.maxX = Math.max(current.x, this.maxX)
			this.minY = Math.min(current.y, this.minY)
			this.maxY = Math.max(current.y, this.maxY)
		})
		if (this.minX >= 0) {
			this.minX = 0;
			this.zeroY = 0;
		} else {
			this.minX = this.ceilNumber(this.minX);
		}
		if (this.maxX <= 0) {
			this.maxX = 0;
			this.zeroY = 0;
		} else {
			this.maxX = this.ceilNumber(this.maxX);
		}
		if (this.maxX >0 && this.minX < 0) {
			this.zeroY = this.height *  Math.abs(this.maxX) / (Math.abs(this.minX) + Math.abs(this.maxX))
		}
		if (this.minY >= 0) {
			this.minY = 0;
			this.zeroX = 0;
		} else {
			this.minY = this.ceilNumber(this.minY);
		}
		if (this.maxY <= 0) {
			this.maxY = 0;
			this.zeroX = 0;
		} else {
			this.maxY = this.ceilNumber(this.maxY);
		}
		if (this.maxY >0 && this.minY < 0) {
			this.zeroX = this.height *  Math.abs(this.maxY) / (Math.abs(this.minY) + Math.abs(this.maxY))
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
	private renderScatter() {
		const absY = Math.abs(this.minY) + Math.abs(this.maxY)
		const absX = Math.abs(this.minX) + Math.abs(this.maxX)
		this.data.map((cur) => {
			let y = this.height * cur.y / absY;
			let positionY = this.height - y;
			let x = this.width * cur.x / absX;
			let positionX = x > 0 ? this.zeroY - x : this.zeroY;
			console.log(x)
			console.log(y)
			let slice = createCircle('chart-circle', x,  positionY,
					4, 'none', '#A7E8B4');
			this.groupChartElement.appendChild(slice)

		})
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		this.computeMinMax();
		this.renderAxis();
		this.renderScatter()
		// 顺序 逆序
		// this.sortData();
		// this.drawPie();
	}
}
