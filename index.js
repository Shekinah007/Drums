function toggleAnimation(id, audioSrc) {
  const button = new Audio(audioSrc);
  button.play();
  let activeButton = document.getElementById(id);
  activeButton.classList.toggle("clicked");
  setTimeout(() => {
    activeButton.classList.toggle("clicked");
  }, 100);
}

window.addEventListener("keydown", (e) => {
  if (e.key === "a" || e.key === "A") {
    toggleAnimation("a", "./sounds/01 - JavaScript Drum Kit_sounds_boom.wav");
  } else if (e.key === "s" || e.key === "S") {
    toggleAnimation("s", "./sounds/01 - JavaScript Drum Kit_sounds_clap.wav");
  } else if (e.key === "d" || e.key === "D") {
    toggleAnimation("d", "./sounds/01 - JavaScript Drum Kit_sounds_hihat.wav");
  } else if (e.key === "f" || e.key === "F") {
    toggleAnimation(
      "f",
      "./sounds/01 - JavaScript Drum Kit_sounds_openhat.wav"
    );
  } else if (e.key === "g" || e.key === "G") {
    toggleAnimation("g", "./sounds/01 - JavaScript Drum Kit_sounds_ride.wav");
  } else if (e.key === "h" || e.key === "H") {
    toggleAnimation("h", "./sounds/01 - JavaScript Drum Kit_sounds_snare.wav");
  } else if (e.key === "j" || e.key === "J") {
    toggleAnimation("j", "./sounds/01 - JavaScript Drum Kit_sounds_tink.wav");
  } else if (e.key === "k" || e.key === "K") {
    toggleAnimation("k", "./sounds/01 - JavaScript Drum Kit_sounds_tom.wav");
  }
});

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.id === "a") {
      toggleAnimation("a", "./sounds/01 - JavaScript Drum Kit_sounds_boom.wav");
    } else if (button.id === "s") {
      toggleAnimation("s", "./sounds/01 - JavaScript Drum Kit_sounds_clap.wav");
    } else if (button.id === "d") {
      toggleAnimation(
        "d",
        "./sounds/01 - JavaScript Drum Kit_sounds_hihat.wav"
      );
    } else if (button.id === "f") {
      toggleAnimation(
        "f",
        "./sounds/01 - JavaScript Drum Kit_sounds_openhat.wav"
      );
    } else if (button.id === "g") {
      toggleAnimation("g", "./sounds/01 - JavaScript Drum Kit_sounds_ride.wav");
    } else if (button.id === "h") {
      toggleAnimation(
        "h",
        "./sounds/01 - JavaScript Drum Kit_sounds_snare.wav"
      );
    } else if (button.id === "j") {
      toggleAnimation("j", "./sounds/01 - JavaScript Drum Kit_sounds_tink.wav");
    } else if (button.id === "k") {
      toggleAnimation("k", "./sounds/01 - JavaScript Drum Kit_sounds_tom.wav");
    }
  });
});
