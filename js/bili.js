/**
 * Created by Administrator on 2016/9/8.
 */

window.onload= function () {
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






};