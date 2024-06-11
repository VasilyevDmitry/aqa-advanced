function checkOrder(available, ordered) {
	if (available < ordered) {
		let answear = "Your order is too large, we don’t have enough goods";
		return answear;
	} else if (ordered == 0) {
		let answearY = "Your order is empty";
		return answearY;
	} else if (available >= ordered) {
		let answearO = "Your order is accepted";
		return answearO;
	}
}

let resultOne = checkOrder(2, 6);
console.log(resultOne);

let resultTwo = checkOrder(8, 0);
console.log(resultTwo);

let resultThree = checkOrder(5, 3);
console.log(resultThree);
