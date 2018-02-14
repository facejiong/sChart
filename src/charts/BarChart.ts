import Base from './Base'
import {Axis} from '../plugins/Axis'
import {Option} from '../Option'

export class BarChart extends Base {
	constructor(option: Option) {
		super(option)
		this.type = option.type;

		this.render()
	}
	private renderAxis() {
		const {labels, datasets} = this.data
		let min = 0;
		let max = 0;
		datasets.map((current) => {
			current.values.map((cur) => {
				// console.log(cur)
				min = Math.min(cur, min)
				max = Math.max(cur, max)
			})
		})
		const axis = new Axis(this.width, this.height, this.padding);
		const axisElements = axis.render();
		console.log(axisElements)
		axisElements.map((current) => {
			this.id.appendChild(current);
		})
		console.log(min)
		console.log(max)
		// const axis = new Axis();
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		this.renderAxis();
		// 顺序 逆序
		// this.sortData();
		// this.drawPie();
	}
}
