$(function () {
  $("#facebook").load("ajax/somedata.txt");
  $("#apple").load("ajax/somedata.txt #paragraph1");

  // $("button").click(function () {
  //   $.ajax({
  //     url: "ajax/somedata.txt",
  //     success: function (data) {
  //       $("#microsoft").html(data);
  //     },
  //   });
  // });
  $("button").click(function () {
    $.ajax({ url: "ajax/somedata.txt" }).done(function (somedata) {
      $("#microsoft").html(somedata);
    });
  });
});
