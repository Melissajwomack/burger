//make sure page is loaded first
$(function () {
  //onclick for when burger is devoured, makes PUT request with AJAX call, goes to specified route, route calls burger object, burger object function calls orm function, orm updates data in mysql, then page reloads with new data
  $(".eatbtn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //onclick for when burger is reordered, makes PUT request with AJAX call, goes to specified route, route calls burger object, burger object function calls orm function, orm updates data in mysql, then page reloads with new data
  $(".reorderbtn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //onclick for submit button to make new burger, makes POST request with AJAX call, goes to specified route, route calls burger object, burger object function calls orm function, orm updates data in mysql, then page reloads with new data
  $("#submitbtn").on("click", function (event) {
    // Make sure to preventDefault on a submit event.

    var input = $("#textarea1").val()

    if (input === "") {
      return;
    }
    else {
      event.preventDefault();
      var newBurger = {
        burger_name: input.trim(),
        devoured: false
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("deleted burger: " + id);
      location.reload();
    })
  })
});