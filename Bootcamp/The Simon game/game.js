const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
// const getButton = $("#" + randomChosenColor);

const playSound = function (color) {
  const audio = $(`#audio-${color}`)[0];
  audio.currentTime = 0;
  audio.play();
  console.log(audio);
};

const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  // const getButton = $("#" + randomChosenColor);
  // animationAndSound(getButton);
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
};

// const animationAndSound = function (btn) {
//   const originalColor = $(this).css("background-color");

//   // play sound
//   playSound(randomChosenColor);

//   // animate button
//   $(this)
//     .css({
//       "box-shadow": "0 0 20px 5px #346596",
//       "background-color": "#346596",
//     })
//     .fadeOut({
//       duration: 150,
//       easing: "linear",
//       done: function () {
//         $(this).css("background-color", originalColor);
//       },
//     })
//     .fadeIn({
//       duration: 150,
//       easing: "linear",
//       done: function () {
//         $(this).css("box-shadow", "none");
//       },
//     });
// };

// nextSequence();
