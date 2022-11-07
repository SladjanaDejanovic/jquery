$(function () {
  $("#list").selectable({
    stop: function () {
      $(".ui-selected").each(function () {
        $("<p></p>").text($(this).text()).appendTo("#microsoft");
      });
    },
  });
});
