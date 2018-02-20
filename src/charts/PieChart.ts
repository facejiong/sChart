import Base from './Base'
import {createText, createPath} from '../plugins/ElementFactory'
import {Option} from '../Option'
import { COlOR_CLASSFICATION, COLOR_CONTINUOUS_SEMANTIC_DEEPPINK, hoverColor } from '../plugins/ColorSwatches';
import {Tips} from '../plugins/Tips'

const ANGLE_RATIO = Math.PI / 180;
const FULL_ANGLE = 360;

export class PieChart extends Base {
	private centerX: number;
	private centerY: number;
	private opacity: number;
	private radius: number;
	private sortDataType: string;
	private slices: Array<any>;
	private tips: any;

	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.centerX = this.width / 2;
		this.centerY = this.height / 2;
		this.opacity = option.opacity || 0.8;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.radius = option.radius || (this.height > this.width ? this.width * 0.3 : this.height * 0.3);
		this.sortDataType = option.sortDataType || 'descending';
		this.slices = [];

		this.render()
	}
	public render() {
		console.log('render')
		this.setWidthHeight();
		// 顺序 逆序
		this.sortData();
		this.drawPie();
		this.addTooltips()
	}
	private sortData () {
		if (this.sortDataType === 'descending') {
			this.data.sort((a, b) => {
				return a.value - b.value
			})
		} else if (this.sortDataType === 'ascending') {
			this.data.sort((a, b) => {
				return b.value - a.value
			})
		}
	}
	private drawPie() {
		const{centerX,centerY,radius} = this;
		let totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
		let curAngle = 180;
		this.data.map((current, i) => {
			const startAngle = curAngle;
			const diffAngle = (current.value / totalValue) * FULL_ANGLE;
			const endAngle = curAngle = curAngle + diffAngle;
			const startPosition = PieChart.getPositionByAngle(startAngle,radius);
			const endPosition = PieChart.getPositionByAngle(endAngle,radius);
			const curPath = this.makeArcPath(startPosition, endPosition, diffAngle);
			let slice = createPath(curPath, 'pie-path', 'none', this.colors[i]);
			this.slices.push(slice)
			slice.style.transition = 'transform .3s;';
			this.id.appendChild(slice);
		})
	}
	static getPositionByAngle(angle, radius){
		return {
			x:Math.sin(angle * ANGLE_RATIO) * radius,
			y:Math.cos(angle * ANGLE_RATIO) * radius,
		};
	}
	makeArcPath(startPosition, endPosition, angle){
		const{centerX,centerY,radius} = this;
		return `M${centerX} ${centerY} L${centerX+startPosition.x} ${centerY+startPosition.y} A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0} 0 ${centerX+endPosition.x} ${centerY+endPosition.y} z`;
	}

	private addTooltips() {
		this.tips = new Tips();
		this.slices.map((current) => {
			current.addEventListener('mousemove',this.mouseMove);
			current.addEventListener('mouseleave',this.mouseLeave);
		})
	}
	private	mouseMove = (e) => {
		console.log('mouseMove');
		console.log(e);
		this.slices.map((current) => {
			if (e.target === current) {
				console.log(current.style.fill);
				console.log(current);
				this.tips.update();
			}
		})
	}
	private mouseLeave(){
		console.log('mouseLeave');
		this.tips.hide();
	}
}
