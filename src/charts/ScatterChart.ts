import Base from './Base';
import {Axis} from '../plugins/Axis';
import {Option, Position} from '../Option';
import {createCircle, createElement} from '../plugins/ElementFactory';
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches';
import {calculateTicks} from '../plugins/Coord';

export class ScatterChart extends Base {
	private minX: number = 0;
	private maxX: number = 0;
	private minY: number = 0;
	private maxY: number = 0;
	private maxR: number = 4;
	private ticksConfigX: any;
	private ticksConfigY: any;
	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.render()
	}
	public render() {
		this.renderBase();
		this.computeMinMax();
		this.renderAxis();
		this.renderLine();
		this.renderTips();
	}
	private computeMinMax() {
		const distanceX = this.elementPoint1.x - this.elementPoint0.x;
		const distanceY = this.elementPoint3.y - this.elementPoint0.y;
		const {labels, datasets} = this.data
		this.data.map((current) => {
			let defaultR = current.r || 4;
			this.minX = Math.min(current.x, this.minX)
			this.maxX = Math.max(current.x, this.maxX)
			this.minY = Math.min(current.y, this.minY)
			this.maxY = Math.max(current.y, this.maxY)
			this.maxR = Math.max(defaultR, this.maxR)
		})
		this.ticksConfigX = calculateTicks(this.minX - this.maxR, this.maxX + this.maxR, distanceX);
		this.ticksConfigY = calculateTicks(this.minY - this.maxR, this.maxY + this.maxR, distanceY);
	}
	private renderAxis() {
		let labelX = [];
		this.ticksConfigX.ticks.map((cur) => {
			labelX.unshift(cur.text);
		})
		const axis = new Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2,
			this.elementPoint3, this.ticksConfigY.ticks, labelX);
		this.axisElement = axis.render();
		this.svgElement.appendChild(this.axisElement);
	}
	private renderLine() {
		const width = this.elementPoint2.x - this.elementPoint3.x;
		const height = this.elementPoint3.y - this.elementPoint0.y;
		const minMaxCeilX = this.ticksConfigX.minMaxCeil;
		const ceilMaxX = this.ticksConfigX.ceilMax;
		const ceilMinX = this.ticksConfigX.ceilMin;
		const minMaxCeilY = this.ticksConfigY.minMaxCeil;
		const ceilMaxY = this.ticksConfigY.ceilMax;
		const ceilMinY = this.ticksConfigY.ceilMin;
		let scatterElement = createElement('g', {className: 'schart-scatter'});
		this.data.map((cur) => {
			let positionX = this.elementPoint0.x + (cur.x - ceilMinX) * width / minMaxCeilX;
			let positionY = this.elementPoint0.y + (ceilMaxY - cur.y) * height / minMaxCeilY;
			let slice = createCircle('schart-scatter-circle', positionX,  positionY,
					cur.r || 4, 'none', cur.color || 'rgb(24, 144, 255)');
			scatterElement.appendChild(slice);
		})
		this.svgElement.appendChild(scatterElement);
	}
	protected	mouseMove = (e) => {
		this.slices.map((current, index) => {
			if (e.target.parentElement === current) {
				let hasUpdateData = this.currentSlice === current ? false : true;
				this.tips.update(this.labels[index].data,
					e.x, e.y, hasUpdateData);
				this.currentSlice = current;
			}
		})
	}
}
