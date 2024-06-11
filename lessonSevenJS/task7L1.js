let min = 1;
let max = 100;

function rundomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

let someNum = rundomNumber(min, max);

function handleNum(num, numberOdd, numberEven) {
	num % 2 !== 0 ? numberOdd(num) : numberEven(num);
}

function getNumberOdd() {
	console.log(`the number ${someNum} is Odd`);
}

function getNumberEven() {
	console.log(`the number ${someNum} is Even`);
}

handleNum(someNum, getNumberOdd, getNumberEven);
