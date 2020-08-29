$("#btn").click(function() {
    makeChange($("#amt").val());
});

function makeChange(total) {
    var amtArray = [100, 50, 20, 10, 5, 2, 1];

    $("span").each(function(i) {
            //Set the span
            $(this).text(parseInt(total / amtArray[i]));
            //Get the new total
            total = total % amtArray[i];
    });
}