const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr =[]

arr.filter(function(number) {

  if (number % 2 === 0 ){

    newArr.push(number)
    
  }

  return newArr

});

console.log(newArr);