/**
 * Created by Maibenben on 2018/8/28.
 */

var Jd = function(){};
Jd.prototype={
    slider:function(){
        var header = document.querySelector('header'),
            section = document.querySelector('#slide');
        window.addEventListener('scroll',function(){
            //console.log(1);
            if(document.body.scrollTop <= section.offsetHeight){
               header.style.backgroundColor = 'rgba(222,24,27,'+
                   document.documentElement.scrollTop/section.offsetHeight+')';
           }else{
               header.style.backgroundColor = 'rgba(222,24,27,1)';
           }
        });
    },
    downtime:function(){
        var span = document.querySelectorAll('.seckill-time span');
        var timeId =setInterval(function(){
            var toTime =(new Date(2018,7,30,18,0,0)).getTime()/1000;
            var nowTime = (new Date()).getTime()/1000;
            //console.log(toTime+'and'+nowTime);
            var downtime = toTime - nowTime;
            if(downtime<=0){
                clearInterval(timeId);
            }
            var hour = Math.floor(downtime/3600);
            var minute = Math.floor(downtime/60)%60;
            var second = Math.round(downtime%60);
            span[0].innerHTML = Math.floor(hour/10);
            span[1].innerHTML = hour%10;
            span[2].innerHTML = Math.floor(minute/10);
            span[3].innerHTML = minute%10;
            span[4].innerHTML = Math.floor(second/10);
            span[5].innerHTML = second%10;
            },1000);
    }
}
var jd = new Jd();
jd.slider();
jd.downtime();

























































































