$(document).ready(function(){
 $(".header").height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })

let min = 1;
let max = 100;
let random = min + Math.random() * (max - min);