$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#scrollTop").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    } else {
      $("#scrollTop").css({
        opacity: "0",
        "pointer-events": "none",
      });
    }
    if ($(window).scrollTop() > 300) {
      $("#darkbutton").css({
        opacity: "0",
        "pointer-events": "none",
      });
    } else {
      $("#darkbutton").css({
        opacity: "1",
        "pointer-events": "auto",
      });
    }
  });
  $("#scrollTop").click(function () {
    $("html").animate({ scrollTop: 0 }, 100);
  });
  $("#darkbutton").click(function () {
    $("body").toggleClass("dark");

    $("#textDark").text($("#textDark").text() == "Light" ? "Dark" : "Light");
  });
});
