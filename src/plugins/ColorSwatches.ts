export const COlOR_CLASSFICATION : Array<string> =
['#1890FF', '#2FC25B', '#FACC14', '#223273', '#8543E0', '#13C2C2', '#3436C7', '#F04864']

export const COlOR_CONTINUOUS : Array<string> =
['#E6F7FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']

export const COLOR_CONTINUOUS_SEMANTIC_GREEN : Array<string> =
['#F0FFF2', '#D7F5DC', '#A7E8B4', '#7BDB91', '#53CF74', '#2FC25B', '#1E9C48', '#107535', '#074F24', '#032914']

export const COLOR_CONTINUOUS_SEMANTIC_ORANGE : Array<string> =
['#FFF7E6', '#FFE7BA', '#FFD591', '#FFC069', '#FFA940', '#FA8C16', '#D46B08', '#AD4E00', '#873800', '#612500']

export const COLOR_CONTINUOUS_SEMANTIC_DEEPPINK : Array<string> =
['#FFF0F0', '#FFDCDC', '#FFC8CB', '#FF9EA8', '#FC7486', '#F04864', '#C93251', '#A32240', '#7C132F', '#570D23']

export const COLOR_CONTINUOUS_SEMANTIC_GRAY : Array<string> =
['#FAFBFC', '#F2F4F5', '#EBEDF0', '#CED4D9', '#A3B1BF', '#697B8C', '#314659', '#0D1A26']

export const COLOR_HEATMAP : Array<string> =
['#531DAB', '#2F54EB', '#40A9FF', '#5CDBD3', '#B7EB8F', '#FFE58F', '#FFC069', '#FF7A45', '#F53B44', '#A8071A']

export const COlOR_SWATCHES = {
	COlOR_CLASSFICATION,
	COlOR_CONTINUOUS,
	COLOR_CONTINUOUS_SEMANTIC_GREEN,
	COLOR_CONTINUOUS_SEMANTIC_ORANGE,
	COLOR_CONTINUOUS_SEMANTIC_DEEPPINK,
	COLOR_CONTINUOUS_SEMANTIC_GRAY,
	COLOR_HEATMAP
}

function limitColor(r){
	if (r > 255) return 255;
	else if (r < 0) return 0;
	return r;
}

export function hoverColor(color, amt) {
	let usePound = false;
	if (color[0] == "#") {
		color = color.slice(1);
		usePound = true;
	}
	let num = parseInt(color,16);
	let r = limitColor((num >> 16) + amt);
	let b = limitColor(((num >> 8) & 0x00FF) + amt);
	let g = limitColor((num & 0x0000FF) + amt);
	return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
// OPACITY
// line 1
// middle area 0.8 -- bar,pie,
// large area 0.3
