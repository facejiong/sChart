import Base from './Base'
import {Option} from '../Option'
import {COlOR_CLASSFICATION} from '../plugins/ColorSwatches'

export class PieChart extends Base {
	private centerX: number;
	private centerY: number;
	private opacity: number;
	private colors: Array<string>;
	private radius: number;
	private clockWise: boolean;
	constructor(option: Option) {
		super(option)
		this.type = option.type;
		this.centerX = this.width / 2;
		this.centerY = this.height / 2;
		this.opacity = option.opacity || 0.8;
		this.colors = option.colors || COlOR_CLASSFICATION;
		this.radius = option.radius || (this.height > this.width ? this.width * 0.6 : this.height * 0.6);
		this.clockWise = option.clockWise || true;
		this.render()
	}
	public render() {
		console.log('render')
		this.setWidthHeight()
		this.drawPie()
	}
	private drawPie() {
		const {radius, clockWise} = this;
		let grand_total = this.data.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
		console.log(grand_total);
		// const prevSlicesProperties = this.slicesProperties || [];
		// this.slices = [];
		// this.elements_to_animate = [];
		// this.slicesProperties = [];
		// let curAngle = 180 - this.startAngle;
		// this.data.map((total, i) => {
		// 	const startAngle = curAngle;
		// 	const originDiffAngle = (total / this.grand_total) * FULL_ANGLE;
		// 	const diffAngle = clockWise ? -originDiffAngle : originDiffAngle;
		// 	const endAngle = curAngle = curAngle + diffAngle;
		// 	const startPosition = PieChart.getPositionByAngle(startAngle,radius);
		// 	const endPosition = PieChart.getPositionByAngle(endAngle,radius);
		// 	const prevProperty = init && prevSlicesProperties[i];
		// 	let curStart,curEnd;
		// 	if(init){
		// 		curStart = prevProperty?prevProperty.startPosition : startPosition;
		// 		curEnd = prevProperty? prevProperty.endPosition : startPosition;
		// 	}else{
		// 		curStart = startPosition;
		// 		curEnd = endPosition;
		// 	}
		// 	const curPath = this.makeArcPath(curStart,curEnd);
		// 	let slice = makePath(curPath, 'pie-path', 'none', this.colors[i]);
		// 	slice.style.transition = 'transform .3s;';
		// 	this.draw_area.appendChild(slice);

		// 	this.slices.push(slice);
		// 	this.slicesProperties.push({
		// 		startPosition,
		// 		endPosition,
		// 		value: total,
		// 		total: this.grand_total,
		// 		startAngle,
		// 		endAngle,
		// 		angle:diffAngle
		// 	});

		// });
	}
	makeArcPath(startPosition,endPosition){
		const{centerX,centerY,radius,clockWise} = this;
		return `M${centerX} ${centerY} L${centerX+startPosition.x} ${centerY+startPosition.y} A ${radius} ${radius} 0 0 ${clockWise ? 1 : 0} ${centerX+endPosition.x} ${centerY+endPosition.y} z`;
	}
}
