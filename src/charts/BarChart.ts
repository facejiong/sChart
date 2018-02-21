import Base from './Base';
import {Axis} from '../plugins/Axis';
import {Option, Position} from '../Option';
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
	public render() {
		this.renderBase();
		this.renderAxis([], this.data.labels);
		this.computeMinMax();
		this.renderBar();
		this.renderTips();
	}
	private computeMinMax() {
		const height = this.elementPoint3.y - this.elementPoint0.y;
		console.log('height')
		console.log(height)
		const {labels, datasets} = this.data
		console.log(this.data)
		console.log(datasets)
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
			this.zeroY = height *  Math.abs(this.max) / (Math.abs(this.min) + Math.abs(this.max))
		}
	}
	private renderBar() {
		const width = this.elementPoint2.x - this.elementPoint3.x;
		const height = this.elementPoint3.y - this.elementPoint0.y;
		let barElement = createElement('g', {className: 'schart-bar'});
		const {labels, datasets} = this.data;
		const num = labels.length;
		const groupNum = datasets.length;
		const barWidth = width / (num * 2 * groupNum);
		const barOffset = width / (num);
		const heightValue = Math.abs(this.min) + Math.abs(this.max)
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
				let barHeight = this.svgHeight * curValue / heightValue;
				let positionY = barHeight > 0 ? this.zeroY - barHeight : this.zeroY;
				let positionX = groupOffset + barWidth * (indexDataset) + this.elementPoint3.x;
				let slice = createRect('schart-bar-rect', barWidth,  Math.abs(barHeight),
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
