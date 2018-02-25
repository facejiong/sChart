import { InterfaceOption } from "../Option";
import { Axis } from "../plugins/Axis";
import { colorClassfication } from "../plugins/ColorSwatches";
import { calculateTicks } from "../plugins/Coord";
import { createElement, createRect, createText } from "../plugins/ElementFactory";
import { Base } from "./Base";

export class BarChart extends Base {
  private min: number = 0;
  private max: number = 0;
  private ticksConfig: any;
  constructor(option: InterfaceOption) {
    super(option);
    this.colors = option.colors || colorClassfication;
    this.render();
  }
  protected updateLegend() {
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
  private render() {
    this.renderBase();
    this.computeMinMax();
    this.renderAxis();
    this.renderBar();
    this.updateLegend();
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
  private renderBar() {
    const width = this.elementPoint2.x - this.elementPoint3.x;
    const height = this.elementPoint3.y - this.elementPoint0.y;
    const { minMaxCeil, ceilMax, ceilMin, zeroPosition } = this.ticksConfig;
    const barElement = createElement("g", { className: "schart-bar" });
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
      const barGroupElement = createElement("g", { className: "schart-bar-group" });
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
          } else {
            barHeight = Math.abs((height - zeroPosition) * curValue / ceilMin);
            positionY = this.elementPoint0.y + zeroPosition;
          }
        } else {
          if (curValue >= 0) {
            barHeight = Math.abs(height * curValue / minMaxCeil);
            positionY = this.elementPoint0.y + height - barHeight;
          } else {
            barHeight = Math.abs(height * curValue / minMaxCeil);
            positionY = this.elementPoint0.y;
          }
        }
        const slice = createRect("schart-bar-group-rect", barWidth, barHeight,
          positionX, positionY, 0, 0, "none", this.colors[indexDataset]);
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
