/**
 * JS first
 */

$(document).ready(function(){
    $('.carousel').carousel();
});


/* ------------------------------------ moving left right turtle start ------------------------------------ */
var scrollSpeed = 60;
var step = 1;
var current = 0;
var restartPosition = -549;
function scrollBg(){
    current -= step;
    if (current == restartPosition){
        current = 0;
    }
    $('div.mvngTrtl-1').css("background-position","0 "+current+"px");
    $('div.mvngTrtl-2').css("background-position","0 "+(275+current)+"px");
}
//var init = setInterval("scrollBg()", scrollSpeed);
/*  ------------------------------------ moving left right turtle end ------------------------------------  */