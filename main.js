$(document).ready(function(){
	$(".chakra").append("<p>This paragraph shows my jQuery is working</p>")
});

/* var name = prompt("what is your name?")
console.log(name);*/

$(".chakra").click(function() {
	$(this).fadeOut(1000)
});

$(".chakraMap").ready(function(){
	$(this).css("align:right")
});