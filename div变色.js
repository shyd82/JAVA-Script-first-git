window.onload=function(){

    

    // console.log(lis);
    
    
    
    

    var box01 = document.getElementById('box01');
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');

    btn1.onclick = function(){
        box01.style.width = '300px';
        box01.style.backgroundColor = 'yellowgreen';
    }

    btn2.onclick = function(){
        box01.innerHTML = "Jesus is The LORD!";
        
    }






    var lists = document.getElementsByTagName('li');


    for(var i = 0; i<lists.length; i++){
        if(i%2 == 0){
            lists[i].style.backgroundColor="#ccc";
        }
        else{
            lists[i].style.backgroundColor = 'aqua';
        }
    };


}

