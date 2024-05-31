let users = 
[
    {
        name: 'Tom',
        email:'tom@tom.com',
        age: 16
    },
    {
        name: 'Greg',
        email: 'gregm@greg.com',
        age: 45
    }

]

   for (let use of users) {
    
    let {name, email, age} = use

    console.log(name, email, age);
}






