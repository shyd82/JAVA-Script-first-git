var obj1 = {
    name:'zhangsan',
    age:29,
    gender:'man',
    sayN: function(){
        alert(this.name);
    }
};

var obj2 = {
    name:'lisi',
    age:19,
    gender:'man',
    sayN: function(){
        alert(this.name);
    }
};



var obj3 = {
    name:'wangwu',
    age:39,
    gender:'man',
    sayN: function(){
        alert(this.name);
    }
};

// 以上太繁复，可以用工厂批量生产来简化：

function createPerson(name,age){
    // 创建一个新的对象：
    var obj = new Object();

    // 向对象中添加属性：
    obj.name = name;
    obj.age = age;
    obj.gender = 'man';
    obj.sayN =  function(){
        alert(this.name);
    };

    // 将新的对象返回：
    return obj;
}

var obj2 = createPerson('lisi',19 );
var obj3 = createPerson('wangwu',27);
var obj4 = createPerson('zhaoliu',29);
var obj5 = createPerson('tom',39);
var obj6 = createPerson('jack',36);

console.log(obj3);
obj3.sayN();