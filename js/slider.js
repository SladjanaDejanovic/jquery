$(function () {
  $("#slider").slider({
    slide: function (event, ui) {
      $("#sliderValue").val(ui.value);
    },
    min: 0,
    max: 25,
  });
  $("#sliderValue").val(0);

  $("#rangeSlider").slider({
    range: true,
    min: 0,
    max: 100000,
    values: [0, 10000],
    step: 1000, //za koliko da se povecava vrednost kada se pomera slajder, nec biti za 1 nego za 1000
    slide: function (event, ui) {
      $("#mileageRange").val(
        ui.values[0] + " miles - " + ui.values[1] + " miles"
      );
    },
  });
});
