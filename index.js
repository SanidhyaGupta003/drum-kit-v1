for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // var audio = new Audio('sounds/crash.mp3');
    // audio.play();
    // console.log(this.innerHTML);
    // this.style.color = "teal";
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    animateButton(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //
    //   case "w":
    //   var crash = new Audio('sounds/crash.mp3');
    //   crash.play();
    //   break;
    //
    //   case "a":
    //   var kick = new Audio('sounds/kick-bass.mp3');
    //   kick.play();
    //   break;
    //
    //   case "s":
    //   var snare = new Audio('sounds/snare.mp3');
    //   snare.play();
    //   break;
    //
    //   case "d":
    //   var tom1 = new Audio('sounds/tom-1.mp3');
    //   tom1.play();
    //   break;
    //
    //   case "j":
    //   var tom2 = new Audio('sounds/tom-2.mp3');
    //   tom2.play();
    //   break;
    //
    //   case "k":
    //   var tom3 = new Audio('sounds/tom-3.mp3');
    //   tom3.play();
    //   break;
    //
    //   case "l":
    //   var tom4 = new Audio('sounds/tom-4.mp3');
    //   tom4.play();
    //   break;
    //
    //   default: console.log(buttonInnerHTML);

    // }
  });

}

document.addEventListener("keypress", function(event) {
  // alert("keypressed");
  // console.log(this);
  // console.log(event);
  playSound(event.key);
  animateButton(event.key);
})

function playSound(keyValue) {

  switch (keyValue) {

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function animateButton(keyValue){
  var activeButton = document.querySelector("."+keyValue);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
