import { InterfaceOption } from "../Option";
import { Axis } from "../plugins/Axis";
import { createElement, createHtmlElement, createRect, createText } from "../plugins/ElementFactory";
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
  protected title: string;
  protected subtitle: string;
  protected colors: string[];
  protected padding: number[];
  protected slices: any[] = [];
  protected labels: any[] = [];
  protected tips: any;
  protected currentSlice: any;

  constructor(option: InterfaceOption) {
    this.container = document.querySelector("#" + option.id);
    this.type = "base";
    this.data = option.data;
    this.containerWidth = option.width || 320;
    this.containerHeight = option.height || 240;
    this.title = option.title || "";
    this.subtitle = option.subtitle || "";
    this.padding = option.padding || [10, 10, 10, 10];
  }
  protected renderBase() {
    this.setWidthHeight();
    this.renderTitle();
    this.renderSvg();
    this.setLayout();
  }
  protected setWidthHeight() {
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
  protected renderTitle() {
    const title = createHtmlElement("p", {
      innerHTML: this.title,
      styles: {
        margin: 0,
        textAlign: "center",
      },
    });
    this.container.appendChild(title);
  }
  protected renderTips() {
    this.tips = new Tips();
    this.slices.map((current) => {
      current.addEventListener("mousemove", this.mouseMove);
      current.addEventListener("mouseleave", this.mouseLeave);
    });
  }
  protected mouseMove = (e) => {
    //
  }
  protected mouseLeave = () => {
    this.tips.hide();
  }
}
