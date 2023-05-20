// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Welcome to my personal portfolio.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("My name is minh.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at seattle university.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm studying computer science and game design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm also interested in user interface design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I love spending time with friends online.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I also like to play volleyball and going on hikes.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}