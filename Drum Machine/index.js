var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var innerHtmlDocument = this.innerHTML;

    makeSound(innerHtmlDocument);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1Sound = new Audio("./sounds/tom-1.mp3");
      tom1Sound.play();
      break;

    case "a":
      var tom2Sound = new Audio("./sounds/tom-2.mp3");
      tom2Sound.play();
      break;

    case "s":
      var tom3Sound = new Audio("./sounds/tom-3.mp3");
      tom3Sound.play();
      break;

    case "d":
      var tom4Sound = new Audio("./sounds/tom-4.mp3");
      tom4Sound.play();
      break;

    case "j":
      var snareSound = new Audio("./sounds/snare.mp3");
      snareSound.play();
      break;

    case "k":
      var crashSound = new Audio("./sounds/crash.mp3");
      crashSound.play();
      break;

    case "l":
      var kickSound = new Audio("./sounds/kick-bass.mp3");
      kickSound.play();
      break;


    default:
      console.log(key);
  }
}
