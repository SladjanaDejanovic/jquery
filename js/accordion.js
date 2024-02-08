$(function () {
  $("#facebook").accordion({
    collapsible: true,
    icons: {
      header: "ui-icon-circle-arrow-e",
      activeHeader: "ui-icon-circle-arrow-s", //from jQuery ui themes
    },
    heightStyle: "contain", //bez ovoga ce svaki section imati visinu najveceg, koliko kontenta ima tolika ce mu biti visina, a ako drugi imaju manje kontenta izgledace cudno
  });
  $("#resizer").resizable({
    resize: function () {
      $("#facebook").accordion("refresh");
    },
  });
});
