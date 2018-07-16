// Check off specific todos by clicking
$("li").click(function () {
    // if li is gray turn it to black, else turn it to gray
    $(this).toggleClass("completed");

});
