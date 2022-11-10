$(function () {
  $("#button1").button();
  $("#button2").button({
    icons: {
      primary: "ui-icon-folder-open",
    },
    text: false, //to hide text and show only icon in button, primary icons are those that go on left side, secondary go on right side
  });
  $("#button3").button({
    icons: {
      primary: "ui-icon-mail-closed",
      secondary: "ui-icon-caret-1-e", //BUG: DOESN'T SHOW SECOND ICON
    },
    // text: false,
  });

  $("#myCheckbox").button();
  $("#checkboxes").buttonset(); //looks different than in video of this course
  $("#radioBoxes").buttonset();
});
