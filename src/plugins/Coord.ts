export function calculateTicks(min: number, max: number, distance) {
	const minMaxNum = Math.abs(max - min);
	const minMaxPow = Math.pow(10, String(minMaxNum).length - 1);
	const ceilMin = ceilNum(min, minMaxPow);
	const ceilMax = ceilNum(max, minMaxPow);
	const minMaxCeil = ceilMax - ceilMin;
	const ticksNumber = minMaxCeil / minMaxPow;
	const ticksDistance = distance / ticksNumber;
	const minMaxCeilTickValue = minMaxCeil / ticksNumber
	const ticks = [];
	for (let i = 0; i <= ticksNumber; i++) {
		ticks.unshift({
			text: ceilMin + minMaxCeilTickValue * i,
			distance: distance - ticksDistance * i
		})
	}
	let zeroPosition;
	if (ceilMax > 0 && ceilMin < 0) {
		zeroPosition = ceilMax * distance / minMaxCeil;
	}
	const config = {
		ticks,
		minMaxCeil,
		ceilMin,
		ceilMax,
		zeroPosition
	}
	console.log(config)
	return config;
}

function ceilNum(num, pow) {
	let ceilNumber = Math.ceil(Math.abs(num) / pow) * pow;
	return num > 0 ? ceilNumber : -ceilNumber;
}
