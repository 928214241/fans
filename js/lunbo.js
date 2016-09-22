/**
 * Created by Administrator on 2016/9/9.
 */

    window.onload=function(){

        var tou=document.getElementById('tou');
        var tougao=document.getElementById('s-menu');
        tou.onmouseover=function(){
            tougao.style.visibility='visible';
        };
        tou.onmouseout=function(){
            tougao.style.visibility='hidden';
        };


        var logo=document.getElementById('logo');
        var bilibili=document.getElementById('bilibili');
        logo.onmouseover=function(){
            bilibili.style.visibility='visible';
        };
        logo.onmouseout=function(){
            bilibili.style.visibility='hidden';
        };

        var pgame=document.getElementById('pgame');
        var game=document.getElementById('game');
        pgame.onmouseover=function(){
            game.style.display='block'
        };
        pgame.onmouseout=function(){
            game.style.display='none'
        };
        var plive=document.getElementById('plive');
        var stream=document.getElementById('stream');
        plive.onmouseover=function(){
            stream.style.display='block'
        };
        plive.onmouseout=function(){
            stream.style.display='none'
        };





var dd=document.getElementById('dd');
var tu =document.getElementById('tu');
var spans=document.getElementById("paganation").getElementsByTagName("span");
var index=0;
var Dis = dd.offsetWidth;

function go(){
    var start= tu.offsetLeft;
    var end=index*Dis*(-1);
    var change=end-start;
    var maxT=12;
    var t=0;
    var timer;
    clear();

    if(index==spans.length){
        spans[0].className="selected";
    }else{
        spans[index].className="selected";
    }
    timer=setInterval(function(){
        t++;
        if(t>=maxT){
            clearInterval(timer); clickFlag=true;
        }
        tu.style.left=change/maxT*t+start+"px";

        if(index==spans.length&&t>=maxT){
            tu.style.left=0;
            index=0;
        }
    },20);
}
var time;
time=setInterval(forward,3000);
function forward(){
    index++;
    if(index>spans.length){
        index=0;
    }
    go();
}


dd.onmouseover=function(){
    clearInterval(time);
};
dd.onmouseout=function(){
    time=setInterval(forward,3000);
};
for(var i=0;i<spans.length;i++){
    spans[i].onclick=function(){
        index=this.innerText-1;
        go();
    }
}
function clear(){
    for(var i=0;i<spans.length;i++){
        spans[i].className="";
    }
}


        var pov1=document.getElementById('pov1');
        var ov1=document.getElementById('ov1');

        pov1.onmouseover=function(){
            ov1.style.display='block'
        };
        pov1.onmouseout=function(){
            ov1.style.display='none'
        };
        var pov2=document.getElementById('pov2');
        var ov2=document.getElementById('ov2');

        pov2.onmouseover=function(){
            ov2.style.display='block';
            ov2.style.left='364px'
        };
        pov2.onmouseout=function(){
            ov2.style.display='none'
        };
        var pov3=document.getElementById('pov3');
        var ov3=document.getElementById('ov3');

        pov3.onmouseover=function(){
            ov3.style.display='block';
            ov3.style.left='544px'
        };
        pov3.onmouseout=function(){
            ov3.style.display='none'
        };
        var pov4=document.getElementById('pov4');
        var ov4=document.getElementById('ov4');

        pov4.onmouseover=function(){
            ov4.style.display='block';
            ov4.style.left='724px'
        };
        pov4.onmouseout=function(){
            ov4.style.display='none'
        };










};