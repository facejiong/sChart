import { COLOR_CONTINUOUS_SEMANTIC_GRAY } from '../plugins/ColorSwatches';
import {Option} from '../Option'
import {createText, createRect, createElement, createHtmlElement} from '../plugins/ElementFactory'
import {Tips} from '../plugins/Tips'

export default class {
	protected container: any;
	protected svgElement: any;
	protected type: string;
	protected data: any;
	protected width: number;
	protected height: number;
	protected groupChartWidth: number;
	protected groupChartHeight: number;
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
		this.width = option.width || 320;
		this.height = option.height || 240;
		this.title = option.title || '';
		this.subtitle = option.subtitle || '';
		this.padding = option.padding || [10, 10, 10 ,10];
	}
	protected renderBase() {
		console.log('base render');
		this.setWidthHeight();
		this.renderTitle();
		this.renderSvg();
	}
	protected setWidthHeight () {
		this.container.style.display = 'inline-block';
		this.container.style.position = 'relative';
		this.container.style.height = this.height;
		this.container.style.width = this.width;
		this.groupChartWidth = this.width - this.padding[1] - this.padding[3];
		this.groupChartHeight = this.height - this.padding[0] - this.padding[2] - 20;
	}
	protected renderSvg() {
		this.svgElement = createElement('svg', {className: 'schart-svg'});
		this.svgElement.style.height = this.groupChartHeight;
		this.svgElement.style.width = this.groupChartWidth;
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
