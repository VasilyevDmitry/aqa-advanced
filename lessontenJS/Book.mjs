let arrBook = [
    { 
    name: 'BookNameOne',
    title: "TitleOne",
    age: 2

    },
    { 
        name: 'BookNameTwo',
        title: "TitleTwo",
        age: 3
    
    },
    { 
        name: 'BookNameThree',
        title: "TitleThree",
        age: 5
    
    }
]


export class Book {

    constructor(title, name, age){

        this.name = name
        this.title = title  
        this.age = age
     }

    printInfo(){
        console.log(`Info about book: ${this.name}, ${this.title}, ${this.age} `)
    }

    get geterPrintInfo_Name (){
        return  this.name

    }
    get geterPrintInfo_Title(){
        return  this.title
    }
    get geterPrintInfo_Age(){
        return  this.age
    }

    set setterPrintInfo_Name(name){
        if (name == "name1"){

            name = 'NameOne'
            return console.log(name);
        }

    }

    set setterPrintInfo_Title(title){
        if (title == "title2"){

            title = 'titleTwo'
            return console.log(title);
        }

    }
    set setterPrintInfo_Age(age){
        if (age == 12){

            age = 88
            return console.log(age);
        }
    }

    getArray(array){

       let  smallestAge = array.map(obj => obj.age)

        console.log(Math.min(...smallestAge))
                
    }
}

let bookOne = new Book('name1','title1' , 12)
let bookTwo = new Book('name1','title2' , 18)

bookOne.printInfo()
bookTwo.setterPrintInfo_Name = 'name1'
bookTwo.setterPrintInfo_Title = 'title2'
bookTwo.setterPrintInfo_Age = 12
bookOne.printInfo()

let smallestAge = new Book()
smallestAge.getArray(arrBook)







