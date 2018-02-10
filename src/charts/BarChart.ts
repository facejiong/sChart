import Base from './Base'
import {Option} from '../Option'

export class BarChart extends Base {
	constructor(option: Option) {
		super(option)
		this.type = option.type;
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		// 顺序 逆序
		// this.sortData();
		// this.drawPie();
	}
}
