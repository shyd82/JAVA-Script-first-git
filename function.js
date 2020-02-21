// 三种函数：

// // 1、使用一个构造函数来创建一个函数对象：
// // 通过var obj = new Object();引入：
// var fun = new Function("console.log('hello first function');");

// fun();
 

// // 2、使用函数声明来创建一个函数：
// function fun2(){
//     console.log("second function");
//     document.write(1234567);
// }

// fun2();



// // 3、使用函数表达式来传建一个函数。
// var fun3 = function(){
//     console.log("Third function");
//     document.write("expression in the specified windown.")
// }

// fun3();



// 拟定形式参数，在函数括号中（）拟定形参

//  function sum(){
//     var a = 1;
//     var b = 2;
//     }
// 等同于
//  function sum(a,b){
//  }


// function sum(a,b){
//     console.log(a+b);
// }
// // next,用实参赋值给形式参数：
// sum(10,7);
// sum(100,50);
// sum(123,'hello');
// sum(true , fales);


// 谈一个对话框：
// function sum(a, b, c){
//     alert(a+ b +c);
// }

// sum(1,2,3);




// // 定义一个函数，此函数可以判断一个数字是否是偶数，并且返回true or fales

// function even(num){
//     return num % 2 == 0;
// }

// // var result = even();
// // even()是个函数，括号里填写数字来验证，例如：
// var result = even(17);

// console.log(result);
// document.write('Result is: ' +  result);




// // 定义一个函数，当已知半径就可生成这个圆的面积：

// function mianji(r){
//     return 3.14*r*r;
// }

// var result = mianji(7);
// console.log(result);



// // 用object作为函数里的实参：
// function man(o){
//     console.log('My name is ' + o.name +',' +"I'm " + o.age + ' years old,');
// }


// var obj = {
//     name:'Jack',
//     gender:'man',
//     age:'28',
//     zipcode:'20871'
// }

// man(obj);




// 函数套函数
// function fun(){
//     alert('函数要执行啦！！！');
//     for(i=0;i<=5;i++){
//         console.log(i);
//     }
//     alert('函数执行完毕了！~~~')
// }

// fun();






// // return和coutinue的使用
// function fun(){
//     alert('函数要执行啦！！！');
//     for(i=0;i<=5;i++){
        
//         if(i == 3){

//             // break;
//             // continue;
//             return;
            
//         }

//         console.log(i);

//     }

//     alert('函数执行完毕了！~~~')
// }

// fun();


// return可以是任意类型值：

// function fun2(){
//     return 10;
// }

// var a = fun2();
// console.log(a);


// function fun3(){
//     return {name:'Wendy'};
// }

// var a = fun3();
// console.log(a);
// console.log(a.name);




// // 函数套函数，函数套函数！！！
// function fun4(){
//     function fun5(){
//         alert('hahaha!');
//     }
//   fun5();
//     //着重记得要调用一遍套在里面的函数，例如这里的fun5() 
// }

// fun4();







// 调函数fun(),调对象：XXX.name

// 比如：console.log,调console的log对象；document.write,调document的write对象。

// Object里面套函数：

var objc1 = {
    name:'Zhang San',
    age:'18',
    sayname:function(){
        console.log(objc1.name);
    }
};

objc1.sayname();
console.log(objc1.age);


// 查看对象重点属性，比如查看document里面的除了已知write的其它属性
// 使用for...in语句，语法是：
// for(var 变量 in 对象){}

for(var n in objc1){
    console.log('hello');
}
// 结果是3次hello说明objc1里面有3个属性

// 以下表达的意思是：每执行for in循环一次，那么就会把对象中的一个属性名字赋值给变量n：

// for(var n in objc1){
//     console.log(n);
// }

// for(var i in document){
//     console.log('ok');
// }




// 取值，取对象中的属性值：
for(var n in objc1){
    console.log(objc1[n]);
}




var a = 123;
function fun(a){
    alert(a);
    a = 456
}

fun(a);
alert(a);

