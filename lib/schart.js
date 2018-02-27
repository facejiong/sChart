(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Chart"] = factory();
	else
		root["Chart"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createHtmlElement(tag, o) {
    const element = document.createElement(tag);
    Object.keys(o).map((i) => {
        const val = o[i];
        if (i === "styles") {
            if (typeof val === "object") {
                Object.keys(val).map((prop) => {
                    element.style[prop] = val[prop];
                });
            }
        }
        else {
            if (i === "className") {
                i = "class";
            }
            if (i === "innerHTML") {
                element.textContent = val;
            }
            else {
                element.setAttribute(i, val);
            }
        }
    });
    return element;
}
exports.createHtmlElement = createHtmlElement;
function createElement(tag, o) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(o).map((i) => {
        const val = o[i];
        if (i === "styles") {
            if (typeof val === "object") {
                Object.keys(val).map((prop) => {
                    element.style[prop] = val[prop];
                });
            }
        }
        else {
            if (i === "className") {
                i = "class";
            }
            if (i === "innerHTML") {
                element.textContent = val;
            }
            else {
                element.setAttribute(i, val);
            }
        }
    });
    return element;
}
exports.createElement = createElement;
// tslint:disable-next-line:max-line-length
function createRect(className, width, height, x, y, rx, ry, stroke = "none", fill = "none") {
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
exports.createRect = createRect;
function createCircle(className, x, y, r, stroke = "none", fill = "none") {
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
exports.createCircle = createCircle;
// tslint:disable-next-line:max-line-length
function createLine(className, x1, y1, x2, y2, stroke = "none", strokeWidth = 1) {
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
exports.createLine = createLine;
function createText(className, x, y, content, fontSize) {
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
exports.createText = createText;
function createPath(pathStr, className, stroke = "none", fill = "none") {
    return createElement("path", {
        className,
        d: pathStr,
        styles: {
            fill,
            stroke,
        },
    });
}
exports.createPath = createPath;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = __webpack_require__(5);
const ElementFactory_1 = __webpack_require__(0);
const Legend_1 = __webpack_require__(8);
const Tips_1 = __webpack_require__(9);
class Base {
    constructor(option) {
        this.slices = [];
        this.mouseMove = (e) => {
            this.slices.map((current, index) => {
                if (e.target === current.slice) {
                    const color = new Color_1.Color(current.color);
                    current.slice.style.fill = color.lighten(0.2).getHex();
                    const hasUpdateData = this.currentSlice === current ? false : true;
                    this.tips.update([{ color: current.color, text: `${current.title}: ${current.value}` }], e.x, e.y, hasUpdateData);
                    this.currentSlice = current;
                }
            });
        };
        this.mouseLeave = () => {
            this.tips.hide();
            this.currentSlice.slice.style.fill = this.currentSlice.color;
        };
        this.container = document.querySelector("#" + option.id);
        this.type = option.type;
        this.data = option.data;
        this.containerWidth = option.width || 320;
        this.containerHeight = option.height || 240;
        this.padding = option.padding || [10, 10, 10, 10];
    }
    renderBase() {
        this.setWidthHeight();
        this.renderSvg();
        this.renderLegend();
        this.setLayout();
    }
    renderLegend() {
        const legendType = {
            bar: "rect",
            heatmap: "rect",
            line: "line",
            percentage: "rect",
            pie: "circle",
        };
        this.legend = new Legend_1.Legend(legendType[this.type]);
        this.container.appendChild(this.legend.render());
    }
    updateLegend() {
        //
    }
    setWidthHeight() {
        this.container.style.display = "inline-block";
        this.container.style.position = "relative";
        this.container.style.height = this.containerWidth;
        this.container.style.width = this.containerHeight;
        this.svgWidth = this.containerWidth - this.padding[1] - this.padding[3];
        this.svgHeight = this.containerHeight - this.padding[0] - this.padding[2] - 20;
        this.svgPoint0 = {
            x: 0,
            y: 0,
        };
        this.svgPoint1 = {
            x: this.svgWidth,
            y: 0,
        };
        this.svgPoint2 = {
            x: this.svgWidth,
            y: this.svgHeight,
        };
        this.svgPoint3 = {
            x: 0,
            y: this.svgHeight,
        };
    }
    setLayout() {
        const top = 30;
        const right = 30;
        const bottom = 30;
        const left = 30;
        this.elementPoint0 = {
            x: left,
            y: top,
        };
        this.elementPoint1 = {
            x: this.svgWidth - right,
            y: top,
        };
        this.elementPoint2 = {
            x: this.svgWidth - right,
            y: this.svgHeight - bottom,
        };
        this.elementPoint3 = {
            x: left,
            y: this.svgHeight - bottom,
        };
    }
    renderSvg() {
        this.svgElement = ElementFactory_1.createElement("svg", {
            className: "schart-svg",
            height: this.svgHeight,
            version: "1.1",
            width: this.svgWidth,
            xmlns: "http://www.w3.org/2000/svg",
        });
        this.container.appendChild(this.svgElement);
    }
    renderTips() {
        this.tips = new Tips_1.Tips();
        this.slices.map((current) => {
            current.slice.addEventListener("mousemove", this.mouseMove);
            current.slice.addEventListener("mouseleave", this.mouseLeave);
        });
    }
}
exports.Base = Base;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.colorClassfication = ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"];
exports.colorContinuous = ["#E6F7FF", "#BAE7FF", "#91D5FF", "#69C0FF", "#40A9FF", "#1890FF", "#096DD9", "#0050B3", "#003A8C", "#002766"];
exports.colorContinuousSemanticGreen = ["#F0FFF2", "#D7F5DC", "#A7E8B4", "#7BDB91", "#53CF74", "#2FC25B", "#1E9C48", "#107535", "#074F24", "#032914"];
exports.colorContinuousSemanticOrange = ["#FFF7E6", "#FFE7BA", "#FFD591", "#FFC069", "#FFA940", "#FA8C16", "#D46B08", "#AD4E00", "#873800", "#612500"];
exports.colorContinuousSemanticDeeppink = ["#FFF0F0", "#FFDCDC", "#FFC8CB", "#FF9EA8", "#FC7486", "#F04864", "#C93251", "#A32240", "#7C132F", "#570D23"];
exports.colorContinuousSemanticGray = ["#FAFBFC", "#F2F4F5", "#EBEDF0", "#CED4D9", "#A3B1BF", "#697B8C", "#314659", "#0D1A26"];
exports.colorHeatmap = ["#531DAB", "#2F54EB", "#40A9FF", "#5CDBD3", "#B7EB8F", "#FFE58F", "#FFC069", "#FF7A45", "#F53B44", "#A8071A"];
// OPACITY
// line 1
// middle area 0.8 -- bar,pie,
// large area 0.3


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ElementFactory_1 = __webpack_require__(0);
class Axis {
    constructor(elementPoint0, elementPoint1, elementPoint2, elementPoint3, horizontalData, verticalData) {
        this.element = ElementFactory_1.createElement("g", { className: "schart-axis" });
        this.elementPoint0 = elementPoint0;
        this.elementPoint1 = elementPoint1;
        this.elementPoint2 = elementPoint2;
        this.elementPoint3 = elementPoint3;
        this.horizontalData = horizontalData || [];
        this.verticalData = verticalData || [];
        this.width = this.elementPoint2.x - this.elementPoint3.x;
        this.height = this.elementPoint0.y - this.elementPoint3.y;
    }
    render() {
        this.renderVertical();
        this.renderHorizontal();
        return this.element;
    }
    // 纵轴
    renderHorizontal() {
        const ticks = ElementFactory_1.createElement("g", { className: "schart-axis-horizontal-ticks" });
        this.horizontalData.map((cur, index) => {
            const tick = ElementFactory_1.createElement("g", { className: "schart-axis-horizontal-tick" });
            const line = ElementFactory_1.createLine("schart-axis-horizontal-line", this.elementPoint0.x, this.elementPoint0.y + cur.distance, this.elementPoint1.x, this.elementPoint0.y + cur.distance, "#F2F4F5");
            const text = ElementFactory_1.createElement("text", {
                className: "schart-axis-horizontal-text",
                dy: ".32em",
                innerHTML: cur.text,
                styles: {
                    "font-size": "12px",
                    "text-anchor": "end",
                },
                x: this.elementPoint0.x - 4,
                y: this.elementPoint0.y + cur.distance,
            });
            tick.appendChild(line);
            tick.appendChild(text);
            ticks.appendChild(tick);
        });
        this.element.appendChild(ticks);
    }
    // 横轴
    renderVertical() {
        const line = ElementFactory_1.createLine("schart-axis-vertical", this.elementPoint3.x, this.elementPoint3.y, this.elementPoint2.x, this.elementPoint2.y, "#333");
        this.element.appendChild(line);
        this.renderVerticalTicks();
    }
    renderVerticalTicks() {
        const ticks = ElementFactory_1.createElement("g", { className: "schart-axis-vertical-ticks" });
        const ticksNum = this.verticalData.length;
        const tickLength = this.width / (ticksNum);
        this.verticalData.map((cur, index) => {
            const x = tickLength * index + tickLength * 0.5 + this.elementPoint3.x;
            const tick = ElementFactory_1.createElement("g", { className: "schart-axis-vertical-tick" });
            const line = ElementFactory_1.createLine("schart-axis-vertical-line", x, this.elementPoint3.y, x, this.elementPoint3.y + 4, "#333");
            const text = ElementFactory_1.createElement("text", {
                className: "schart-axis-vertical-text",
                dy: ".32em",
                innerHTML: cur,
                styles: {
                    "font-size": "12px",
                    "text-anchor": "middle",
                },
                x,
                y: this.elementPoint3.y + 10,
            });
            tick.appendChild(line);
            tick.appendChild(text);
            ticks.appendChild(tick);
        });
        this.element.appendChild(ticks);
    }
}
exports.Axis = Axis;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculateTicks(min, max, distance) {
    const minMaxNum = Math.abs(max - min);
    const minMaxPow = Math.pow(10, String(minMaxNum).length - 1);
    const ceilMin = ceilNum(min, minMaxPow);
    const ceilMax = ceilNum(max, minMaxPow);
    const minMaxCeil = ceilMax - ceilMin;
    const ticksNumber = minMaxCeil / minMaxPow;
    const ticksDistance = distance / ticksNumber;
    const minMaxCeilTickValue = minMaxCeil / ticksNumber;
    const ticks = [];
    for (let i = 0; i <= ticksNumber; i++) {
        ticks.unshift({
            distance: distance - ticksDistance * i,
            text: ceilMin + minMaxCeilTickValue * i,
        });
    }
    let zeroPosition;
    if (ceilMax > 0 && ceilMin < 0) {
        zeroPosition = ceilMax * distance / minMaxCeil;
    }
    const config = {
        ceilMax,
        ceilMin,
        minMaxCeil,
        ticks,
        zeroPosition,
    };
    return config;
}
exports.calculateTicks = calculateTicks;
function ceilNum(num, pow) {
    const ceilNumber = Math.ceil(Math.abs(num) / pow) * pow;
    return num > 0 ? ceilNumber : -ceilNumber;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Color {
    constructor(color) {
        this.setColor(color);
    }
    setColor(color) {
        if (color.indexOf("#") === 0) {
            this.hex = color;
            this.rgb = this.hexToRgb(color);
            this.hsl = this.rgbToHsl(this.rgb);
        }
        else if (color.indexOf("rgb") === 0) {
            this.rgb = this.rgbStringToArray(color);
            this.hex = this.rgbToHex(this.rgb);
            this.hsl = this.rgbToHsl(this.rgb);
        }
        else if (color.indexOf("hsl") === 0) {
            this.hsl = this.hslStringToArray(color);
            this.rgb = this.hslToRgb(this.hsl);
            this.hex = this.rgbToHex(this.rgb);
        }
    }
    getHex() {
        return this.hex;
    }
    getRgb() {
        return this.rgb;
    }
    getRgbString() {
        const { rgb } = this;
        return rgb.length === 3 ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})`;
    }
    getHsl() {
        return this.hsl;
    }
    getHslString() {
        const { hsl } = this;
        // tslint:disable-next-line:max-line-length
        return hsl.length === 3 ? `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)` : `hsla(${hsl[0]},${hsl[1]}%,${hsl[2]}%,${hsl[3]})`;
    }
    rgbStringToArray(str) {
        if (!str) {
            return null;
        }
        // tslint:disable-next-line:max-line-length
        const rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
        const match = str.match(rgba);
        const rgb = [0, 0, 0, 1];
        if (match) {
            for (let i = 0; i < 3; i++) {
                rgb[i] = parseInt(match[i + 1], 0);
            }
            if (match[4]) {
                rgb[3] = parseFloat(match[4]);
            }
            for (let i = 0; i < 3; i++) {
                rgb[i] = this.clamp(rgb[i], 0, 255);
            }
            rgb[3] = this.clamp(rgb[3], 0, 1);
            return rgb;
        }
        return null;
    }
    hslStringToArray(str) {
        if (!str) {
            return null;
        }
        // tslint:disable-next-line:max-line-length
        const hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
        const match = str.match(hsl);
        if (match) {
            const alpha = parseFloat(match[4]);
            const h = ((parseFloat(match[1]) % 360) + 360) % 360;
            const s = this.clamp(parseFloat(match[2]), 0, 100);
            const l = this.clamp(parseFloat(match[3]), 0, 100);
            const a = this.clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
            return [h, s, l, a];
        }
        return null;
    }
    rgbToHex(args) {
        const integer = ((Math.round(args[0]) & 0xFF) << 16)
            + ((Math.round(args[1]) & 0xFF) << 8)
            + (Math.round(args[2]) & 0xFF);
        const str = integer.toString(16).toUpperCase();
        return "#" + "000000".substring(str.length) + str;
    }
    hexToRgb(args) {
        const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
            return [0, 0, 0];
        }
        let colorString = match[0];
        if (match[0].length === 3) {
            colorString = colorString.split("").map((char) => {
                return char + char;
            }).join("");
        }
        const integer = parseInt(colorString, 16);
        const r = (integer >> 16) & 0xFF;
        const g = (integer >> 8) & 0xFF;
        const b = integer & 0xFF;
        return [r, g, b];
    }
    rgbToHsl(rgb) {
        const r = rgb[0] / 255;
        const g = rgb[1] / 255;
        const b = rgb[2] / 255;
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const delta = max - min;
        let h;
        let s;
        let l;
        if (max === min) {
            h = 0;
        }
        else if (r === max) {
            h = (g - b) / delta;
        }
        else if (g === max) {
            h = 2 + (b - r) / delta;
        }
        else if (b === max) {
            h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
            h += 360;
        }
        l = (min + max) / 2;
        if (max === min) {
            s = 0;
        }
        else if (l <= 0.5) {
            s = delta / (max + min);
        }
        else {
            s = delta / (2 - max - min);
        }
        return [parseFloat(h.toFixed(2)), parseFloat((s * 100).toFixed(2)), parseFloat((l * 100).toFixed(2))];
    }
    hslToRgb(hsl) {
        const h = hsl[0] / 360;
        const s = hsl[1] / 100;
        const l = hsl[2] / 100;
        let t1;
        let t2;
        let t3;
        let rgb;
        let val;
        if (s === 0) {
            val = l * 255;
            return [val, val, val];
        }
        if (l < 0.5) {
            t2 = l * (1 + s);
        }
        else {
            t2 = l + s - l * s;
        }
        t1 = 2 * l - t2;
        rgb = [0, 0, 0];
        for (let i = 0; i < 3; i++) {
            t3 = h + 1 / 3 * -(i - 1);
            if (t3 < 0) {
                t3++;
            }
            if (t3 > 1) {
                t3--;
            }
            if (6 * t3 < 1) {
                val = t1 + (t2 - t1) * 6 * t3;
            }
            else if (2 * t3 < 1) {
                val = t2;
            }
            else if (3 * t3 < 2) {
                val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            }
            else {
                val = t1;
            }
            rgb[i] = parseFloat((val * 255).toFixed(2));
        }
        return rgb;
    }
    isDark() {
        const rgb = this.rgb;
        const yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq < 128;
    }
    isLight() {
        return !this.isDark();
    }
    lighten(ratio) {
        const hsl = this.hsl;
        hsl[2] = hsl[2] * (1 + ratio);
        this.setColor(this.getHslString());
        return this;
    }
    darken(ratio) {
        const hsl = this.hsl;
        hsl[2] -= hsl[2] * ratio;
        this.setColor(this.getHslString());
        return this;
    }
    clamp(num, min, max) {
        return Math.min(Math.max(min, num), max);
    }
}
exports.Color = Color;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const BarChart_1 = __webpack_require__(7);
const Heatmap_1 = __webpack_require__(10);
const LineChart_1 = __webpack_require__(11);
const PercentageChart_1 = __webpack_require__(12);
const PieChart_1 = __webpack_require__(13);
const ScatterChart_1 = __webpack_require__(14);
const typeCharts = {
    bar: BarChart_1.BarChart,
    heatmap: Heatmap_1.Heatmap,
    line: LineChart_1.LineChart,
    percentage: PercentageChart_1.PercentageChart,
    pie: PieChart_1.PieChart,
    scatter: ScatterChart_1.ScatterChart,
};
class Chart {
    constructor(option) {
        return new typeCharts[option.type](option);
    }
}
exports.default = Chart;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Axis_1 = __webpack_require__(3);
const ColorSwatches_1 = __webpack_require__(2);
const Coord_1 = __webpack_require__(4);
const ElementFactory_1 = __webpack_require__(0);
const Base_1 = __webpack_require__(1);
class BarChart extends Base_1.Base {
    constructor(option) {
        super(option);
        this.min = 0;
        this.max = 0;
        this.colors = option.colors || ColorSwatches_1.colorClassfication;
        this.render();
    }
    updateLegend() {
        const hash = {};
        const data = [];
        this.slices.map((cur) => {
            if (!hash[cur.title]) {
                hash[cur.title] = cur.color;
            }
        });
        Object.keys(hash).map((key) => {
            data.push({
                color: hash[key],
                title: key,
            });
        });
        this.legend.updateData(data);
    }
    render() {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderBar();
        this.updateLegend();
        this.renderTips();
    }
    renderAxis() {
        const axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    }
    computeMinMax() {
        const height = this.elementPoint3.y - this.elementPoint0.y;
        const { labels, datasets } = this.data;
        datasets.map((current) => {
            current.values.map((cur) => {
                this.min = Math.min(cur, this.min);
                this.max = Math.max(cur, this.max);
            });
        });
        this.ticksConfig = Coord_1.calculateTicks(this.min, this.max, height);
    }
    renderBar() {
        const width = this.elementPoint2.x - this.elementPoint3.x;
        const height = this.elementPoint3.y - this.elementPoint0.y;
        const { minMaxCeil, ceilMax, ceilMin, zeroPosition } = this.ticksConfig;
        const barElement = ElementFactory_1.createElement("g", { className: "schart-bar" });
        const { labels, datasets } = this.data;
        const num = labels.length;
        const groupNum = datasets.length;
        const barWidth = width / (num * 2 * groupNum);
        const barOffset = width / (num);
        labels.map((cur, index) => {
            const label = {
                data: [],
                title: cur,
            };
            const barGroupElement = ElementFactory_1.createElement("g", { className: "schart-bar-group" });
            let groupOffset = 0;
            groupOffset = barOffset * (index) + barOffset / 4;
            datasets.map((curDataset, indexDataset) => {
                const curValue = curDataset.values[index];
                let positionY;
                let barHeight;
                const positionX = groupOffset + barWidth * (indexDataset) + this.elementPoint3.x;
                if (zeroPosition) {
                    if (curValue >= 0) {
                        barHeight = Math.abs((zeroPosition) * curValue / ceilMax);
                        positionY = this.elementPoint0.y + zeroPosition - barHeight;
                    }
                    else {
                        barHeight = Math.abs((height - zeroPosition) * curValue / ceilMin);
                        positionY = this.elementPoint0.y + zeroPosition;
                    }
                }
                else {
                    if (curValue >= 0) {
                        barHeight = Math.abs(height * curValue / minMaxCeil);
                        positionY = this.elementPoint0.y + height - barHeight;
                    }
                    else {
                        barHeight = Math.abs(height * curValue / minMaxCeil);
                        positionY = this.elementPoint0.y;
                    }
                }
                const slice = ElementFactory_1.createRect("schart-bar-group-rect", barWidth, barHeight, positionX, positionY, 0, 0, "none", this.colors[indexDataset]);
                this.slices.push({
                    color: this.colors[indexDataset],
                    slice,
                    title: curDataset.title,
                    value: curValue,
                });
                barGroupElement.appendChild(slice);
            });
            barElement.appendChild(barGroupElement);
            this.svgElement.appendChild(barElement);
        });
    }
}
exports.BarChart = BarChart;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ElementFactory_1 = __webpack_require__(0);
const typeStyle = {
    circle: {
        borderRadius: "10px",
        height: "10px",
        marginTop: "5px",
        width: "10px",
    },
    line: {
        height: "4px",
        marginTop: "8px",
        width: "20px",
    },
    rect: {
        height: "10px",
        marginTop: "5px",
        width: "10px",
    },
};
class Legend {
    constructor(type) {
        this.data = [];
        this.type = type;
    }
    render() {
        const element = ElementFactory_1.createHtmlElement("span", {
            className: "schart-legend",
            styles: {
                display: "inline-block",
                height: "20px",
                width: "100%",
            },
        });
        this.element = element;
        return element;
    }
    clearNodes() {
        while (this.element.hasChildNodes()) {
            this.element.removeChild(this.element.firstChild);
        }
    }
    updateData(data) {
        this.clearNodes();
        data.map((cur) => {
            const curContainer = ElementFactory_1.createHtmlElement("span", {
                className: "schart-legend-one",
                styles: {
                    display: "inline-block",
                    height: "20px",
                },
            });
            // color
            const curColorContainer = ElementFactory_1.createHtmlElement("span", {
                className: "schart-legend-one-color",
                styles: Object.assign({}, typeStyle[this.type], { background: cur.color, display: "inline-block", marginRight: "4px", verticalAlign: "top" }),
            });
            // text
            const curTextContainer = ElementFactory_1.createHtmlElement("span", {
                className: "schart-legend-one-title",
                innerHTML: cur.title,
                styles: {
                    color: "#333",
                    display: "inline-block",
                    fontSize: "14px",
                    margin: "0 10px 0 0",
                    verticalAlign: "top",
                },
            });
            curContainer.appendChild(curColorContainer);
            curContainer.appendChild(curTextContainer);
            this.element.appendChild(curContainer);
        });
    }
}
exports.Legend = Legend;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ElementFactory_1 = __webpack_require__(0);
class Tips {
    constructor() {
        this.data = [];
        this.render();
    }
    update(data, x, y, hasUpdateData = true) {
        this.data = data;
        this.element.style.display = "inline-block";
        this.element.style.top = (y + 20) + "px";
        this.element.style.left = (x + 20) + "px";
        if (hasUpdateData) {
            this.renderData();
        }
    }
    hide() {
        this.element.style.display = "none";
    }
    render() {
        const element = ElementFactory_1.createHtmlElement("div", {
            className: "schart-tips",
            styles: {
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "4px",
                display: "none",
                padding: "10px",
                position: "fixed",
            },
        });
        this.element = element;
        this.renderData();
        document.body.appendChild(element);
    }
    clearNodes() {
        while (this.element.hasChildNodes()) {
            this.element.removeChild(this.element.firstChild);
        }
    }
    renderData() {
        this.clearNodes();
        this.data.map((cur) => {
            const curContainer = ElementFactory_1.createHtmlElement("div", {
                styles: {
                    height: 24,
                },
            });
            // color
            const curColorContainer = ElementFactory_1.createHtmlElement("span", {
                styles: {
                    background: cur.color,
                    border: "1px solid #fff",
                    borderRadius: "10px",
                    display: "inline-block",
                    height: "10px",
                    margin: "0 8px 0 0",
                    width: "10px",
                },
            });
            // text
            const curTextContainer = ElementFactory_1.createHtmlElement("span", {
                innerHTML: cur.text,
                styles: {
                    color: "#fff",
                    display: "inline-block",
                    fontSize: "14px",
                },
            });
            curContainer.appendChild(curColorContainer);
            curContainer.appendChild(curTextContainer);
            this.element.appendChild(curContainer);
        });
    }
    calculatePosition(x, y) {
        const clientWidth = document.body.clientWidth;
        const clientHeight = document.body.clientHeight;
    }
}
exports.Tips = Tips;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __webpack_require__(1);
class Heatmap extends Base_1.Base {
    constructor(option) {
        super(option);
    }
}
exports.Heatmap = Heatmap;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Axis_1 = __webpack_require__(3);
const ColorSwatches_1 = __webpack_require__(2);
const Coord_1 = __webpack_require__(4);
const ElementFactory_1 = __webpack_require__(0);
const Base_1 = __webpack_require__(1);
class LineChart extends Base_1.Base {
    constructor(option) {
        super(option);
        this.min = 0;
        this.max = 0;
        this.colors = option.colors || ColorSwatches_1.colorClassfication;
        this.render();
    }
    updateLegend() {
        const hash = {};
        const data = [];
        this.slices.map((cur) => {
            if (!hash[cur.title]) {
                hash[cur.title] = cur.color;
            }
        });
        Object.keys(hash).map((key) => {
            data.push({
                color: hash[key],
                title: key,
            });
        });
        this.legend.updateData(data);
    }
    render() {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderLine();
        this.updateLegend();
        this.renderTips();
    }
    renderAxis() {
        const axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    }
    computeMinMax() {
        const height = this.elementPoint3.y - this.elementPoint0.y;
        const { labels, datasets } = this.data;
        datasets.map((current) => {
            current.values.map((cur) => {
                this.min = Math.min(cur, this.min);
                this.max = Math.max(cur, this.max);
            });
        });
        this.ticksConfig = Coord_1.calculateTicks(this.min, this.max, height);
    }
    renderLine() {
        const width = this.elementPoint2.x - this.elementPoint3.x;
        const height = this.elementPoint3.y - this.elementPoint0.y;
        const { minMaxCeil, ceilMax, ceilMin, zeroPosition } = this.ticksConfig;
        const lineElement = ElementFactory_1.createElement("g", { className: "schart-line" });
        const { labels, datasets } = this.data;
        const num = labels.length;
        const lineInterval = width / (num);
        datasets.map((curDataset, indexDataset) => {
            const lineGroupElement = ElementFactory_1.createElement("g", { className: "schart-line-group" });
            curDataset.values.map((curValue, indexValue, arr) => {
                const positionY0 = this.elementPoint0.y + (ceilMax - arr[indexValue]) * height / minMaxCeil;
                const positionY1 = this.elementPoint0.y + (ceilMax - arr[indexValue + 1]) * height / minMaxCeil;
                const positionX0 = this.elementPoint0.x + lineInterval * (indexValue + 0.5);
                const positionX1 = this.elementPoint0.x + lineInterval * (indexValue + 1.5);
                const slicePoint = ElementFactory_1.createCircle("schart-line-group-point", positionX0, positionY0, 5, "#fff", this.colors[indexDataset]);
                this.slices.unshift({
                    color: this.colors[indexDataset],
                    slice: slicePoint,
                    title: curDataset.title,
                    value: curValue,
                });
                if (indexValue < arr.length - 1) {
                    const sliceLine = ElementFactory_1.createLine("schart-line-group-line", positionX0, positionY0, positionX1, positionY1, this.colors[indexDataset], 2);
                    lineGroupElement.appendChild(sliceLine);
                }
                lineGroupElement.appendChild(slicePoint);
            });
            lineElement.appendChild(lineGroupElement);
        });
        this.svgElement.appendChild(lineElement);
    }
}
exports.LineChart = LineChart;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSwatches_1 = __webpack_require__(2);
const ElementFactory_1 = __webpack_require__(0);
const Base_1 = __webpack_require__(1);
class PercentageChart extends Base_1.Base {
    constructor(option) {
        super(option);
        this.percentageHeight = option.percentageHeight || 20;
        this.percentageTop = option.percentageTop;
        this.colors = option.colors || ColorSwatches_1.colorClassfication;
        this.render();
    }
    updateLegend() {
        this.legend.updateData(this.slices);
    }
    render() {
        this.filterData();
        this.renderBase();
        this.setTop();
        this.renderPercentage();
        this.updateLegend();
        this.renderTips();
    }
    setTop() {
        this.percentageTop = this.percentageTop || (this.svgHeight * 0.5 - 10);
    }
    filterData() {
        this.data = this.data.filter((current) => {
            return current.value > 0;
        });
    }
    renderPercentage() {
        const { svgWidth, percentageHeight, percentageTop } = this;
        const totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
        let startWidth = 0;
        const percentageElement = ElementFactory_1.createElement("g", { className: "schart-percentage" });
        this.data.map((current, i) => {
            const curWidth = current.value * svgWidth / totalValue;
            const slice = ElementFactory_1.createRect("schart-percentage-rect", curWidth, percentageHeight, startWidth, percentageTop, 0, 0, "none", this.colors[i]);
            startWidth += curWidth;
            percentageElement.appendChild(slice);
            const percent = current.value * 100 / totalValue;
            this.slices.push({
                color: this.colors[i],
                slice,
                title: current.label,
                value: parseInt(String(percent), 10),
            });
        });
        this.svgElement.appendChild(percentageElement);
    }
}
exports.PercentageChart = PercentageChart;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorSwatches_1 = __webpack_require__(2);
const ElementFactory_1 = __webpack_require__(0);
const Base_1 = __webpack_require__(1);
const ANGLE_RATIO = Math.PI / 180;
const FULL_ANGLE = 360;
class PieChart extends Base_1.Base {
    constructor(option) {
        super(option);
        this.colors = option.colors || ColorSwatches_1.colorClassfication;
        this.sortDataType = option.sortDataType || "descending";
        this.radius = option.radius;
        this.innerRadius = option.innerRadius || 0;
        this.render();
    }
    updateLegend() {
        this.legend.updateData(this.slices);
    }
    render() {
        this.sortData();
        this.renderBase();
        this.setPosition();
        this.renderPie();
        this.renderInnerCircle();
        this.updateLegend();
        this.renderTips();
    }
    getPositionByAngle(angle, radius) {
        return {
            x: Math.sin(angle * ANGLE_RATIO) * radius,
            y: Math.cos(angle * ANGLE_RATIO) * radius,
        };
    }
    setPosition() {
        this.centerX = this.svgWidth / 2;
        this.centerY = this.svgHeight / 2;
        this.radius = this.radius || (this.svgHeight > this.svgWidth ? this.svgWidth * 0.45 : this.svgHeight * 0.45);
    }
    sortData() {
        if (this.sortDataType === "descending") {
            this.data.sort((a, b) => {
                return a.value - b.value;
            });
        }
        else if (this.sortDataType === "ascending") {
            this.data.sort((a, b) => {
                return b.value - a.value;
            });
        }
    }
    renderPie() {
        const { centerX, centerY, radius } = this;
        const totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
        let curAngle = 180;
        const pieElement = ElementFactory_1.createElement("g", { className: "schart-pie" });
        this.data.map((current, i) => {
            const startAngle = curAngle;
            const diffAngle = (current.value / totalValue) * FULL_ANGLE;
            const endAngle = curAngle = curAngle + diffAngle;
            const startPosition = this.getPositionByAngle(startAngle, radius);
            const endPosition = this.getPositionByAngle(endAngle, radius);
            const curPath = this.makeArcPath(startPosition, endPosition, diffAngle);
            const slice = ElementFactory_1.createPath(curPath, "schart-pie-path", "none", this.colors[i]);
            pieElement.appendChild(slice);
            const percent = diffAngle / 3.6;
            this.slices.unshift({
                color: this.colors[i],
                slice,
                title: current.label,
                value: parseInt(String(percent), 10) + "%",
            });
        });
        this.svgElement.appendChild(pieElement);
    }
    renderInnerCircle() {
        const { centerX, centerY, innerRadius } = this;
        if (innerRadius > 0) {
            const c = ElementFactory_1.createCircle("schart-pie-inner", centerX, centerY, innerRadius, "none", "#fff");
            this.svgElement.appendChild(c);
        }
    }
    makeArcPath(startPosition, endPosition, angle) {
        const { centerX, centerY, radius } = this;
        return `M${centerX} ${centerY} L${centerX + startPosition.x}
      ${centerY + startPosition.y} A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0}
       0 ${centerX + endPosition.x} ${centerY + endPosition.y} z`;
    }
}
exports.PieChart = PieChart;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Axis_1 = __webpack_require__(3);
const Color_1 = __webpack_require__(5);
const Coord_1 = __webpack_require__(4);
const ElementFactory_1 = __webpack_require__(0);
const Base_1 = __webpack_require__(1);
class ScatterChart extends Base_1.Base {
    constructor(option) {
        super(option);
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
        this.maxR = 4;
        this.mouseMove = (e) => {
            this.slices.map((current, index) => {
                if (e.target === current.slice) {
                    const color = new Color_1.Color(current.color);
                    current.slice.style.fill = color.lighten(0.2).getHex();
                    const hasUpdateData = this.currentSlice === current ? false : true;
                    this.tips.update([{ color: current.color, text: current.title }], e.x, e.y, hasUpdateData);
                    this.currentSlice = current;
                }
            });
        };
        this.render();
    }
    render() {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderLine();
        this.renderTips();
    }
    computeMinMax() {
        const distanceX = this.elementPoint1.x - this.elementPoint0.x;
        const distanceY = this.elementPoint3.y - this.elementPoint0.y;
        const { labels, datasets } = this.data;
        this.data.map((current) => {
            const defaultR = current.r || 4;
            this.minX = Math.min(current.x, this.minX);
            this.maxX = Math.max(current.x, this.maxX);
            this.minY = Math.min(current.y, this.minY);
            this.maxY = Math.max(current.y, this.maxY);
            this.maxR = Math.max(defaultR, this.maxR);
        });
        this.ticksConfigX = Coord_1.calculateTicks(this.minX - this.maxR, this.maxX + this.maxR, distanceX);
        this.ticksConfigY = Coord_1.calculateTicks(this.minY - this.maxR, this.maxY + this.maxR, distanceY);
    }
    renderAxis() {
        const labelX = [];
        this.ticksConfigX.ticks.map((cur) => {
            labelX.unshift(cur.text);
        });
        const axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfigY.ticks, labelX);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    }
    renderLine() {
        const width = this.elementPoint2.x - this.elementPoint3.x;
        const height = this.elementPoint3.y - this.elementPoint0.y;
        const minMaxCeilX = this.ticksConfigX.minMaxCeil;
        const ceilMaxX = this.ticksConfigX.ceilMax;
        const ceilMinX = this.ticksConfigX.ceilMin;
        const minMaxCeilY = this.ticksConfigY.minMaxCeil;
        const ceilMaxY = this.ticksConfigY.ceilMax;
        const ceilMinY = this.ticksConfigY.ceilMin;
        const scatterElement = ElementFactory_1.createElement("g", { className: "schart-scatter" });
        this.data.map((cur) => {
            const positionX = this.elementPoint0.x + (cur.x - ceilMinX) * width / minMaxCeilX;
            const positionY = this.elementPoint0.y + (ceilMaxY - cur.y) * height / minMaxCeilY;
            const color = cur.color || "rgb(24, 144, 255)";
            const slice = ElementFactory_1.createCircle("schart-scatter-circle", positionX, positionY, cur.r || 4, "none", color);
            scatterElement.appendChild(slice);
            this.slices.push({
                color,
                slice,
                title: `x: ${cur.x}, y: ${cur.y}`,
            });
        });
        this.svgElement.appendChild(scatterElement);
    }
}
exports.ScatterChart = ScatterChart;


/***/ })
/******/ ]);
});
//# sourceMappingURL=schart.js.map