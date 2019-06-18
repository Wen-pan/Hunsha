//动画函数
function animte(el,target){	
    //每次进来清除定时器
    clearInterval(el.timer);
    el.timer=setInterval(function(){
        //起点
        var current = el.offsetLeft;
        // console.log(current)
        //步数
        var step = (target - current)/10;
        if(Math.abs(step) < 1){
            step = step > 0 ? 1 : -1; 
        }
        //当前位置
        current+=step;
        el.style.left = current+'px';
        if(current == target){
            clearInterval(el.timer);
        }
    },17)
}