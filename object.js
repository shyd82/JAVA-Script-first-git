var objc = new Object();

// Object() is a function
// new这个关键字调用的这个函数，是构造函数constructor
// 构造函数~new Object();是专门用来创建对象的函数，对象就是objc


objc.name = 'Mic';
objc.gender = "male";
objc.phone_num = "703-341"
objc.age = 32;
objc.zip = 20871;






console.log(objc);
console.log(typeof objc);

console.log(objc.name);

document.write(objc.zip);




// 第二种创建对象object的方式：
// 直接用变量来创建：
var obj = {
    name:'Messi',
    age: 32,
    email:'Messi@hotmail.com',
    job:'web develop'
}

// console.log(obj);
console.log(obj.name)


for(var t in obj){
    console.log(t);
}

obj.job = 'soccer player';
console.log(obj.job);