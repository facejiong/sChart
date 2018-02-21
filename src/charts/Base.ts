import { COLOR_CONTINUOUS_SEMANTIC_GRAY } from '../plugins/ColorSwatches';
import {Option} from '../Option'
import {Axis} from '../plugins/Axis';
import {createText, createRect, createElement, createHtmlElement} from '../plugins/ElementFactory'
import {Tips} from '../plugins/Tips'

interface Point {
	x,
	y
}
export default class {
	protected container: any;
	protected svgElement: any;
	protected axisElement: any;
	protected type: string;
	protected data: any;
	protected containerWidth: number;
	protected containerHeight: number;
	protected svgWidth: number;
	protected svgHeight: number;
	protected svgPoint0: Point;
	protected svgPoint1: Point;
	protected svgPoint2: Point;
	protected svgPoint3: Point;
	protected elementPoint0: Point;
	protected elementPoint1: Point;
	protected elementPoint2: Point;
	protected elementPoint3: Point;
	protected title: string;
	protected subtitle: string;
	protected colors: Array<string>;
	protected padding: Array<number>;
	protected slices: Array<any> = [];
	protected labels: Array<any> = [];
	protected tips: any;
	protected currentSlice: any;

	constructor(option: Option) {
		this.container = document.querySelector('#' + option.id);
		this.type = 'base';
		this.data = option.data;
		this.containerWidth = option.width || 320;
		this.containerHeight = option.height || 240;
		this.title = option.title || '';
		this.subtitle = option.subtitle || '';
		this.padding = option.padding || [10, 10, 10 ,10];
	}
	protected renderBase() {
		this.setWidthHeight();
		this.renderTitle();
		this.renderSvg();
		this.setLayout();
	}
	protected setWidthHeight () {
		this.container.style.display = 'inline-block';
		this.container.style.position = 'relative';
		this.container.style.height = this.containerWidth;
		this.container.style.width = this.containerHeight;
		this.svgWidth = this.containerWidth - this.padding[1] - this.padding[3];
		this.svgHeight = this.containerHeight - this.padding[0] - this.padding[2] - 20;
		this.svgPoint0 = {
			x: 0,
			y: 0
		};
		this.svgPoint1 = {
			x: this.svgWidth,
			y: 0
		};
		this.svgPoint2 = {
			x: this.svgWidth,
			y: this.svgHeight
		};
		this.svgPoint3 = {
			x: 0,
			y: this.svgHeight
		};
	}
	protected setLayout() {
		let top = 30;
		let right = 30;
		let bottom = 30;
		let left = 30;
		this.elementPoint0 = {
			x: left,
			y: top
		};
		this.elementPoint1 = {
			x: this.svgWidth - right,
			y: top
		};
		this.elementPoint2 = {
			x: this.svgWidth - right,
			y: this.svgHeight - bottom
		};
		this.elementPoint3 = {
			x: left,
			y: this.svgHeight - bottom
		};
	}
	protected renderSvg() {
		this.svgElement = createElement('svg', {className: 'schart-svg'});
		this.svgElement.style.height = this.svgHeight;
		this.svgElement.style.width = this.svgWidth;
		this.container.appendChild(this.svgElement);
	}
	protected renderTitle() {
		let title = createHtmlElement('p', {
			innerHTML: this.title,
			styles: {
				textAlign: 'center',
				margin: 0,
			}
		});
		this.container.appendChild(title);
	}
	protected renderTips() {
		this.tips = new Tips();
		this.slices.map((current) => {
			current.addEventListener('mousemove',this.mouseMove);
			current.addEventListener('mouseleave',this.mouseLeave);
		})
	}
	protected	mouseMove = (e) => {
	}
	protected mouseLeave = () => {
		this.tips.hide();
	}
}
