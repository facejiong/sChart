import {createText, createLine} from './ElementFactory'

export class Axis {
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
		this.width = width;
		this.height = height;
		this.padding = padding;
		this.horizontalData = horizontalData;
		this.verticalData = verticalData;
		this.horizontalXPosition = horizontalXPosition || 'left';
		this.verticalYPosition = verticalYPosition || 'top';;
	}
	public render() {
		this.renderHorizontal()
		this.renderVertical()
		return this.elements;
	}
	// 纵轴
	private renderHorizontal() {
		console.log(createLine)
		let x = this.horizontalXPosition === 'left' ? this.padding[3] : this.width - this.padding[1]
		const line = createLine('axis-horizontal', x, this.padding[0], x, this.height - this.padding[2], '#333')
		this.elements.push(line);
		// this.horizontalData.map((current) => {

		// })
	}
	// 横轴
	private renderVertical() {
		let y = this.verticalYPosition === 'top' ? this.padding[0] : this.width - this.padding[2]
		const line = createLine('axis-vertical', this.padding[3], y, this.width - this.padding[1], y, '#333')
		this.elements.push(line);
		// this.verticalData.map((current) => {

		// })
	}
	private renderGrid() {

	}
}
