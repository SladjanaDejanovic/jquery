$(function () {
  //.fadeOut("fast"), "slow"), (duration in ms)
  $("#fadeOutFacebook").click(function () {
    $("#facebook").fadeOut(3000, function () {
      window.alert("Hi!"); // and then adding what happens after element is faded out, in this case it's alert msg
    });
  });
  $("#fadeInFacebook").click(function () {
    $("#facebook").fadeIn();
  });
  $("#fadeToggleFacebook").click(function () {
    $("#facebook").fadeToggle(1000);
    $("#apple").fadeToggle(2000);
    $("#microsoft").fadeToggle(3000);
  });
  // create animations with properties of element:
  // $("#animate").click(function () {
  //   $("#facebook").animate(
  //     { width: "200px", height: "50px", opacity: "0.5" },
  //     1000
  //   );
  // });
  // change one property at a time:
  $("#animate").click(function () {
    $("#facebook").animate({ width: "200px" }, "slow");
    $("#facebook").animate({ height: "300px" }, "slow");
    $("#facebook").animate({ height: "100px" }, "slow");
    $("#facebook").delay(3000).animate({ width: "300px" }, "slow");
  });
});
