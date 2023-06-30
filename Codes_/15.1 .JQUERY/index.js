// jquery
// $

$("h1").css("color","red");
$("button").html("<em>dont click me</em>");
$("a").attr("href","www.yahoo.com");
//event listener

// $("h1").click(function(){
// $("h1").css("color","purple");
// })

// $(document).keypress(function(Event){
//     $("h1").text(Event.key);
// });
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});