export class Book {

    constructor(title, name, age){

        this.name = name
        this.title = title  
        this.age = age
     }

    printInfo(){
        console.log(`Info about book: ${this.name}, ${this.title}, ${this.age} `)
    }
}

let bookOne = new Book('name1','title1' , 12)
let bookTwo = new Book('name1','title3' , 18)

bookOne.printInfo()
bookTwo.printInfo()


