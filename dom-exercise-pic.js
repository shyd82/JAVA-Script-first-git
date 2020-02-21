var prev = document.getElementById("prev");


var next = document.getElementById("next");


// **********************重点，要对图片的src操作，就要找对象image，并且对取出来的数组找元素，即第一个元素就是我要找的所以加上[0]。
var img = document.getElementsByTagName("img")[0];

// 创建一个数组，来保存图片的路径：
var imgArr = ["image/1.jpg" , "image/2.jpg" , "image/3.jpg" , "image/4.jpg" , "image/5.jpg" , "image/6.jpg" , "image/7.jpg" ];

// 再为这个图片数组创建一个index，为了下面好去定位这个位置的图片：
var index = 0;


// 以下是设置抬头：
var info = document.getElementById('info');
// 编写一段提示文字放在下面的事件的函数里：








// 当click时，换图片就是修改image的src属性，所以image.src:
// 并且，imgArr[]里面直接用index：
prev.onclick = function(){
    index--;
    if(index < 0){
        index = imgArr.length - 1;
    };

    img.src = imgArr[index];
    info.innerHTML = '儿子女儿宝贝照片！' + '一共' + imgArr.length+ "张图片，当前是第" + (index + 1) + '张';
};

next.onclick = function(){
    index++;
    if(index > imgArr.length - 1){
        index = 0;
    };
    img.src = imgArr[index];
    info.innerHTML = '儿子女儿宝贝照片！' + '一共' + imgArr.length+ "张图片，当前是第" + (index + 1) + '张';

};


