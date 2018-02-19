import {createText, createLine, createElement} from './ElementFactory'

export class Coord {
	private element: any;
	private width: number;
	private height: number;
	constructor(
		width: number,
		height: number,
		) {
		this.element = createElement('g', {className: 'axis'});
		this.width = width;
		this.height = height;
	}
}
