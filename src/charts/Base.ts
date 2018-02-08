export default class {
	private type: string = 'base';
	private id: string = '';
	private width: number = 320;
	private height: number = 240;
	private title: string = '';
	private subtitle: string = '';
	private colors: number;
	private has_legend: number;
	private data: string;
	constructor(option: object) {
		this.type = option.type;
		this.id = document.querySelector('#' + option.id);
		this.width = option.width;
		this.height = option.height;
		this.title = option.title;
		this.subtitle = option.subtitle;
		this.render()
	}
	private setWidthHeight () {
		this.id.style.height = this.height;
		this.id.style.width = this.width;
	}
	public render() {
		console.log('render')
		this.setWidthHeight()
	}
}
