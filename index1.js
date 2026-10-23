$(document).ready(function(){
    $("#title").text("jqueryyy");
    $("h1").css("color", "pink");
    $("p#ano").css("color", "beige");

    $("#btn2").click(function(){
        $(this).css("background", "pink");
    });

    $("ul li:first-child").css("color", "yellow");
    $("[href]").css("color", "yellow");
    $("tr").css("background", "lightblue");
    $("tr").css("color", "navy");
});
