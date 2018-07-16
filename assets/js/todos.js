// Check off specific todos by clicking
$("li").click(function () {
    // if li is gray turn it to black, else turn it to gray
    $(this).toggleClass("completed");

});

//Click on X to Delete Todo
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    // removes  bubbling
    event.stopPropagation();
});
