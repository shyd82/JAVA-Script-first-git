// function fun(){
    
//     console.log(this);
// }
// //**********this 指向一个object。 

// // fun();


// var obj2 = {
//     name:'CK',
//     sayN:fun,
// }

// console.log(obj2.sayN == fun);


// obj2.sayN(); 
// //**********sayN()是一个函数，这个函数里是有this的，而这个this指向的就是obj2这个对象，即this指向obj2 object
// // 所以返回值是：{name: "CK", sayN: ƒ}


// // 如果：
// var obj3 = {
//     name:'tom',
//     age:28,
//     say:fun,
// }

// // 那么，以方法调用一下say，
// obj3.say();

// // 返回值是：{name: "tom", age: 28, say: ƒ}








//先定义一个全局的变量name Water
var name = 'Water';

// 区别这三种打印方式：
function fun(){
    console.log(name);
    console.log(this);
    console.log(this.name);    
}


var obj1 = {
    name:'zhangsan',
    age:27,
    sayname:fun,
}

var obj2 = {
    name:'lisi',
    age:37,
    sayname:fun,
}

obj1.sayname();


// 三种结果分别是：
// Water
//{name: "zhangsan", age: 27, sayname: ƒ}
//zhangsan