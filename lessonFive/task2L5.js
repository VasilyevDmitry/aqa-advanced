let min = 1
let max = 100

function rundomNumber (min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const averageGrade = rundomNumber(min, max)

switch(true){
case averageGrade < 60:
    console.log("Незадовільно");
    console.log(averageGrade);

    break

case averageGrade <= 60 || averageGrade <= 70:
    console.log("Задовільно");
    console.log(averageGrade);

    break

case averageGrade <= 71 || averageGrade <= 80 :
    console.log("Добре");
    console.log(averageGrade);

    break

case averageGrade <= 81 || averageGrade <= 90 :
    console.log("Дуже добре");
    console.log(averageGrade);

    break

case averageGrade <= 91 || averageGrade <= 100:
    console.log("Відмінно");
    console.log(averageGrade);

    break
}

