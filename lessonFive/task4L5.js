let min = 2
let max = 9

function rundomNumber (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const number = rundomNumber(min,max)

let count = 1;
while (count <=10) {
    let result = number* count
    console.log(`${number} * ${count} = ${result}`);
    count++;
}