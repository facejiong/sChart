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
		this.renderHorizontal();
		return this.element;
	}
	// 纵轴
	private renderHorizontal() {
		const ticks = createElement('g', {className: 'schart-axis-horizontal-ticks'});
		this.horizontalData.map((cur, index) => {
			const tick = createElement('g', {className: 'schart-axis-horizontal-tick'});
			const line = createLine('schart-axis-horizontal-line', this.elementPoint0.x,
			this.elementPoint0.y + cur.distance, this.elementPoint1.x, this.elementPoint0.y + cur.distance, '#F2F4F5');
			const text = createElement('text', {
				className: 'schart-axis-horizontal-text',
				x: this.elementPoint0.x - 4,
				y: this.elementPoint0.y + cur.distance,
				dy: '.32em',
				innerHTML: cur.text,
				styles: {
					'font-size': '12px',
					'text-anchor': 'end'
				}
			});
			tick.appendChild(line);
			tick.appendChild(text);
			ticks.appendChild(tick);
		})
		this.element.appendChild(ticks);
	}
	// 横轴
	public renderVertical() {
		const line = createLine('schart-axis-vertical',
			this.elementPoint3.x, this.elementPoint3.y, this.elementPoint2.x, this.elementPoint2.y, '#333')
		this.element.appendChild(line);
		this.renderVerticalTicks();
	}
	private renderVerticalTicks() {
		const ticks = createElement('g', {className: 'schart-axis-vertical-ticks'});
		const ticksNum = this.verticalData.length;
		const tickLength = this.width / (ticksNum);
		this.verticalData.map((cur, index) => {
			const x = tickLength * index + tickLength * 0.5 + this.elementPoint3.x;
			const tick = createElement('g', {className: 'schart-axis-vertical-tick'});
			const line = createLine('schart-axis-vertical-line', x, this.elementPoint3.y, x,
				this.elementPoint3.y + 4, '#333');
			const text = createElement('text', {
				className: 'schart-axis-vertical-text',
				x: x,
				y: this.elementPoint3.y + 10,
				dy: '.32em',
				innerHTML: cur,
				styles: {
					'font-size': '12px',
					'text-anchor': 'middle'
				}
			});
			tick.appendChild(line);
			tick.appendChild(text);
			ticks.appendChild(tick);
		})
		this.element.appendChild(ticks);
	}
	private renderGrid() {

	}
}
