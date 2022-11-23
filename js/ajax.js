$(function () {
  $("#facebook").load("ajax/somedata.txt"); //adding something in this div that is contained in another file
  $("#apple").load("ajax/somedata.txt #paragraph1"); //adding only first paragraph of that file

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
    }); //on button click adding that file in div
  });
});
