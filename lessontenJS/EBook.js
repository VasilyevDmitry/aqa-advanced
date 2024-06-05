import { Book } from "./Book";

class EBook extends Book {
    constructor(title, name, age,formatInfo) {
        super(title, name, age);
        this.formatInfo = formatInfo 
    }
    printInfo(){
        console.log(`Info about book: ${this.formatInfo}, ${this.title}, ${this.name}, ${this.age}`)
  }
}

let eBookOne = new EBook('title1','name1', 12,"formatInfo1");
eBookOne.printInfo()