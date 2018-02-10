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
	sortDataType: string; // 升序 降序
}

export interface Position {
	// shared
	x: number;
	y: number;
}
