let slider1 = document.getElementById("myRange1");
let slider2 = document.getElementById("myRange2");
let slider3 = document.getElementById("myRange3");
let slider4 = document.getElementById("myRange4");
let slider5 = document.getElementById("myRange5");
let slider6 = document.getElementById("myRange6");
let slider7 = document.getElementById("myRange7");

let fonts = ["times", "helvetica", "futura", "optima", "didot", "charter"];
let background = ["#FFCCCC", "#FECCFF", "#ffffff", "#CCEFFF", "#CCCEFF"];
let colors = ["#9179B0", "#0013D1", "#000000", "#007A0D", "#7A4600"];
let bg_field = ["#F8FF7A", "#7AFFF8", "#ffffff", "#FC7AFF", "#FFC47A"];



// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  var index = this.value;
  var bg_color = background[index];
  let wrapper = $(".wrapper");
  wrapper.css("background", "linear-gradient(#ffffff, " + bg_color + ")");
  allzero();
}

slider2.oninput = function() {
  var index = this.value;
  var new_font = fonts[index];
  let wrapper = $(".title");
  wrapper.css("font-family", new_font);
  allzero();
  }

slider3.oninput = function() {
  var index = this.value;
  var font_color = colors[index];
  let wrapper = $(".title");
  wrapper.css("color", font_color);
  allzero();
}

slider4.oninput = function() {  
  var index = this.value;
  let wrapper = $(".title");
  if (index == 0) {
  wrapper.css("font-weight", "bold");
  wrapper.css("font-style", "normal");

  } else if (index == 1) {
  wrapper.css("font-weight", "normal");
  wrapper.css("font-style", "italic");
  } else {
    wrapper.css("font-weight", "normal");
    wrapper.css("font-style", "normal");
  };
  allzero();
}

slider5.oninput = function() {
  var s = this.value;
  let wrapper = $(".wrapper");
  wrapper.css("box-shadow", s + "px " + s + "px 100px #000");
  wrapper.css("-webkit-box-shadow", s + "px " + s + "px 100px #000");
  wrapper.css("-moz-box-shadow", s + "px " + s + "px 100px #000");
}

slider6.oninput = function() {
  var index = this.value;
  let wrapper = $(".title");
  if (index == 0) {
  wrapper.css("text-decoration", "line-through");
  } else if (index == 1) {
  wrapper.css("text-decoration", "initial");
  } else if (index == 2) {
    wrapper.css("text-decoration", "underline");
  }
  allzero();
}

slider7.oninput = function() {
  var index = this.value;
  var bg = bg_field[index];
  let body = $("body");
  body.css("background", bg);
  allzero();
}


function allzero() {
  if (slider1.value == 0 && slider2.value == 0 && slider3.value == 0 && slider4.value == 0 && slider6.value == 0 && slider7.value == 0) {
    alert("In an increasingly homogenized interaction design landscape, how can we continue to craft unique digital experiences? As designers, how do we retain agency and ownership over a process which has become progressively atomized? The past several years has seen the rise of design systems and frameworks along with toolchains and build processes which have dramatically expanded the complexities of designing and developing for screen. Design and engineering roles have splintered and specialized, with large teams becoming the norm for producing digital artifacts at any scale. The net result has been a profusion of predictability — a continual rehashing of user experience tropes and patterns which define the visual form of most projects. In this symposium, we attempt to unpack ways in which designers have been able to sustain their engagement with the materiality of screens, and speculate on how we might maintain agency in a discipline which continues to stratify.");
  }
}