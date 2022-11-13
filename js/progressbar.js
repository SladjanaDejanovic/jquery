$(function () {
  $("#progress").progressbar({
    value: 0,
  });
  var x = 0;
  $("button").click(function () {
    $("#label").text("In progress...");
    setTimeout(function () {
      var progress = setInterval(function () {
        x++;
        $("#label").text(x + "%");
        $("#progress").progressbar("option", "value", x);
        if (x > 99) {
          clearInterval(progress);
        }
      }, 100);
    }, 1000);
  });
});
