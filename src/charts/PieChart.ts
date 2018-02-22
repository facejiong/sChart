import { InterfaceOption } from "../Option";
import { colorClassfication } from "../plugins/ColorSwatches";
import { createElement, createPath, createText } from "../plugins/ElementFactory";
import { Base } from "./Base";

const ANGLE_RATIO = Math.PI / 180;
const FULL_ANGLE = 360;

export class PieChart extends Base {
  private centerX: number;
  private centerY: number;
  private opacity: number;
  private radius: number;
  private sortDataType: string;

  constructor(option: InterfaceOption) {
    super(option);
    this.type = option.type;
    this.opacity = option.opacity || 0.8;
    this.colors = option.colors || colorClassfication;
    this.sortDataType = option.sortDataType || "descending";
    this.radius = option.radius;
    this.render();
  }
  protected mouseMove = (e) => {
    this.slices.map((current, index) => {
      if (e.target === current) {
        const hasUpdateData = this.currentSlice === current ? false : true;
        this.tips.update([{ color: current.style.fill, text: this.labels[index] }],
          e.x, e.y, hasUpdateData);
        this.currentSlice = current;
      }
    });
  }
  private render() {
    this.sortData();
    this.renderBase();
    this.setPosition();
    this.renderPie();
    this.renderTips();
  }
  private getPositionByAngle(angle, radius) {
    return {
      x: Math.sin(angle * ANGLE_RATIO) * radius,
      y: Math.cos(angle * ANGLE_RATIO) * radius,
    };
  }
  private setPosition() {
    this.centerX = this.svgWidth / 2;
    this.centerY = this.svgHeight / 2;
    this.radius = this.radius || (this.svgHeight > this.svgWidth ? this.svgWidth * 0.45 : this.svgHeight * 0.45);
  }
  private sortData() {
    if (this.sortDataType === "descending") {
      this.data.sort((a, b) => {
        return a.value - b.value;
      });
    } else if (this.sortDataType === "ascending") {
      this.data.sort((a, b) => {
        return b.value - a.value;
      });
    }
  }
  private renderPie() {
    const { centerX, centerY, radius } = this;
    const totalValue = this.data.reduce((accumulator, current) => accumulator + current.value, 0);
    let curAngle = 180;
    const pieElement = createElement("g", { className: "schart-pie" });
    this.data.map((current, i) => {
      const startAngle = curAngle;
      const diffAngle = (current.value / totalValue) * FULL_ANGLE;
      const endAngle = curAngle = curAngle + diffAngle;
      const startPosition = this.getPositionByAngle(startAngle, radius);
      const endPosition = this.getPositionByAngle(endAngle, radius);
      const curPath = this.makeArcPath(startPosition, endPosition, diffAngle);
      const slice = createPath(curPath, "schart-pie-path", "none", this.colors[i]);
      this.slices.push(slice);
      const percent = diffAngle / 3.6;
      this.labels.push(`${current.label}: ${parseInt(String(percent), 10)}%`);
      pieElement.appendChild(slice);
    });
    this.svgElement.appendChild(pieElement);
  }
  private makeArcPath(startPosition, endPosition, angle) {
    const { centerX, centerY, radius } = this;
    return `M${centerX} ${centerY} L${centerX + startPosition.x}
      ${centerY + startPosition.y} A ${radius} ${radius} 0 ${angle > 180 ? 1 : 0}
       0 ${centerX + endPosition.x} ${centerY + endPosition.y} z`;
  }

}
