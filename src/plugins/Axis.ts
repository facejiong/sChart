import {createText, createLine, createElement} from './ElementFactory'

export class Axis {
	private element: any;
	private width: number;
	private height: number;
	private padding: Array<number>;
	private horizontalData: Array<any>;
	private verticalData: Array<any>;
	private horizontalXPosition: string;
	private verticalYPosition: string;
	private ticks: number;
	private elements = []
	constructor(
		width: number,
		height: number,
		padding: Array<number>,
		horizontalData: Array<any>,
		verticalData: Array<any>,
		horizontalXPosition: string,
		verticalYPosition: string
		) {
		this.element = createElement('g', {className: 'axis'});
		this.width = width;
		this.height = height;
		this.padding = padding;
		this.horizontalData = horizontalData;
		this.verticalData = verticalData;
		this.horizontalXPosition = horizontalXPosition || 'left';
		this.verticalYPosition = verticalYPosition || 'bottom';
	}
	public render() {
		this.renderHorizontal()
		this.renderVertical()
		return this.element;
	}
	// 纵轴
	private renderHorizontal() {
		console.log(createLine)
		let x = this.horizontalXPosition === 'left' ? this.padding[3] : this.width - this.padding[1]
		const line = createLine('axis-horizontal', x, this.padding[0], x, this.height - this.padding[2], '#333')
		this.element.append(line);
		// this.horizontalData.map((current) => {

		// })
	}
	// 横轴
	private renderVertical() {
		let y = this.verticalYPosition === 'top' ? this.padding[0] : this.height - this.padding[2]
		const line = createLine('axis-vertical', this.padding[3], y, this.width - this.padding[1], y, '#333')
		this.element.append(line);
		// this.verticalData.map((current) => {

		// })
	}
	private renderTicks() {

	}
	private renderGrid() {

	}
}
