$(document).ready(function(){
 $(".header").height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000);
 })

$("#btnGo").click(function() {
    $("body,html").animate({
        scrollTop: $("#about").offset().top
    }, 1000);
})

$("[data-original]").click(function() {
    window.open($(this).data('original'), '_blank');
})

function getRandom() {
    let min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;
    let rand = Math.floor(min + Math.random() * (max - min + 1));
    document.querySelector('.random-result').innerText = rand;
}