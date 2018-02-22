import Base from './Base';
import {Axis} from '../plugins/Axis';
import {Option, Position} from '../Option';
import {createText, createRect, createElement} from '../plugins/ElementFactory';
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches';
import {calculateTicks} from '../plugins/Coord';

export class BarChart extends Base {
	private min: number = 0;
	private max: number = 0;
	private ticksConfig: any;
	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.render()
	}
	public render() {
		this.renderBase();
		this.computeMinMax();
		this.renderAxis();
		this.renderBar();
		this.renderTips();
	}
	private renderAxis() {
		const axis = new Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2,
			this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
		this.axisElement = axis.render();
		this.svgElement.appendChild(this.axisElement);
	}
	private computeMinMax() {
		const height = this.elementPoint3.y - this.elementPoint0.y;
		const {labels, datasets} = this.data
		datasets.map((current) => {
			current.values.map((cur) => {
				this.min = Math.min(cur, this.min)
				this.max = Math.max(cur, this.max)
			})
		})
		this.ticksConfig = calculateTicks(this.min, this.max, height);
	}
	private renderBar() {
		const width = this.elementPoint2.x - this.elementPoint3.x;
		const height = this.elementPoint3.y - this.elementPoint0.y;
		const {minMaxCeil, ceilMax, ceilMin, zeroPosition} = this.ticksConfig;
		let barElement = createElement('g', {className: 'schart-bar'});
		const {labels, datasets} = this.data;
		const num = labels.length;
		const groupNum = datasets.length;
		const barWidth = width / (num * 2 * groupNum);
		const barOffset = width / (num);
		labels.map((cur, index) => {
			let label = {
				title: cur,
				data: []
			}
			let barGroupElement = createElement('g', {className: 'schart-bar-group'});
			let groupOffset = 0;
			groupOffset = barOffset * (index) + barOffset / 4;
			datasets.map((curDataset, indexDataset) => {
				let curValue = curDataset.values[index]
				let positionY, barHeight;
				let positionX = groupOffset + barWidth * (indexDataset) + this.elementPoint3.x;
				if (zeroPosition) {
					if (curValue >= 0) {
						barHeight = Math.abs((zeroPosition) * curValue / ceilMax);
						positionY =  this.elementPoint0.y + zeroPosition - barHeight;
					} else {
						barHeight = Math.abs((height - zeroPosition) * curValue / ceilMin);
						positionY =  this.elementPoint0.y + zeroPosition;
					}
				} else {
					if (curValue >= 0) {
						barHeight = Math.abs(height * curValue / minMaxCeil);
						positionY =  this.elementPoint0.y + height - barHeight;
					} else {
						barHeight = Math.abs(height * curValue / minMaxCeil);
						positionY =  this.elementPoint0.y;
					}
				}
				let slice = createRect('schart-bar-group-rect', barWidth, barHeight,
					positionX, positionY, 0, 0, 'none', this.colors[indexDataset]);
				barGroupElement.appendChild(slice);
				label.data.push({
					text: `${curDataset.title}: ${curValue}`,
					color: this.colors[indexDataset]
				});
			})
			this.slices.push(barGroupElement);
			barElement.appendChild(barGroupElement);
			this.svgElement.appendChild(barElement);
			this.labels.push(label)
		})
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
