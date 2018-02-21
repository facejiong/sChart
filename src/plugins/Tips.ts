import {createElement, createRect, createText, createLine} from './ElementFactory'

export class Tips {
	private color: string;
	private text: string;
	private show: boolean;
	private container: any;
	private data: Array<any> = [];
	constructor() {
		this.render();
	}
	private render() {
		let container = document.createElement('div');
		this.container = container;
		container.style.display = 'none';
		container.style.padding = '10px';
		container.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		container.style.borderRadius = '4px';
		container.style.position = 'fixed';
		this.renderData()
		document.body.appendChild(container);
	}
	private clearNodes() {
		while(this.container.hasChildNodes()) {
      this.container.removeChild(this.container.firstChild);
    }
	}
	private renderData() {
		this.clearNodes();
		this.data.map((cur) => {
			let curContainer = document.createElement('div');
			curContainer.style.height = '24px';
			// color
			let curColorContainer = document.createElement('span');
			curColorContainer.style.display = 'inline-block';
			curColorContainer.style.width = '10px';
			curColorContainer.style.height = '10px';
			curColorContainer.style.background = cur.color;
			curColorContainer.style.border = '1px solid #fff';
			curColorContainer.style.borderRadius = '10px';
			curColorContainer.style.margin = '0 8px 0 0';
			// text
			let curTextContainer = document.createElement('span');
			curTextContainer.style.display = 'inline-block';
			curTextContainer.style.color = '#fff';
			curTextContainer.style.fontSize = '14px';
			curTextContainer.innerHTML = cur.text;
			// curColorContainer.style.margin = '0 8px 0 0';
			curContainer.appendChild(curColorContainer);
			curContainer.appendChild(curTextContainer);
			this.container.appendChild(curContainer)
		})
	}
	private calculatePosition(x: number, y: number,) {
		let clientWidth = document.body.clientWidth;
		let clientHeight = document.body.clientHeight;
		console.log(this.container.style);
	}
	public update(data: Array<any>, x: number, y: number, hasUpdateData = true) {
		this.data = data;
		this.container.style.display = 'inline-block';
		this.container.style.top = (y + 10) + 'px';
		this.container.style.left = (x + 10) + 'px';
		if (hasUpdateData) {
			this.renderData();
		}
	}
	public hide() {
		this.container.style.display = 'none';
	}
}
