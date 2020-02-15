// document.write(1);
// document.write(2);
// document.write(3);
// document.write(4);
// document.write(5);
// document.write(6);


// document.write(1 +"<br />");
// document.write(2 +"<br />");
// document.write(3 +"<br />");
// document.write(4 +"<br />");
// document.write(5 +"<br />");

// 或者：

// var n = 1;
// document.write(n++ +"<br />");
// document.write(n++ +"<br />");
// document.write(n++ +"<br />");
// document.write(n++ +"<br />");
// document.write(n++ +"<br />");




// var n = 1;
// var count = 0;
// while(n <= 10){
//     document.write(n++ + "<br />")
// }
// count++;
// console.log(count);

// 注释：必须要有条件也就是括号里的(i <= 10)，否则就是无限死循环

// var n = 0;
// do{
//     document.write(n++ +"<br />")
// }
// while(n < 7);

// do while语句不一样的地方是，至少保证一个循环，比如以下：

// var n = 8;
// do{
//     document.write(n++ +"<br />")
// }
// while(n < 7);

// 先do再看条件，由于n=8，而条件n<7，为fales，所以接下来的不能执行循环，但是终归出来一条结果，如果先while再do，一条都出不来








// ------练习题：初始金额为1000元，每年回报率是5%，一共需要多少年可使金额变成5000元？

// var counter = 0;

// var money = 1000;



// while(money <= 5000){
//     money *= 1.05;
//     counter++;   
// }
// // 计数器counter++必须包在函数{}之内
    

// console.log(money);
// document.write(counter);








// 计数器



// // 初始化计数器
// var counter = 0;

// // 递增计数器的函数
// function test() {
//   counter ++;
// }
// // 或者写成：counter += 1

// // 调用5次 test()函数
// test();
// test();
// test();
// test();
// test();

// console.log(counter);




// 待修改：
// var a = 4;
// function myFunction() {
//     return a * a;
    
//   } 

//   console.log(myFunction);







// // 1、打印1~~100之间所有的奇数，如下：

// for(var i = 1; i <= 100; i++){
//     if(i % 2 !=0){
//         console.log(i);
//     }
// }

// 2、打印1~~100之间所有的奇数 之和，如下：

// var sum = 0;

// for(var i = 1; i <= 100; i++){
//     if(i % 2 !=0){
//         // console.log(i);
//         sum = sum + i;
        
//     }
// }
 
// console.log(sum);


// 打印1~~100之间所有7的倍数 之和，如下：
// var sum = 0;

// for(var n = 1; n < 101; n++){
//     if(n % 7 == 0){
//         sum += n;
//     }
// }
// console.log("7的倍数之和是： " + sum + "。");

// 输出以下图形：
// *****
// *****
// *****
// *****
// *****


// document.write("*****" + "<br />");
// document.write("***** <br />");
// document.write("***** <br />");




for(var a=1; a<=7; a++){
    for(var b = 1; b<=7; b++){
        document.write("*");
    }
    document.write("<br />");
}
// 结论：这个for loop可控制图形高度
// 嵌套进去的for loop可以控制图形的宽度


// 图2：
for(var a=1; a<=7; a++){
    for(var b = 1; b<=a+1; b++){
        document.write("*");
    }
    document.write("<br />");
}
// 结论：这个for loop可控制图形高度
// 嵌套进去的for loop可以控制图形的宽度
