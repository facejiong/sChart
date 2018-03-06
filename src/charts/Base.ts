import { InterfaceOption } from "../Option";
import { Axis } from "../plugins/Axis";
import { Color } from "../plugins/Color";
import { createElement, createHtmlElement, createRect, createText } from "../plugins/ElementFactory";
import { Legend } from "../plugins/Legend";
import { Tips } from "../plugins/Tips";

interface InterfacePoint {
  x;
  y;
}

export class Base {
  protected container: any;
  protected svgElement: any;
  protected axisElement: any;
  protected type: string;
  protected data: any;
  protected containerWidth: number;
  protected containerHeight: number;
  protected svgWidth: number;
  protected svgHeight: number;
  protected svgPoint0: InterfacePoint;
  protected svgPoint1: InterfacePoint;
  protected svgPoint2: InterfacePoint;
  protected svgPoint3: InterfacePoint;
  protected elementPoint0: InterfacePoint;
  protected elementPoint1: InterfacePoint;
  protected elementPoint2: InterfacePoint;
  protected elementPoint3: InterfacePoint;
  protected colors: string[];
  protected padding: number[];
  protected slices: any[] = [];
  protected tips: any;
  protected legend: any;
  protected currentSlice: any;

  constructor(option: InterfaceOption) {
    this.container = document.querySelector("#" + option.id);
    this.type = option.type;
    this.data = option.data;
    this.containerWidth = option.width || 320;
    this.containerHeight = option.height || 240;
    this.padding = option.padding || [0, 0, 0, 0];
  }
  protected renderBase() {
    this.setWidthHeight();
    this.renderSvg();
    this.renderLegend();
    this.setLayout();
  }
  protected renderLegend() {
    const legendType = {
      bar: "rect",
      heatmap: "rect",
      line: "line",
      percentage: "rect",
      pie: "circle",
    };
    this.legend = new Legend(legendType[this.type]);
    this.container.appendChild(this.legend.render());
  }
  protected updateLegend() {
    //
  }
  protected setWidthHeight() {
    this.container.style.display = "inline-block";
    this.container.style.position = "relative";
    this.container.style.height = this.containerWidth;
    this.container.style.width = this.containerHeight;
    this.svgWidth = this.containerWidth - this.padding[1] - this.padding[3];
    this.svgHeight = this.containerHeight - this.padding[0] - this.padding[2];
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
  protected setLayout() {
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
  protected renderSvg() {
    this.svgElement = createElement("svg",
      {
        className: "schart-svg",
        height: this.svgHeight,
        version: "1.1",
        width: this.svgWidth,
        xmlns: "http://www.w3.org/2000/svg",
      });
    this.container.appendChild(this.svgElement);
  }
  protected renderTips() {
    this.tips = new Tips();
    this.slices.map((current) => {
      current.slice.addEventListener("mousemove", this.mouseMove);
      current.slice.addEventListener("mouseleave", this.mouseLeave);
    });
  }
  protected mouseMove = (e) => {
    this.slices.map((current, index) => {
      if (e.target === current.slice) {
        const color = new Color(current.color);
        current.slice.style.fill = color.lighten(0.2).getHex();
        const hasUpdateData = this.currentSlice === current ? false : true;
        this.tips.update([{ color: current.color, text: `${current.title}: ${current.value}` }],
          e.x, e.y, hasUpdateData);
        this.currentSlice = current;
      }
    });
  }
  protected mouseLeave = () => {
    this.tips.hide();
    this.currentSlice.slice.style.fill = this.currentSlice.color;
  }
}
