$(function() {
    $(".eatbtn").on("click", function(event) {
      event.preventDefault();
      console.log("Button clicked");
      var id = $(this).data("id");
      var newDevouredState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".reorderbtn").on("click", function(event) {
      event.preventDefault();
      console.log("Other Button clicked");
      var id = $(this).data("id");
      var newDevouredState = {
        devoured: false
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submitbtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#textarea1").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });