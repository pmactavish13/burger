// Make sure to wait to attach handlers until the DOM is fully loaded.
$(function () {
  $(".btn-sm").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var ateBurger = true
    // var ateBurger = $(this).data("ate-burger");
    // ateBurger = parseInt(ateBurger +1);
    var newAteBurger = {
      devoured: ateBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newAteBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    if ($.trim($("#burgerName").val()) === "" || $.trim($("#burgerName").val()) === "Burger Name" || $.trim($("#burgerName").val()) === "Please enter a Burger Name") {
      $("#burgerName").val(" Please enter a Burger Name");
      return false;
    }
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
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
  });
});