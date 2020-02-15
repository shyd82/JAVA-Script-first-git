var number = prompt("The Integer that Biger Than 1");

// alert(number);

if(number <= 1){
    alert("该值非法！！！");

}else{
    var flag = true;
    // 判断munber是否是质数
    // 获取2-number之间的数,
    // 也就是number以内的数全部被选出来并且打印：
    for(var i=2; i<number; i++){
        // console.log(i)
        // number是不是质数换而言之：number能不能被number以内的全部数(i)的其中至少一个整除：
        if(number%i == 0){
            alert(number + "不是质数！");
            flag = fales;

        }
        // 逆向思维，如果能number能被一个i整除，那么number就不是一个质数，反之，全部是质数
    }

    if (flag = true){
        alert(number + "是质数！");
        }

}