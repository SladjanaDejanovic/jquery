$(function () {
  $("#myInput").spinner({
    min: 0,
    max: 100,
    step: 3,
  });
  $("#apple").tabs({
    collapsible: true,
    event: "mouseover",
  });
  $("#apple").tabs().find(".ui-tabs-nav").sortable({
    axis: "x",
  });
  $("#myInput").tooltip({
    show: { effect: "slideDown" },
  });
  // $(document).tooltip();   //every document that have a title will have tooltip
});
