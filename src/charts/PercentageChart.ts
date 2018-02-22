import Base from './Base'
import {Option} from '../Option'
import {createText, createRect, createElement} from '../plugins/ElementFactory'
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches'

export class PercentageChart extends Base {
	private percentageHeight: number;
	private percentageTop: number;
	constructor(option: Option) {
		super(option);
		this.percentageHeight = option.percentageHeight || 20;
		this.percentageTop = option.percentageTop;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.render();
	}
	public render() {
		this.filterData();
		this.renderBase();
		this.setTop();
		this.renderPercentage();
		this.renderTips();
	}
	private setTop(){
		this.percentageTop = this.percentageTop || (this.svgHeight * 0.5 - 10);
	}
	private filterData() {
		this.data = this.data.filter((current) => {
			return current.value > 0
		})
	}
	private renderPercentage() {
		const {svgWidth, percentageHeight, percentageTop} = this;
		let totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
		let startWidth = 0;
		let percentageElement = createElement('g', {className: 'schart-percentage'});
		this.data.map((current, i) => {
			let curWidth = current.value * svgWidth / totalValue
			let slice = createRect('schart-percentage-rect', curWidth, percentageHeight, startWidth,
			percentageTop, 0, 0, 'none', this.colors[i]);
			startWidth += curWidth
			percentageElement.appendChild(slice);
			this.slices.push(slice);
			let percent = current.value * 100 / totalValue;
			this.labels.push(`${current.label}: ${parseInt(String(percent), 10)}%`);
		})
		this.svgElement.appendChild(percentageElement);
	}
	protected	mouseMove = (e) => {
		this.slices.map((current, index) => {
			if (e.target === current) {
				let hasUpdateData = this.currentSlice === current ? false : true;
				this.tips.update([{color: current.style.fill, text: this.labels[index]}],
					e.x, e.y, hasUpdateData);
				this.currentSlice = current;
			}
		})
	}
}
