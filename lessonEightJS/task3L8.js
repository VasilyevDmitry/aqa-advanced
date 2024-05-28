const nums = [10, 20, 30, 40, 50]

const sumNums = nums.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber
})

console.log(sumNums);
