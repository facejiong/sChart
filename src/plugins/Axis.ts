import {createText, createLine, createElement} from './ElementFactory'

export class Axis {
	private element: any;
	private elementPoint0: any;
	private elementPoint1: any;
	private elementPoint2: any;
	private elementPoint3: any;
	private horizontalData: Array<any>;
	private verticalData: Array<any>;
	private width: any;
	private height: any;

	constructor(
		elementPoint0: any,
		elementPoint1: any,
		elementPoint2: any,
		elementPoint3: any,
		horizontalData: Array<any>,
		verticalData: Array<any>,
		) {
		this.element = createElement('g', {className: 'schart-axis'});
		this.elementPoint0 = elementPoint0;
		this.elementPoint1 = elementPoint1;
		this.elementPoint2 = elementPoint2;
		this.elementPoint3 = elementPoint3;
		this.horizontalData = horizontalData || [];
		this.verticalData =  verticalData || [];
		this.width = this.elementPoint2.x - this.elementPoint3.x;
		this.height = this.elementPoint0.y - this.elementPoint3.y;
	}
	public render() {
		this.renderVertical();
		return this.element;
	}
	// 纵轴
	private renderHorizontal() {
		// const x = this.horizontalXPosition === 'left' ? 0 : this.width;
		// const line = createLine('schart-axis-horizontal', x, 0, x, this.height, '#333')
		// this.element.append(line);
	}
	private renderHorizontalDottedLine() {
		// const x = this.horizontalXPosition === 'left' ? 0 : this.width;
		// const line = createLine('axis-horizontal', x, 0, x, this.height, '#333');
		// this.element.append(line);
	}
	// 横轴
	private renderVertical() {
		const line = createLine('schart-axis-vertical',
			this.elementPoint3.x, this.elementPoint3.y, this.elementPoint2.x, this.elementPoint2.y, '#333')
		this.element.append(line);
		this.renderVerticalTicks();
	}
	private renderVerticalTicks() {
		const ticks = createElement('g', {className: 'schart-axis-vertical-ticks'});
		const ticksNum = this.verticalData.length;
		const tickLength = this.width / (ticksNum);
		this.verticalData.map((cur, index) => {
			const x = tickLength * index + tickLength * 0.5 + this.elementPoint3.x;
			const tick = createLine('schart-axis-vertical-tick', x, this.elementPoint3.y, x,
				this.elementPoint3.y + 4, '#333');
			const text = createElement('text', {
				className: 'schart-axis-vertical-tick',
				x: x,
				y: this.elementPoint3.y + 10,
				dy: '.32em',
				innerHTML: cur,
				styles: {
					'font-size': '12px',
					'text-anchor': 'middle'
				}
			});
			ticks.appendChild(tick);
			ticks.appendChild(text);
		})
		this.element.append(ticks);
	}
	private renderGrid() {

	}
}
