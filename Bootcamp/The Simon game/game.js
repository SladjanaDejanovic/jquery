const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const playSound = function (color) {
  const audio = $(`#audio-${color}`)[0];
  audio.currentTime = 0;
  audio.play();
  console.log(audio);
};

const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  const getButton = $("#" + randomChosenColor);

  getButton.click(function () {
    const originalColor = $(this).css("background-color");
    // const originalOpacity = $(this).css("opacity");

    playSound(randomChosenColor);

    // animate button
    $(this)
      .css({
        "box-shadow": "0 0 20px 5px #346596",
        "background-color": "#346596",
      })
      .fadeOut({
        duration: 150,
        easing: "linear",
        done: function () {
          $(this).css("background-color", originalColor);
        },
      })
      .fadeIn({
        duration: 150,
        easing: "linear",
        done: function () {
          $(this).css("box-shadow", "none");
        },
      });
  });
};
nextSequence();
