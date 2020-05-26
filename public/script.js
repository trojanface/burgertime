//The client side javascript. Responsible for recieving client interaction and requesting the appropriate action on the server.

$(function () {//wait for the page to be loaded
    $(".change-devoured").on("click", function (event) {//catch any clicks on this button.
        let id = $(this).data("id");//get the id from the pressed button
        $.ajax("/api/burgers/" + id, {//perform an AJAX request with id in the url
            type: "PUT",
            data: true
        }).then(//upon recieving a completion of the promise reload the page.
            function () {
                location.reload();
            }
        )
        console.log("pressed");
    });

    $(".delete-devoured").on("click", function (event) {//catch any clicks on this button.
        let id = $(this).data("id");//get the id from the pressed button
        $.ajax("/api/burgers/" + id, {//perform an AJAX request with id in the url
            type: "DELETE",
        }).then(//upon recieving a completion of the promise reload the page.
            function () {
                location.reload();
            }
        )
        console.log("pressed");
    });

    $(".create-form").on("submit", function (event) {//catch any submits of this form enter/click.
        event.preventDefault();//prevents the form from automatically reloading the page

        let newBurg = {//creates the new burg object by taking the entered name in the form and setting the devoured attribute to false.
            burger_name: $("#ca").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {//perform an AJAX request and send the new burger as the data
            type: "POST",
            data: newBurg
        }).then(//upon recieving a completion of the promise reload the page.
            function () {
                location.reload();
            }
        )

    })

});