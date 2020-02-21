
// <button id = "btn" onclick="alert ('点我干啥？！');">我是一个按钮    </button>

// 若想修改对象就先要找到对象：
var sbtn = document.getElementById('btn');


// 为按钮绑定一个事件：
sbtn.onclick = function(){
    alert('Hello!!!');
}

// 修改按钮的名称属性：
btn.innerHTML = 'click me button';

