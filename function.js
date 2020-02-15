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


function fun(){
    alert('函数要执行啦！！！');
    for(i=0;i<=5;i++){
        console.log(i);
    }
    alert('函数执行完毕了！~~~')
}

fun();
