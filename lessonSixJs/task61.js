function findArea(width, height) {
	let result = width * height;
	return result;
}

let resultOne = findArea(8, 9);

console.log(resultOne);

let resultTwo = function (width, height) {
	return width * height;
};

console.log(resultTwo(2, 4));

let resultThree = (width, height) => width * height;

console.log(resultThree(2, 5));
