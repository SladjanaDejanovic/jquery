$(function () {
  $("#facebook").resizable({
    maxHeight: 200,
    minHeight: 50,
    minWidth: 100,
    maxWidth: 300,
    aspectRatio: 4 / 3,
    ghost: true,
    alsoResize: "#microsoft",
  });
  $("#apple").resizable({
    containment: "#container",
  });
});
