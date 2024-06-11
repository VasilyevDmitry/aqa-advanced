let car1 = {
	brand: "Volvo",
	model: "s80",
	year: 2014,
};

let car2 = {
	brand: "MB",
	model: "GLE",
	year: 2017,
};

let car3 = { car1: { ...car1 }, car2: { ...car2 } };

console.log(car3);
