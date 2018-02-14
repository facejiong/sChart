import {Option} from '../Option'

export default class {
	protected id: any;
	protected type: string;
	protected data: any;
	protected width: number;
	protected height: number;
	protected title: string;
	protected subtitle: string;
	protected colors: Array<string>;
	protected padding: Array<number>;

	constructor(option: Option) {
		this.id = document.querySelector('#' + option.id);
		this.type = 'base';
		this.data = option.data;
		this.width = option.width || 320;
		this.height = option.height || 240;
		this.title = option.title || '';
		this.subtitle = option.subtitle || '';
		this.padding = option.padding || [10, 10, 10 ,10];
	}
	protected render() {
		console.log('base render')
	}
	protected setWidthHeight () {
		this.id.style.height = this.height;
		this.id.style.width = this.width;
	}
}
