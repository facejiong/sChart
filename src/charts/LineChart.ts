import { InterfaceOption } from "../Option";
import { Axis } from "../plugins/Axis";
import { colorClassfication } from "../plugins/ColorSwatches";
import { calculateTicks } from "../plugins/Coord";
import { createCircle, createElement, createLine, createText } from "../plugins/ElementFactory";
import { Base } from "./Base";

export class LineChart extends Base {
  private min: number = 0;
  private max: number = 0;
  private ticksConfig: any;
  constructor(option: InterfaceOption) {
    super(option);
    this.type = option.type;
    this.colors = option.colors || colorClassfication;
    this.render();
  }
  private render() {
    this.renderBase();
    this.computeMinMax();
    this.renderAxis();
    this.renderLine();
    this.renderTips();
  }
  private renderAxis() {
    const axis = new Axis(this.elementPoint0, this.elementPoint1, this.elementPoint2,
      this.elementPoint3, this.ticksConfig.ticks, this.data.labels);
    this.axisElement = axis.render();
    this.svgElement.appendChild(this.axisElement);
  }
  private computeMinMax() {
    const height = this.elementPoint3.y - this.elementPoint0.y;
    const { labels, datasets } = this.data;
    datasets.map((current) => {
      current.values.map((cur) => {
        this.min = Math.min(cur, this.min);
        this.max = Math.max(cur, this.max);
      });
    });
    this.ticksConfig = calculateTicks(this.min, this.max, height);
  }
  private renderLine() {
    const width = this.elementPoint2.x - this.elementPoint3.x;
    const height = this.elementPoint3.y - this.elementPoint0.y;
    const { minMaxCeil, ceilMax, ceilMin, zeroPosition } = this.ticksConfig;
    const lineElement = createElement("g", { className: "schart-line" });
    const { labels, datasets } = this.data;
    const num = labels.length;
    const lineInterval = width / (num);
    datasets.map((curDataset, indexDataset) => {
      const lineGroupElement = createElement("g", { className: "schart-line-group" });
      curDataset.values.map((curValue, indexValue, arr) => {
        const positionY0 = this.elementPoint0.y + (ceilMax - arr[indexValue]) * height / minMaxCeil;
        const positionY1 = this.elementPoint0.y + (ceilMax - arr[indexValue + 1]) * height / minMaxCeil;
        const positionX0 = this.elementPoint0.x + lineInterval * (indexValue + 0.5);
        const positionX1 = this.elementPoint0.x + lineInterval * (indexValue + 1.5);
        const slicePoint = createCircle("schart-line-group-point", positionX0, positionY0, 5,
          "#fff", this.colors[indexDataset]);
        this.slices.unshift({
          color: this.colors[indexDataset],
          slice: slicePoint,
          title: curDataset.title,
          value: curValue,
        });
        if (indexValue < arr.length - 1) {
          const sliceLine = createLine("schart-line-group-line", positionX0, positionY0, positionX1, positionY1,
            this.colors[indexDataset], 2);
          lineGroupElement.appendChild(sliceLine);
        }
        lineGroupElement.appendChild(slicePoint);
      });
      lineElement.appendChild(lineGroupElement);
    });
    this.svgElement.appendChild(lineElement);
  }

}
