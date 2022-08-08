$(document).ready(function(){
 $(".header").height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(1, 100)
> 7