// alert('Hello World 2020')

// const name = 'Tom John';
// console.log(name);

// console.log(typeof name);


// const name = 'Mick';
// const job = 'junior DBA';
// const today = new Date();



// console.log(today);
// console.log(job);
// console.log(typeof today);

// const number1 = 50;
// const number2 = 100;
// let val;
// val = number1 + number2;
// val = number1 * number2;
// val = number1 % number2;


// val = Math.round(2.7);
// val = Math.ceil(6.3);
// val = Math.floor(6.9);
// val = Math.sqrt(25);
// val = Math.pow(5,3);

// val = Math.random();

// val = Math.random()*20;

// val =Math.round(Math.random()*30);

// console.log(val);



const numbers = [20,9,17,31,76,7,55];
const numbers2 = new Array(39,21,7,50,23);
const fruit = ['apple', 'banana', 'orange', 'berry'];
const mixed = [27,'Hello', true, undefined, null, {a:1,b:1}, new Date()];



let val;

val = numbers.length;

val = Array.isArray(fruit);

val = fruit[2];

numbers[2] = 100;

val = numbers.indexOf(76);
numbers.push(350);
numbers.push(555);
numbers.unshift(1999);

numbers.pop();
numbers.shift();


numbers.splice(1,3);

numbers.reverse();

val = numbers.concat(numbers2);


val = numbers.sort();
val = numbers.sort(function(x,y){
    return x - y;
});

// or reverse sort:

val = numbers.sort(function(x,y){
    return y - x;
});





console.log(numbers);
console.log(val);


