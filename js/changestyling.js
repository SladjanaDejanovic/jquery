// $("#changeFacebook").click(function () {
//   $("#facebook").css("width", "300px"); //instead of "300px" i can put just 300, or even math operation like 200+100, and it would still work
// });
// add random width between -50 to +50px to original width of element:
$(function () {
  $("#changeFacebook").click(function () {
    $("#facebook").css(
      "width",
      100 * Math.random() - 50 + $("#facebook").width()
    );
    // to add class to this div:
    $("#facebook").addClass("greenbox");
  });
  // how to remove class:
  $("#changeApple").click(function () {
    $("#apple").removeClass("yellowbox");
  });
  // instead of clicking on button to change, click on div:
  $("#apple").click(function () {
    $("#apple").removeClass("sans-serif");
    // change position:
    $("#apple").css("position", "absolute");
    // giving it random position and random background:
    $("#apple").css({
      top: 200 * Math.random(),
      left: 200 * Math.random(),
      "background-color":
        "rgb(" +
        256 * Math.random() +
        "," +
        256 * Math.random() +
        "," +
        256 * Math.random() +
        ")",
    });
  });
  // add and remove class on click:
  $("#changeMicrosoft").click(function () {
    $("#microsoft").toggleClass("greenbox");
    // hide div when double click:
  });
  $("#microsoft").dblclick(function () {
    $("#microsoft").hide();
  });
  // show div on clik:
  $("#showMicrosoft").click(function () {
    $("#microsoft").show();
  });
  // to wrap elements in tag:
  $("#changeGreat").click(function () {
    $("#great").wrap("<div></div>");
  });
});
