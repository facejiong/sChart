/* tslint:disable-next-line:max-line-length */
// Obejct.keys(obj)
export function createHtmlElement(tag: string, o: any) {
  const element = document.createElement(tag);
  Object.keys(o).map((i) => {
    const val = o[i];

    if (i === "styles") {
      if (typeof val === "object") {
        Object.keys(val).map((prop) => {
          element.style[prop] = val[prop];
        });
      }
    } else {
      if (i === "className") { i = "class"; }
      if (i === "innerHTML") {
        element.textContent = val;
      } else {
        element.setAttribute(i, val);
      }
    }
  });
  return element;
}

export function createElement(tag: string, o?: any) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);

  Object.keys(o).map((i) => {
    const val = o[i];

    if (i === "styles") {
      if (typeof val === "object") {
        Object.keys(val).map((prop) => {
          element.style[prop] = val[prop];
        });
      }
    } else {
      if (i === "className") { i = "class"; }
      if (i === "innerHTML") {
        element.textContent = val;
      } else {
        element.setAttribute(i, val);
      }
    }
  });

  return element;
}

export function createRect(className: string, width: number, height: number, x: number, y: number, rx: number, ry: number, stroke = "none", fill = "none") {
  return createElement("rect", {
    className,
    height,
    rx,
    ry,
    styles: {
      fill,
      stroke,
    },
    width,
    x,
    y,
  });
}

export function createCircle(className: string, x: number, y: number, r: number, stroke = "none", fill = "none") {
  return createElement("circle", {
    className,
    cx: x,
    cy: y,
    r,
    styles: {
      fill,
      stroke,
    },
  });
}

export function createLine(className: string, x1: number, y1: number, x2: number, y2: number, stroke = "none", strokeWidth = 1) {
  return createElement("line", {
    className,
    styles: {
      stroke,
      "stroke-width": strokeWidth,
    },
    x1,
    x2,
    y1,
    y2,
  });
}

export function createText(className: string, x: number, y: number, content: string, fontSize: string) {
  return createElement("text", {
    className,
    dy: ".32em",
    innerHTML: content,
    styles: {
      "font-size": fontSize,
    },
    x,
    y,
  });
}
export function createPath(pathStr: string, className: string, stroke = "none", fill = "none") {
  return createElement("path", {
    className,
    d: pathStr,
    styles: {
      fill,
      stroke,
    },
  });
}
