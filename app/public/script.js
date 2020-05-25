$(function() {
$(".change-devoured").on("click", function(event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: true
    }).then(
        function() {
            location.reload();
        }
    )
    console.log("pressed");
});

$(".delete-devoured").on("click", function(event) {
    let id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
        type: "DELETE",
    }).then(
        function() {
            location.reload();
        }
    )
    console.log("pressed");
});

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurg = {
        burger_name: $("#ca").val().trim(),
        devoured: false
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
    }).then(
        function() {
            location.reload();
        }
    )

})

});