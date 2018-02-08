export interface Option {
	// shared
	id: string;
	type: string;
	data: any;
	width: number;
	height: number;
	title: string;
	subtitle: string;
	colors: Array<string>;
	opacity: number;
	// pie
	radius: number;
	clockWise: boolean; // 顺时针
}
