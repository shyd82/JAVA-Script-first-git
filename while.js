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

// while(n <= 10){
//     document.write(n++ + "<br />")
// }

// 注释：必须要有条件也就是括号里的(i <= 10)，否则就是无限死循环

// var n = 0;
// do{
//     document.write(n++ +"<br />")
// }
// while(n < 7);

// do while语句不一样的地方是，至少保证一个循环，比如以下：

var n = 8;
do{
    document.write(n++ +"<br />")
}
while(n < 7);

// 先do再看条件，由于n=8，而条件n<7，为fales，所以接下来的不能执行循环，但是终归出来一条结果，如果先while再do，一条都出不来