const person = {
    firstName: 'Mick', 
    lastName:'Smith',
    age: 30,
    email: 'Mick@gmail.com',
    hobbies: ['music', 'football'],
    address: {
        city:'Germantown',
        state:'MD'
    },

    getBirthYear : function(){
        return 2015 ;
    }
    
}

let val;
val = person;
// 上面出来的是大括号里全部的内容，接下来：
// Get spesific value:
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);


// const people = {
//     [name: 'John', age:32],
//     [name: 'Tom', age:28],
//     [name: 'Nacy', age:40]
    
// };

const people = [
    {name: 'John', age:32},
    {name: 'Tom', age:28},
    {name: 'Nacy', age:40}
]




for(let i = 0; i< people.length; i++){
    console.log(people[i].name);
}




