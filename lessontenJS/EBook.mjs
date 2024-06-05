import { Book } from "./Book.mjs";

let arrEBook = [
    { 
    name: 'BookNameOne',
    title: "TitleOne",
    age: 10,
    format: "Pdf"

    },
    { 
        name: 'BookNameTwo',
        title: "TitleTwo",
        age: 20,
        format: "TXT"
    
    },
    { 
        name: 'BookNameThree',
        title: "TitleThree",
        age: 30,
        format: "Excel"

    
    }
]

class EBook extends Book {
    constructor(title, name, age,formatInfo) {
        super(title, name, age);
        this.formatInfo = formatInfo 
    }
    printInfo(){
        return console.log(`Info about book: ${this.formatInfo}, ${this.title}, ${this.name}, ${this.age}`)
    }
    get printInfo_formatInfo(){
        return  this.formatInfo
    }
    set setterPrintInfo_FormatInfo(formatInfo){
        if (formatInfo == "formatInfo1"){

            formatInfo = 'formatInfo_One'
            return console.log(formatInfo);
        }

    }
    static createFromBook(book, formatInfo) {
        return new EBook(book.title, book.name, book.age, formatInfo);
      }
}

let eBookOne = new EBook('title1','name1', 12,"formatInfo1");
eBookOne.printInfo()

eBookOne.setterPrintInfo_FormatInfo = 'formatInfo1'

let smallestAgeEbook = new EBook()
smallestAgeEbook.getArray(arrEBook)

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
const myEBook = EBook.createFromBook(myBook, "pdf");

console.log(myEBook);