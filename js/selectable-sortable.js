// $(function () {
//   $("#list").selectable({
//     stop: function () {
//       $(".ui-selected").each(function () {
//         $("<p></p>").text($(this).text()).appendTo("#microsoft");
//       });
//     },
//   });
// });
$(function () {
  $("#list1").sortable({
    placeholder: "ui-state-highlight",
    cancel: ".notSortable",
  });
  $("#list2").sortable();
  $("#list1, #list2").sortable({
    connectWith: ".connectedList",
  });
});
