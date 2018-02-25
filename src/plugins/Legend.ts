import { createHtmlElement } from "./ElementFactory";

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

export class Legend {
  private element: any;
  private show: boolean;
  private type: string; // rect,cicle,line
  private data: any[] = [];
  constructor(type: string) {
    this.type = type;
  }
  public render() {
    const element = createHtmlElement("span", {
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
  private clearNodes() {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild);
    }
  }
  private updateData(data: any[]) {
    this.clearNodes();
    data.map((cur) => {
      const curContainer = createHtmlElement("span", {
        className: "schart-legend-one",
        styles: {
          display: "inline-block",
          height: "20px",
        },
      });
      // color
      const curColorContainer = createHtmlElement("span", {
        className: "schart-legend-one-color",
        styles: {
          ...typeStyle[this.type],
          background: cur.color,
          display: "inline-block",
          marginRight: "4px",
          verticalAlign: "top",
        },
      });
      // text
      const curTextContainer = createHtmlElement("span", {
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
