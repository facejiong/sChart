interface Attributes {
	className?: string;
	width?: number;
	height?: number;
	x?: number;
	y?: number,
	dy?: string,
	innerHTML?: string;
	d?: string;
	styles?: Styles;
}
interface Styles {
	stroke?: string;
	fill?: string;
}

export function createElement(tag: string, o: Attributes) {
	var element = document.createElementNS("http://www.w3.org/2000/svg", tag);

	for (var i in o) {
		var val = o[i];

		if (i === "styles") {
			if(typeof val === "object") {
				Object.keys(val).map(prop => {
					element.style[prop] = val[prop];
				});
			}
		} else {
			if(i === "className") { i = "class"; }
			if(i === "innerHTML") {
				element['textContent'] = val;
			} else {
				element.setAttribute(i, val);
			}
		}
	}
	return element;
}

export function createRect(className: string, width: number, height: number, x: number, y: number, stroke='none', fill='none') {
	return createElement('rect', {
		className: className,
		width: width,
		height: height,
		x: x,
		y: y,
		styles: {
			stroke: stroke,
			fill: fill
		}
	});
}

export function createText(className: string, x: number, y: number, content: string) {
	return createElement('text', {
		className: className,
		x: x,
		y: y,
		dy: '.32em',
		innerHTML: content
	});
}
export function createPath(pathStr: string, className: string, stroke='none', fill='none') {
	return createElement('path', {
		className: className,
		d: pathStr,
		styles: {
			stroke: stroke,
			fill: fill
		}
	});
}
