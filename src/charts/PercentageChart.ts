import Base from './Base'
import {Option} from '../Option'
import {createText, createRect} from '../plugins/ElementFactory'
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches'

export class PercentageChart extends Base {
	private percentageHeight: number;
	private percentageTop: number;
	private centerY: number;
	constructor(option: Option) {
		super(option);
		this.percentageHeight = option.percentageHeight || this.height * 0.2;
		this.percentageTop = option.percentageTop || this.height * 0.4;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.render()
	}
	public render() {
		console.log('PercentageChart render')
		this.setWidthHeight();
		this.filterData()
		this.drawPercentage()
	}
	private filterData() {
		this.data = this.data.filter((current) => {
			console.log(current)
			return current.value > 0
		})
	}
	private drawPercentage() {
		const {width, percentageHeight, percentageTop} = this;
		let totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
		let startWidth = 0;
		this.data.map((current, i) => {
			let curWidth = current.value * width / totalValue
			console.log(curWidth)
			let slice = createRect('percentage-rect', curWidth, percentageHeight, startWidth, percentageTop, 'none', this.colors[i]);
			startWidth += curWidth
			this.id.appendChild(slice);
		})
	}
}
