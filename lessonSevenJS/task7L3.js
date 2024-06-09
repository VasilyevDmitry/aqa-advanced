function divide(numerator, denominator) {

    if (denominator === 0) {
        
        throw new Error("denominator == 0");

    }

    if ( typeof numerator !== 'number' || typeof denominator !== 'number' ){

         throw new Error("the passed value is not a number");

    }
    else {
        
        let result = numerator / denominator

        return console.log(result);

    }
     
}


try {

    console.log(divide (20, 0))

 } 
 catch(error) {

    console.log(error);

 }
 finally {
    console.log('Робота завершена');
 }

 try {

    console.log(divide (10, 'string'))

 } 
 catch(error) {

    console.log(error);

 }
 finally {
    console.log('Робота завершена');
 }

 try {

    console.log(divide ('string', 20))

 } 
 catch(error) {

    console.log(error);

 }
 finally {
    console.log('Робота завершена');
 }

try {
    console.log(divide(10, 2));
} catch (error) {

    console.log(error);
}
finally {
    console.log('Робота завершена');
 }
