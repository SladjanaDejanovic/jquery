let message = ["Please!", "Leave me alone!", "Drop me!", "Come on!"];
// to make element draggable:
$(function () {
  $("#facebook").draggable();
  $("#apple").draggable({
    //samo gore dole
    axis: "y",
  });
  $("#microsoft").draggable({
    revert: true, //da se vrati na pocetno mesto kada pustimo
    start: function () {
      $("#facebook").css("background-color", "#43c8d4");
    },
    drag: function () {
      //da menja boju random dokle god pomeramo, i pokazuje random msg
      $("#microsoft").css(
        "background-color",
        "rgb(" +
          Math.floor(256 * Math.random()) +
          " , " +
          Math.floor(256 * Math.random()) +
          " , " +
          Math.floor(256 * Math.random()) +
          ") "
      );
      $("#microsoft")
        .find("p")
        .html(message[Math.floor(4 * Math.random())]);
    },
    stop: function () {
      //kad pustimo da drugi div promeni boju, a ovaj pokaze odredjenu msg
      $("#apple").css("background-color", "#b1e269");
      $("#microsoft").html("<p>Finally!</p>");
    },
  });
});
