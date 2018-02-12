import {createText, createLine} from '../plugins/ElementFactory'

export class Axis {
	private horizontalData: Array<any>;
	private verticalData: Array<any>;
	private horizontalXPosition: number;
	private verticalYPosition: number;

	constructor(horizontalData: Array<any>, verticalData: Array<any>, horizontalXPosition: number, verticalYPosition: number) {
		this.horizontalData = horizontalData;
		this.verticalData = verticalData;
		this.horizontalXPosition = horizontalXPosition;
		this.verticalYPosition = verticalYPosition;
	}
	// 纵轴
	public renderHorizontal() {
		this.horizontalData.map((current) => {

		})
	}
	// 横轴
	public renderVertical() {
		this.verticalData.map((current) => {

		})
	}
}
