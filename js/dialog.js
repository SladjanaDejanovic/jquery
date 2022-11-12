$(function () {
  $("#myDialog").dialog({
    autoOpen: false,
  });
  $("#open").click(function () {
    $("#myDialog").dialog("open");
  });
  $("button").button();
  $("#confirmation").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      "Go to previous page": function () {
        window.history.back();
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
  });
  $("#goToPreviousPage").click(function () {
    $("#confirmation").dialog("open");
  });
});
