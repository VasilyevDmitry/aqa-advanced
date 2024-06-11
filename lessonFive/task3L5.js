let min = 2;
let max = 9;

function rundomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

const number = rundomNumber(min, max);

for (let i = 1; i <= 10; i++) {
	let result = i * number;
	console.log(`${number} * ${i} = ${result}`);
}
