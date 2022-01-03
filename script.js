$(document).ready(function () {
  $(".hover").hover(function () {
    $("#design").toggle();
    $("#designImg").toggle();
  });
});

$(document).ready(function () {
  $(".hover1").hover(function () {
    $("#development").toggle();
    $("#developmentImg").toggle();
  });
});

$(document).ready(function () {
  $(".hover2").hover(function () {
    $("#productManagement").toggle();
    $("#productManagementImg").toggle();
  });
});

jQuery("button").click(function () {
  alert("Your response has been received");
});
