let min = 1;
let max = 20;

function rundomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

let rundomNum = rundomNumber(min, max);

function countDown(number) {
	console.log(number);

	const newNumber = number - 1;

	if (newNumber >= 0) {
		countDown(newNumber);
	}
}

countDown(rundomNum);
