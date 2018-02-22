var Chart =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable-next-line:max-line-length */
function createHtmlElement(tag, o) {
    var element = document.createElement(tag);
    var _loop_1 = function (i) {
        var val = o[i];
        if (i === "styles") {
            if (typeof val === "object") {
                Object.keys(val).map(function (prop) {
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
    };
    for (var i in o) {
        _loop_1(i);
    }
    return element;
}
exports.createHtmlElement = createHtmlElement;
function createElement(tag, o) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    var _loop_2 = function (i) {
        var val = o[i];
        if (i === "styles") {
            if (typeof val === "object") {
                Object.keys(val).map(function (prop) {
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
    };
    for (var i in o) {
        _loop_2(i);
    }
    return element;
}
exports.createElement = createElement;
function createRect(className, width, height, x, y, rx, ry, stroke, fill) {
    if (stroke === void 0) { stroke = "none"; }
    if (fill === void 0) { fill = "none"; }
    return createElement("rect", {
        className: className,
        height: height,
        rx: rx,
        ry: ry,
        styles: {
            fill: fill,
            stroke: stroke,
        },
        width: width,
        x: x,
        y: y,
    });
}
exports.createRect = createRect;
function createCircle(className, x, y, r, stroke, fill) {
    if (stroke === void 0) { stroke = "none"; }
    if (fill === void 0) { fill = "none"; }
    return createElement("circle", {
        className: className,
        cx: x,
        cy: y,
        r: r,
        styles: {
            fill: fill,
            stroke: stroke,
        },
    });
}
exports.createCircle = createCircle;
function createLine(className, x1, y1, x2, y2, stroke, strokeWidth) {
    if (stroke === void 0) { stroke = "none"; }
    if (strokeWidth === void 0) { strokeWidth = 1; }
    return createElement("line", {
        className: className,
        styles: {
            stroke: stroke,
            "stroke-width": strokeWidth,
        },
        x1: x1,
        x2: x2,
        y1: y1,
        y2: y2,
    });
}
exports.createLine = createLine;
function createText(className, x, y, content, fontSize) {
    return createElement("text", {
        className: className,
        dy: ".32em",
        innerHTML: content,
        styles: {
            "font-size": fontSize,
        },
        x: x,
        y: y,
    });
}
exports.createText = createText;
function createPath(pathStr, className, stroke, fill) {
    if (stroke === void 0) { stroke = "none"; }
    if (fill === void 0) { fill = "none"; }
    return createElement("path", {
        className: className,
        d: pathStr,
        styles: {
            fill: fill,
            stroke: stroke,
        },
    });
}
exports.createPath = createPath;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementFactory_1 = __webpack_require__(0);
var Tips_1 = __webpack_require__(7);
var Base = /** @class */ (function () {
    function Base(option) {
        var _this = this;
        this.slices = [];
        this.labels = [];
        this.mouseMove = function (e) {
            //
        };
        this.mouseLeave = function () {
            _this.tips.hide();
        };
        this.container = document.querySelector("#" + option.id);
        this.type = "base";
        this.data = option.data;
        this.containerWidth = option.width || 320;
        this.containerHeight = option.height || 240;
        this.title = option.title || "";
        this.subtitle = option.subtitle || "";
        this.padding = option.padding || [10, 10, 10, 10];
    }
    Base.prototype.renderBase = function () {
        this.setWidthHeight();
        this.renderTitle();
        this.renderSvg();
        this.setLayout();
    };
    Base.prototype.setWidthHeight = function () {
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
    };
    Base.prototype.setLayout = function () {
        var top = 30;
        var right = 30;
        var bottom = 30;
        var left = 30;
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
    };
    Base.prototype.renderSvg = function () {
        this.svgElement = ElementFactory_1.createElement("svg", {
            className: "schart-svg",
            height: this.svgHeight,
            version: "1.1",
            width: this.svgWidth,
            xmlns: "http://www.w3.org/2000/svg",
        });
        this.container.appendChild(this.svgElement);
    };
    Base.prototype.renderTitle = function () {
        var title = ElementFactory_1.createHtmlElement("p", {
            innerHTML: this.title,
            styles: {
                margin: 0,
                textAlign: "center",
            },
        });
        this.container.appendChild(title);
    };
    Base.prototype.renderTips = function () {
        var _this = this;
        this.tips = new Tips_1.Tips();
        this.slices.map(function (current) {
            current.addEventListener("mousemove", _this.mouseMove);
            current.addEventListener("mouseleave", _this.mouseLeave);
        });
    };
    return Base;
}());
exports.Base = Base;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.colorClassfication = ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"];
// export const COlOR_CONTINUOUS: Array<string> =
//   ["#E6F7FF", "#BAE7FF", "#91D5FF", "#69C0FF", "#40A9FF", "#1890FF", "#096DD9", "#0050B3", "#003A8C", "#002766"]
// export const COLOR_CONTINUOUS_SEMANTIC_GREEN: Array<string> =
//   ["#F0FFF2", "#D7F5DC", "#A7E8B4", "#7BDB91", "#53CF74", "#2FC25B", "#1E9C48", "#107535", "#074F24", "#032914"]
// export const COLOR_CONTINUOUS_SEMANTIC_ORANGE: Array<string> =
//   ["#FFF7E6", "#FFE7BA", "#FFD591", "#FFC069", "#FFA940", "#FA8C16", "#D46B08", "#AD4E00", "#873800", "#612500"]
// export const COLOR_CONTINUOUS_SEMANTIC_DEEPPINK: Array<string> =
//   ["#FFF0F0", "#FFDCDC", "#FFC8CB", "#FF9EA8", "#FC7486", "#F04864", "#C93251", "#A32240", "#7C132F", "#570D23"]
// export const COLOR_CONTINUOUS_SEMANTIC_GRAY: Array<string> =
//   ["#FAFBFC", "#F2F4F5", "#EBEDF0", "#CED4D9", "#A3B1BF", "#697B8C", "#314659", "#0D1A26"]
// export const COLOR_HEATMAP: Array<string> =
//   ["#531DAB", "#2F54EB", "#40A9FF", "#5CDBD3", "#B7EB8F", "#FFE58F", "#FFC069", "#FF7A45", "#F53B44", "#A8071A"]
// OPACITY
// line 1
// middle area 0.8 -- bar,pie,
// large area 0.3


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementFactory_1 = __webpack_require__(0);
var Axis = /** @class */ (function () {
    function Axis(elementPoint0, elementPoint1, elementPoint2, elementPoint3, horizontalData, verticalData) {
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
    Axis.prototype.render = function () {
        this.renderVertical();
        this.renderHorizontal();
        return this.element;
    };
    // 纵轴
    Axis.prototype.renderHorizontal = function () {
        var _this = this;
        var ticks = ElementFactory_1.createElement("g", { className: "schart-axis-horizontal-ticks" });
        this.horizontalData.map(function (cur, index) {
            var tick = ElementFactory_1.createElement("g", { className: "schart-axis-horizontal-tick" });
            var line = ElementFactory_1.createLine("schart-axis-horizontal-line", _this.elementPoint0.x, _this.elementPoint0.y + cur.distance, _this.elementPoint1.x, _this.elementPoint0.y + cur.distance, "#F2F4F5");
            var text = ElementFactory_1.createElement("text", {
                className: "schart-axis-horizontal-text",
                dy: ".32em",
                innerHTML: cur.text,
                styles: {
                    "font-size": "12px",
                    "text-anchor": "end",
                },
                x: _this.elementPoint0.x - 4,
                y: _this.elementPoint0.y + cur.distance,
            });
            tick.appendChild(line);
            tick.appendChild(text);
            ticks.appendChild(tick);
        });
        this.element.appendChild(ticks);
    };
    // 横轴
    Axis.prototype.renderVertical = function () {
        var line = ElementFactory_1.createLine("schart-axis-vertical", this.elementPoint3.x, this.elementPoint3.y, this.elementPoint2.x, this.elementPoint2.y, "#333");
        this.element.appendChild(line);
        this.renderVerticalTicks();
    };
    Axis.prototype.renderVerticalTicks = function () {
        var _this = this;
        var ticks = ElementFactory_1.createElement("g", { className: "schart-axis-vertical-ticks" });
        var ticksNum = this.verticalData.length;
        var tickLength = this.width / (ticksNum);
        this.verticalData.map(function (cur, index) {
            var x = tickLength * index + tickLength * 0.5 + _this.elementPoint3.x;
            var tick = ElementFactory_1.createElement("g", { className: "schart-axis-vertical-tick" });
            var line = ElementFactory_1.createLine("schart-axis-vertical-line", x, _this.elementPoint3.y, x, _this.elementPoint3.y + 4, "#333");
            var text = ElementFactory_1.createElement("text", {
                className: "schart-axis-vertical-text",
                dy: ".32em",
                innerHTML: cur,
                styles: {
                    "font-size": "12px",
                    "text-anchor": "middle",
                },
                x: x,
                y: _this.elementPoint3.y + 10,
            });
            tick.appendChild(line);
            tick.appendChild(text);
            ticks.appendChild(tick);
        });
        this.element.appendChild(ticks);
    };
    return Axis;
}());
exports.Axis = Axis;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculateTicks(min, max, distance) {
    var minMaxNum = Math.abs(max - min);
    var minMaxPow = Math.pow(10, String(minMaxNum).length - 1);
    var ceilMin = ceilNum(min, minMaxPow);
    var ceilMax = ceilNum(max, minMaxPow);
    var minMaxCeil = ceilMax - ceilMin;
    var ticksNumber = minMaxCeil / minMaxPow;
    var ticksDistance = distance / ticksNumber;
    var minMaxCeilTickValue = minMaxCeil / ticksNumber;
    var ticks = [];
    for (var i = 0; i <= ticksNumber; i++) {
        ticks.unshift({
            distance: distance - ticksDistance * i,
            text: ceilMin + minMaxCeilTickValue * i,
        });
    }
    var zeroPosition;
    if (ceilMax > 0 && ceilMin < 0) {
        zeroPosition = ceilMax * distance / minMaxCeil;
    }
    var config = {
        ceilMax: ceilMax,
        ceilMin: ceilMin,
        minMaxCeil: minMaxCeil,
        ticks: ticks,
        zeroPosition: zeroPosition,
    };
    return config;
}
exports.calculateTicks = calculateTicks;
function ceilNum(num, pow) {
    var ceilNumber = Math.ceil(Math.abs(num) / pow) * pow;
    return num > 0 ? ceilNumber : -ceilNumber;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BarChart_1 = __webpack_require__(6);
var Heatmap_1 = __webpack_require__(8);
var LineChart_1 = __webpack_require__(9);
var PercentageChart_1 = __webpack_require__(10);
var PieChart_1 = __webpack_require__(11);
var ScatterChart_1 = __webpack_require__(12);
var typeCharts = {
    bar: BarChart_1.BarChart,
    heatmap: Heatmap_1.Heatmap,
    line: LineChart_1.LineChart,
    percentage: PercentageChart_1.PercentageChart,
    pie: PieChart_1.PieChart,
    scatter: ScatterChart_1.ScatterChart,
};
var Chart = /** @class */ (function () {
    function Chart(option) {
        return new typeCharts[option.type](option);
    }
    return Chart;
}());
exports.Chart = Chart;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Axis_1 = __webpack_require__(3);
var ColorSwatches_1 = __webpack_require__(2);
var Coord_1 = __webpack_require__(4);
var ElementFactory_1 = __webpack_require__(0);
var Base_1 = __webpack_require__(1);
var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart(option) {
        var _this = _super.call(this, option) || this;
        _this.min = 0;
        _this.max = 0;
        _this.mouseMove = function (e) {
            _this.slices.map(function (current, index) {
                if (e.target.parentElement === current) {
                    var hasUpdateData = _this.currentSlice === current ? false : true;
                    _this.tips.update(_this.labels[index].data, e.x, e.y, hasUpdateData);
                    _this.currentSlice = current;
                }
            });
        };
        _this.type = option.type;
        _this.colors = option.colors || ColorSwatches_1.colorClassfication;
        _this.render();
        return _this;
    }
    BarChart.prototype.render = function () {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderBar();
        this.renderTips();
    };
    BarChart.prototype.renderAxis = function () {
        var axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    };
    BarChart.prototype.computeMinMax = function () {
        var _this = this;
        var height = this.elementPoint3.y - this.elementPoint0.y;
        var _a = this.data, labels = _a.labels, datasets = _a.datasets;
        datasets.map(function (current) {
            current.values.map(function (cur) {
                _this.min = Math.min(cur, _this.min);
                _this.max = Math.max(cur, _this.max);
            });
        });
        this.ticksConfig = Coord_1.calculateTicks(this.min, this.max, height);
    };
    BarChart.prototype.renderBar = function () {
        var _this = this;
        var width = this.elementPoint2.x - this.elementPoint3.x;
        var height = this.elementPoint3.y - this.elementPoint0.y;
        var _a = this.ticksConfig, minMaxCeil = _a.minMaxCeil, ceilMax = _a.ceilMax, ceilMin = _a.ceilMin, zeroPosition = _a.zeroPosition;
        var barElement = ElementFactory_1.createElement("g", { className: "schart-bar" });
        var _b = this.data, labels = _b.labels, datasets = _b.datasets;
        var num = labels.length;
        var groupNum = datasets.length;
        var barWidth = width / (num * 2 * groupNum);
        var barOffset = width / (num);
        labels.map(function (cur, index) {
            var label = {
                data: [],
                title: cur,
            };
            var barGroupElement = ElementFactory_1.createElement("g", { className: "schart-bar-group" });
            var groupOffset = 0;
            groupOffset = barOffset * (index) + barOffset / 4;
            datasets.map(function (curDataset, indexDataset) {
                var curValue = curDataset.values[index];
                var positionY;
                var barHeight;
                var positionX = groupOffset + barWidth * (indexDataset) + _this.elementPoint3.x;
                if (zeroPosition) {
                    if (curValue >= 0) {
                        barHeight = Math.abs((zeroPosition) * curValue / ceilMax);
                        positionY = _this.elementPoint0.y + zeroPosition - barHeight;
                    }
                    else {
                        barHeight = Math.abs((height - zeroPosition) * curValue / ceilMin);
                        positionY = _this.elementPoint0.y + zeroPosition;
                    }
                }
                else {
                    if (curValue >= 0) {
                        barHeight = Math.abs(height * curValue / minMaxCeil);
                        positionY = _this.elementPoint0.y + height - barHeight;
                    }
                    else {
                        barHeight = Math.abs(height * curValue / minMaxCeil);
                        positionY = _this.elementPoint0.y;
                    }
                }
                var slice = ElementFactory_1.createRect("schart-bar-group-rect", barWidth, barHeight, positionX, positionY, 0, 0, "none", _this.colors[indexDataset]);
                barGroupElement.appendChild(slice);
                label.data.push({
                    color: _this.colors[indexDataset],
                    text: curDataset.title + ": " + curValue,
                });
            });
            _this.slices.push(barGroupElement);
            barElement.appendChild(barGroupElement);
            _this.svgElement.appendChild(barElement);
            _this.labels.push(label);
        });
    };
    return BarChart;
}(Base_1.Base));
exports.BarChart = BarChart;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ElementFactory_1 = __webpack_require__(0);
var Tips = /** @class */ (function () {
    function Tips() {
        this.data = [];
        this.render();
    }
    Tips.prototype.update = function (data, x, y, hasUpdateData) {
        if (hasUpdateData === void 0) { hasUpdateData = true; }
        this.data = data;
        this.container.style.display = "inline-block";
        this.container.style.top = (y + 10) + "px";
        this.container.style.left = (x + 10) + "px";
        if (hasUpdateData) {
            this.renderData();
        }
    };
    Tips.prototype.hide = function () {
        this.container.style.display = "none";
    };
    Tips.prototype.render = function () {
        var container = document.createElement("div");
        this.container = container;
        container.style.display = "none";
        container.style.padding = "10px";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        container.style.borderRadius = "4px";
        container.style.position = "fixed";
        this.renderData();
        document.body.appendChild(container);
    };
    Tips.prototype.clearNodes = function () {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.firstChild);
        }
    };
    Tips.prototype.renderData = function () {
        var _this = this;
        this.clearNodes();
        this.data.map(function (cur) {
            var curContainer = ElementFactory_1.createHtmlElement("div", {
                styles: {
                    height: 24,
                },
            });
            // color
            var curColorContainer = ElementFactory_1.createHtmlElement("span", {
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
            var curTextContainer = ElementFactory_1.createHtmlElement("span", {
                innerHTML: cur.text,
                styles: {
                    color: "#fff",
                    display: "inline-block",
                    fontSize: "14px",
                },
            });
            curContainer.appendChild(curColorContainer);
            curContainer.appendChild(curTextContainer);
            _this.container.appendChild(curContainer);
        });
    };
    Tips.prototype.calculatePosition = function (x, y) {
        var clientWidth = document.body.clientWidth;
        var clientHeight = document.body.clientHeight;
    };
    return Tips;
}());
exports.Tips = Tips;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = __webpack_require__(1);
var Heatmap = /** @class */ (function (_super) {
    __extends(Heatmap, _super);
    function Heatmap(option) {
        return _super.call(this, option) || this;
    }
    return Heatmap;
}(Base_1.Base));
exports.Heatmap = Heatmap;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Axis_1 = __webpack_require__(3);
var ColorSwatches_1 = __webpack_require__(2);
var Coord_1 = __webpack_require__(4);
var ElementFactory_1 = __webpack_require__(0);
var Base_1 = __webpack_require__(1);
var LineChart = /** @class */ (function (_super) {
    __extends(LineChart, _super);
    function LineChart(option) {
        var _this = _super.call(this, option) || this;
        _this.min = 0;
        _this.max = 0;
        _this.mouseMove = function (e) {
            _this.slices.map(function (current, index) {
                if (e.target === current) {
                    var hasUpdateData = _this.currentSlice === current ? false : true;
                    _this.tips.update([_this.labels[index]], e.x, e.y, hasUpdateData);
                    _this.currentSlice = current;
                }
            });
        };
        _this.type = option.type;
        _this.colors = option.colors || ColorSwatches_1.colorClassfication;
        _this.render();
        return _this;
    }
    LineChart.prototype.render = function () {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderLine();
        this.renderTips();
    };
    LineChart.prototype.renderAxis = function () {
        var axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    };
    LineChart.prototype.computeMinMax = function () {
        var _this = this;
        var height = this.elementPoint3.y - this.elementPoint0.y;
        var _a = this.data, labels = _a.labels, datasets = _a.datasets;
        datasets.map(function (current) {
            current.values.map(function (cur) {
                _this.min = Math.min(cur, _this.min);
                _this.max = Math.max(cur, _this.max);
            });
        });
        this.ticksConfig = Coord_1.calculateTicks(this.min, this.max, height);
    };
    LineChart.prototype.renderLine = function () {
        var _this = this;
        var width = this.elementPoint2.x - this.elementPoint3.x;
        var height = this.elementPoint3.y - this.elementPoint0.y;
        var _a = this.ticksConfig, minMaxCeil = _a.minMaxCeil, ceilMax = _a.ceilMax, ceilMin = _a.ceilMin, zeroPosition = _a.zeroPosition;
        var lineElement = ElementFactory_1.createElement("g", { className: "schart-line" });
        var _b = this.data, labels = _b.labels, datasets = _b.datasets;
        var num = labels.length;
        var lineInterval = width / (num);
        datasets.map(function (curDataset, indexDataset) {
            var lineGroupElement = ElementFactory_1.createElement("g", { className: "schart-line-group" });
            curDataset.values.map(function (curValue, indexValue, arr) {
                var positionY0 = _this.elementPoint0.y + (ceilMax - arr[indexValue]) * height / minMaxCeil;
                var positionY1 = _this.elementPoint0.y + (ceilMax - arr[indexValue + 1]) * height / minMaxCeil;
                var positionX0 = _this.elementPoint0.x + lineInterval * (indexValue + 0.5);
                var positionX1 = _this.elementPoint0.x + lineInterval * (indexValue + 1.5);
                var slicePoint = ElementFactory_1.createCircle("schart-line-group-point", positionX0, positionY0, 5, "#fff", _this.colors[indexDataset]);
                if (indexValue < arr.length - 1) {
                    var sliceLine = ElementFactory_1.createLine("schart-line-group-line", positionX0, positionY0, positionX1, positionY1, _this.colors[indexDataset], 2);
                    lineGroupElement.appendChild(sliceLine);
                }
                lineGroupElement.appendChild(slicePoint);
                _this.slices.push(slicePoint);
                _this.labels.push({
                    color: _this.colors[indexDataset],
                    text: curDataset.title + ": " + curValue,
                });
            });
            lineElement.appendChild(lineGroupElement);
        });
        this.svgElement.appendChild(lineElement);
    };
    return LineChart;
}(Base_1.Base));
exports.LineChart = LineChart;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ColorSwatches_1 = __webpack_require__(2);
var ElementFactory_1 = __webpack_require__(0);
var Base_1 = __webpack_require__(1);
var PercentageChart = /** @class */ (function (_super) {
    __extends(PercentageChart, _super);
    function PercentageChart(option) {
        var _this = _super.call(this, option) || this;
        _this.mouseMove = function (e) {
            _this.slices.map(function (current, index) {
                if (e.target === current) {
                    var hasUpdateData = _this.currentSlice === current ? false : true;
                    _this.tips.update([{ color: current.style.fill, text: _this.labels[index] }], e.x, e.y, hasUpdateData);
                    _this.currentSlice = current;
                }
            });
        };
        _this.percentageHeight = option.percentageHeight || 20;
        _this.percentageTop = option.percentageTop;
        _this.colors = option.colors || ColorSwatches_1.colorClassfication;
        _this.render();
        return _this;
    }
    PercentageChart.prototype.render = function () {
        this.filterData();
        this.renderBase();
        this.setTop();
        this.renderPercentage();
        this.renderTips();
    };
    PercentageChart.prototype.setTop = function () {
        this.percentageTop = this.percentageTop || (this.svgHeight * 0.5 - 10);
    };
    PercentageChart.prototype.filterData = function () {
        this.data = this.data.filter(function (current) {
            return current.value > 0;
        });
    };
    PercentageChart.prototype.renderPercentage = function () {
        var _this = this;
        var _a = this, svgWidth = _a.svgWidth, percentageHeight = _a.percentageHeight, percentageTop = _a.percentageTop;
        var totalValue = this.data.reduce(function (accumulator, current) { return accumulator + current.value; }, 0);
        var startWidth = 0;
        var percentageElement = ElementFactory_1.createElement("g", { className: "schart-percentage" });
        this.data.map(function (current, i) {
            var curWidth = current.value * svgWidth / totalValue;
            var slice = ElementFactory_1.createRect("schart-percentage-rect", curWidth, percentageHeight, startWidth, percentageTop, 0, 0, "none", _this.colors[i]);
            startWidth += curWidth;
            percentageElement.appendChild(slice);
            _this.slices.push(slice);
            var percent = current.value * 100 / totalValue;
            _this.labels.push(current.label + ": " + parseInt(String(percent), 10) + "%");
        });
        this.svgElement.appendChild(percentageElement);
    };
    return PercentageChart;
}(Base_1.Base));
exports.PercentageChart = PercentageChart;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ColorSwatches_1 = __webpack_require__(2);
var ElementFactory_1 = __webpack_require__(0);
var Base_1 = __webpack_require__(1);
var ANGLE_RATIO = Math.PI / 180;
var FULL_ANGLE = 360;
var PieChart = /** @class */ (function (_super) {
    __extends(PieChart, _super);
    function PieChart(option) {
        var _this = _super.call(this, option) || this;
        _this.mouseMove = function (e) {
            _this.slices.map(function (current, index) {
                if (e.target === current) {
                    var hasUpdateData = _this.currentSlice === current ? false : true;
                    _this.tips.update([{ color: current.style.fill, text: _this.labels[index] }], e.x, e.y, hasUpdateData);
                    _this.currentSlice = current;
                }
            });
        };
        _this.type = option.type;
        _this.opacity = option.opacity || 0.8;
        _this.colors = option.colors || ColorSwatches_1.colorClassfication;
        _this.sortDataType = option.sortDataType || "descending";
        _this.radius = option.radius;
        _this.render();
        return _this;
    }
    PieChart.prototype.render = function () {
        this.sortData();
        this.renderBase();
        this.setPosition();
        this.renderPie();
        this.renderTips();
    };
    PieChart.prototype.getPositionByAngle = function (angle, radius) {
        return {
            x: Math.sin(angle * ANGLE_RATIO) * radius,
            y: Math.cos(angle * ANGLE_RATIO) * radius,
        };
    };
    PieChart.prototype.setPosition = function () {
        this.centerX = this.svgWidth / 2;
        this.centerY = this.svgHeight / 2;
        this.radius = this.radius || (this.svgHeight > this.svgWidth ? this.svgWidth * 0.45 : this.svgHeight * 0.45);
    };
    PieChart.prototype.sortData = function () {
        if (this.sortDataType === "descending") {
            this.data.sort(function (a, b) {
                return a.value - b.value;
            });
        }
        else if (this.sortDataType === "ascending") {
            this.data.sort(function (a, b) {
                return b.value - a.value;
            });
        }
    };
    PieChart.prototype.renderPie = function () {
        var _this = this;
        var _a = this, centerX = _a.centerX, centerY = _a.centerY, radius = _a.radius;
        var totalValue = this.data.reduce(function (accumulator, current) { return accumulator + current.value; }, 0);
        var curAngle = 180;
        var pieElement = ElementFactory_1.createElement("g", { className: "schart-pie" });
        this.data.map(function (current, i) {
            var startAngle = curAngle;
            var diffAngle = (current.value / totalValue) * FULL_ANGLE;
            var endAngle = curAngle = curAngle + diffAngle;
            var startPosition = _this.getPositionByAngle(startAngle, radius);
            var endPosition = _this.getPositionByAngle(endAngle, radius);
            var curPath = _this.makeArcPath(startPosition, endPosition, diffAngle);
            var slice = ElementFactory_1.createPath(curPath, "schart-pie-path", "none", _this.colors[i]);
            _this.slices.push(slice);
            var percent = diffAngle / 3.6;
            _this.labels.push(current.label + ": " + parseInt(String(percent), 10) + "%");
            pieElement.appendChild(slice);
        });
        this.svgElement.appendChild(pieElement);
    };
    PieChart.prototype.makeArcPath = function (startPosition, endPosition, angle) {
        var _a = this, centerX = _a.centerX, centerY = _a.centerY, radius = _a.radius;
        return "M" + centerX + " " + centerY + " L" + (centerX + startPosition.x) + "\n      " + (centerY + startPosition.y) + " A " + radius + " " + radius + " 0 " + (angle > 180 ? 1 : 0) + "\n       0 " + (centerX + endPosition.x) + " " + (centerY + endPosition.y) + " z";
    };
    return PieChart;
}(Base_1.Base));
exports.PieChart = PieChart;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Axis_1 = __webpack_require__(3);
var Coord_1 = __webpack_require__(4);
var ElementFactory_1 = __webpack_require__(0);
var Base_1 = __webpack_require__(1);
var ScatterChart = /** @class */ (function (_super) {
    __extends(ScatterChart, _super);
    function ScatterChart(option) {
        var _this = _super.call(this, option) || this;
        _this.minX = 0;
        _this.maxX = 0;
        _this.minY = 0;
        _this.maxY = 0;
        _this.maxR = 4;
        _this.mouseMove = function (e) {
            _this.slices.map(function (current, index) {
                if (e.target === current) {
                    var hasUpdateData = _this.currentSlice === current ? false : true;
                    _this.tips.update([_this.labels[index]], e.x, e.y, hasUpdateData);
                    _this.currentSlice = current;
                }
            });
        };
        _this.type = option.type;
        _this.render();
        return _this;
    }
    ScatterChart.prototype.render = function () {
        this.renderBase();
        this.computeMinMax();
        this.renderAxis();
        this.renderLine();
        this.renderTips();
    };
    ScatterChart.prototype.computeMinMax = function () {
        var _this = this;
        var distanceX = this.elementPoint1.x - this.elementPoint0.x;
        var distanceY = this.elementPoint3.y - this.elementPoint0.y;
        var _a = this.data, labels = _a.labels, datasets = _a.datasets;
        this.data.map(function (current) {
            var defaultR = current.r || 4;
            _this.minX = Math.min(current.x, _this.minX);
            _this.maxX = Math.max(current.x, _this.maxX);
            _this.minY = Math.min(current.y, _this.minY);
            _this.maxY = Math.max(current.y, _this.maxY);
            _this.maxR = Math.max(defaultR, _this.maxR);
        });
        this.ticksConfigX = Coord_1.calculateTicks(this.minX - this.maxR, this.maxX + this.maxR, distanceX);
        this.ticksConfigY = Coord_1.calculateTicks(this.minY - this.maxR, this.maxY + this.maxR, distanceY);
    };
    ScatterChart.prototype.renderAxis = function () {
        var labelX = [];
        this.ticksConfigX.ticks.map(function (cur) {
            labelX.unshift(cur.text);
        });
        var axis = new Axis_1.Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2, this.elementPoint3, this.ticksConfigY.ticks, labelX);
        this.axisElement = axis.render();
        this.svgElement.appendChild(this.axisElement);
    };
    ScatterChart.prototype.renderLine = function () {
        var _this = this;
        var width = this.elementPoint2.x - this.elementPoint3.x;
        var height = this.elementPoint3.y - this.elementPoint0.y;
        var minMaxCeilX = this.ticksConfigX.minMaxCeil;
        var ceilMaxX = this.ticksConfigX.ceilMax;
        var ceilMinX = this.ticksConfigX.ceilMin;
        var minMaxCeilY = this.ticksConfigY.minMaxCeil;
        var ceilMaxY = this.ticksConfigY.ceilMax;
        var ceilMinY = this.ticksConfigY.ceilMin;
        var scatterElement = ElementFactory_1.createElement("g", { className: "schart-scatter" });
        this.data.map(function (cur) {
            var positionX = _this.elementPoint0.x + (cur.x - ceilMinX) * width / minMaxCeilX;
            var positionY = _this.elementPoint0.y + (ceilMaxY - cur.y) * height / minMaxCeilY;
            var color = cur.color || "rgb(24, 144, 255)";
            var slice = ElementFactory_1.createCircle("schart-scatter-circle", positionX, positionY, cur.r || 4, "none", color);
            scatterElement.appendChild(slice);
            _this.slices.push(slice);
            _this.labels.push({
                color: color,
                text: "x: " + cur.x + ", y: " + cur.y,
            });
        });
        this.svgElement.appendChild(scatterElement);
    };
    return ScatterChart;
}(Base_1.Base));
exports.ScatterChart = ScatterChart;


/***/ })
/******/ ]);
//# sourceMappingURL=schart.js.map