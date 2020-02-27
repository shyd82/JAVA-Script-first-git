var box1 = document.getElementById('box1');

document.onmousemove = function(event){
    event = event || window.event;

    var left = event.clientX;
    var top = event.clientY;


    box1.style.left = left+ 'px';
    box1.style.top = top+ 'px';


}


