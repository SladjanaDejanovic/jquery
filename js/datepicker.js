$(function () {
  $("#departure").datepicker({
    showAnim: "slideDown",
    changeYear: true,
    numberOfMonths: 2,
    dateFormat: "d M, yy",
    showOn: "button",
    buttonImage: "img/calendar-image1.png",
    buttonImageOnly: true,
    buttonText: "Choose your departure date.",
    minDate: +1,
    maxDate: "+12M +10D",
    onClose: function (selectedDate) {
      $("#return").datepicker("option", "minDate", selectedDate);
    },
  });
  $("#return").datepicker({
    dateFormat: "d M, yy",
  });
});
