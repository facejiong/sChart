import { createHtmlElement } from "./ElementFactory";

export class Tips {
  private color: string;
  private text: string;
  private show: boolean;
  private element: any;
  private data: any[] = [];
  constructor() {
    this.render();
  }
   public update(data: any[], x: number, y: number, hasUpdateData = true) {
    this.data = data;
    this.element.style.display = "inline-block";
    this.element.style.top = (y + 20) + "px";
    this.element.style.left = (x + 20) + "px";
    if (hasUpdateData) {
      this.renderData();
    }
  }
  public hide() {
    this.element.style.display = "none";
  }
  private render() {
    const element = createHtmlElement("div", {
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
  private clearNodes() {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.firstChild);
    }
  }
  private renderData() {
    this.clearNodes();
    this.data.map((cur) => {
      const curContainer = createHtmlElement("div", {
        styles: {
          height: 24,
        },
      });
      // color
      const curColorContainer = createHtmlElement("span", {
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
      const curTextContainer = createHtmlElement("span", {
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
  private calculatePosition(x: number, y: number) {
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
  }
}
