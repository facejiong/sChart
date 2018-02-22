import { createHtmlElement } from "./ElementFactory";

export class Tips {
  private color: string;
  private text: string;
  private show: boolean;
  private container: any;
  private data: any[] = [];
  constructor() {
    this.render();
  }
   public update(data: any[], x: number, y: number, hasUpdateData = true) {
    this.data = data;
    this.container.style.display = "inline-block";
    this.container.style.top = (y + 10) + "px";
    this.container.style.left = (x + 10) + "px";
    if (hasUpdateData) {
      this.renderData();
    }
  }
  public hide() {
    this.container.style.display = "none";
  }
  private render() {
    const container = document.createElement("div");
    this.container = container;
    container.style.display = "none";
    container.style.padding = "10px";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    container.style.borderRadius = "4px";
    container.style.position = "fixed";
    this.renderData();
    document.body.appendChild(container);
  }
  private clearNodes() {
    while (this.container.hasChildNodes()) {
      this.container.removeChild(this.container.firstChild);
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
      this.container.appendChild(curContainer);
    });
  }
  private calculatePosition(x: number, y: number) {
    const clientWidth = document.body.clientWidth;
    const clientHeight = document.body.clientHeight;
  }
}
