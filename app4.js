// ---函数

// function greet(){
//     console.log('Hello');
// }

// greet();



// function wangye(){
//     document.write('hao123');
// }


// // wangye();




// ---自增&自减

// var num = 2;
// console.log('num');

// var a = 7;
// // a++;
// // a++;

// // ++a;
// // console.log('a = ' +a);



// // // console.log(a++);
// // console.log(++a);



// // a++;
// // console.log(a++);

// var result = a++ + ++a + a;

// console.log(result);




// -----非 ！、与 &&、或 ||
// var c = 10;

// c = !c;

// console.log('c =' +c);
// console.log(typeof c);


// var d = 0;

// d = !d;

// console.log('d =' +d);
// console.log(typeof d);


// true && alert('coming?');
false && alert('laile?');


result = false || false;
result = true || false;
result = false || true;
result = true || true;

console.log(result);

// false || alert(123);
true || alert(789);

// 789不会弹出，因为非是短路的语法，当true已经执行了，就会停止了额，alert（789）不执行


// if 两个true，返回后面的
var result = 5 && 6;
// 如果一个false 返回fales  return 0:
result = 0 && 2;
result = 2 && 0;

result = NaN && 56;



// 如果两个都是fales 返回第一个fales     return Nan:

result = NaN && 0;
result = 0 && NaN;



console.log(result);



console.log(10 > null);
console.log(10 > true);