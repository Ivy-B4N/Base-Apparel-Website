var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$("button").click(function() {
  var email = $("input").val();

  if (email.match(regExp)) {
    $(".confirmation-msg").text("To confirm your email, click the link in the email we just sent you.");
    if ($(".form").hasClass("invalid")) {
      $(".form").removeClass("invalid");
      $(".error-msg").text("");
    }
  } else if (email === "") {
    $(".form").addClass("invalid");
    $(".error-msg").text("Please provide an email");
    $(".confirmation-msg").text("");
  } else {
    $(".form").addClass("invalid");
    $(".error-msg").text("Please provide a valid email");
    $(".confirmation-msg").text("");
  }
});

$("input").keyup(function() {
  var email = $(this).val();

  if (email.match(regExp)) {
    if ($(".form").hasClass("invalid")) {
      $(".form").removeClass("invalid");
      $(".error-msg").text("");
    }
  }
});
