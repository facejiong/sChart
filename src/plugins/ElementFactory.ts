export function createHtmlElement(tag: string, o: any) {
	var element = document.createElement(tag);

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

export function createElement(tag: string, o?: any) {
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

export function createRect(className: string, width: number, height: number, x: number, y: number,
	rx: number, ry: number, stroke='none', fill='none') {
	return createElement('rect', {
		className: className,
		width: width,
		height: height,
		rx: rx,
		ry: ry,
		x: x,
		y: y,
		styles: {
			stroke: stroke,
			fill: fill
		}
	});
}

export function createCircle(className: string, x: number, y: number, r: number, stroke='none',
	fill='none') {
	return createElement('circle', {
		className: className,
		cx: x,
		cy: y,
		r: r,
		styles: {
			stroke: stroke,
			fill: fill
		}
	});
}

export function createLine(className: string, x1: number, y1: number, x2: number, y2: number,
	stroke='none', strokeWidth=1) {
	return createElement('line', {
		className: className,
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y2,
		styles: {
			stroke: stroke,
			'stroke-width' : strokeWidth
		}
	});
}

export function createText(className: string, x: number, y: number, content: string,fontSize: string) {
	return createElement('text', {
		className: className,
		x: x,
		y: y,
		dy: '.32em',
		innerHTML: content,
		styles: {
			'font-size': fontSize
		}
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
