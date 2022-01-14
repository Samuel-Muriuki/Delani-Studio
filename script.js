$(document).ready(function () {
  $(".hover").click(function () {
    $("#design").toggle();
    $("#designImg").toggle();
  });
});

$(document).ready(function () {
  $(".hover1").click(function () {
    $("#development").toggle();
    $("#developmentImg").toggle();
  });
});

$(document).ready(function () {
  $(".hover2").click(function () {
    $("#productManagement").toggle();
    $("#productManagementImg").toggle();
  });
});

jQuery("button").click(function () {
  alert("Your response has been received");
});


$(document).ready(function () {
  $(".hov1").hover(function () {
    $("#imgHov1").toggle();
    $("#pHov1").toggle();
  });
});