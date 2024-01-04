const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const nextSequence = function () {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  const getButton = $("#" + randomChosenColor);

  getButton.click(function () {
    const originalColor = $(this).css("background-color");
    const originalOpacity = $(this).css("opacity");

    //version 1
    // Add a flash effect on button click
    // $(this).animate(
    //   {
    //     backgroundColor: "white", // Change background color to white
    //     opacity: 0.3,
    //   },
    //   500,
    //   function () {
    //     // Complete the animation and restore the original color and opacity
    //     $(this).animate(
    //       {
    //         backgroundColor: originalColor,
    //         opacity: originalOpacity,
    //       },
    //       500
    //     );
    //   }
    // );

    // version 2
    // $(this)
    //   .css({
    //     "box-shadow": "0 0 10px 5px white", // Add a white glow
    //     "background-color": "white", // Change background color to white
    //     opacity: "0.7",
    //   })
    //   .fadeOut(150, function () {
    //     $(this);
    //     // Complete the animation and restore the original color and remove the box-shadow
    //     $(this).fadeIn(150).css({
    //       "box-shadow": "none",
    //       "background-color": originalColor,
    //       opacity: originalOpacity,
    //     });
    //   });

    //version 3
    // $(this)
    //   .css({
    //     "box-shadow": "0 0 20px 5px white", // Add a white glow
    //     // "background-color": "white", // Change background color to white
    //   })
    //   .animate(
    //     {
    //       opacity: 0.3,
    //     },
    //     {
    //       duration: 600,
    //       easing: "linear",
    //       complete: function () {
    //         // Complete the animation and restore the original color and remove the box-shadow
    //         $(this).animate(
    //           {
    //             opacity: 1,
    //           },
    //           {
    //             duration: 600,
    //             easing: "linear",
    //             complete: function () {
    //               $(this).css({
    //                 "box-shadow": "none",
    //                 // "background-color": originalColor,
    //               });
    //             },
    //           }
    //         );
    //       },
    //     }
    //   );

    //version 4
    $(this)
      .css({
        "box-shadow": "0 0 20px 5px #346596", // Add a white glow
        "background-color": "#346596", // Change background color to white
      })
      .fadeOut({
        duration: 150,
        easing: "linear",
        done: function () {
          // Restore the original color before fadeIn
          $(this).css("background-color", originalColor);
        },
      })
      .fadeIn({
        duration: 150,
        easing: "linear",
        done: function () {
          // Remove the box-shadow after fadeIn is complete
          $(this).css("box-shadow", "none");
        },
      });
  });

  // return randomNumber;
};
nextSequence();
