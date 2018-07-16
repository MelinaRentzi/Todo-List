// Check off specific todos by clicking
$("ul").on("click", "li", function () {
    // if li is gray turn it to black, else turn it to gray
    $(this).toggleClass("completed");

});

//Click on X to Delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    // removes  bubbling
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function (event) {
    // the enter key code is 13
    if (event.which === 13) {
        //grab text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul (append)
        $("ul").append("<li><span>X </span>" + todoText + "</li>");

    }
});
