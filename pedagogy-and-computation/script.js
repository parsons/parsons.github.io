
  var mq = window.matchMedia( "(min-width: 700px)" );


//set up variables
var h1content = ["Parsons","Communication","Design","Symposium:"];
var h2content = ["The","Pedagogy","of","Design","in","the","Age","of","Computation"];
var h3content = ["Panelists"];
var h3speaker1name = ["— Atıf","Akın"];
var h3speaker1 = ["Associate","Professor","in","Design,","Rutgers","University"];
var h3speaker2name = ["— Taeyoon","Choi"];
var h3speaker2 = ["Co-founder,","School","for","Poetic","Computation"];
var h3speaker3name = ["— Rik","Lomas"];
var h3speaker3 = ["Founder","and","CEO,","SuperHi"];
var h3speaker4name = ["— Mindy","Seu"];
var h3speaker4 = ["Fellow,","Berkman","Klein","Center","for","the","Internet","and","Society"];


var h3moderator = ["Moderated","by"];
var h3moderator1name = ["— Juliette","Cezzar"];
var h3moderator1 = ["Assistant","Professor","of","Communication","Design,","Parsons","School","of","Design"];


var h3studenttitle = ["Student","Presenters"];
var h3student1name = ["— Rijk","van Zanten"];
var h3student1 = ["MPS","Communication","Design"];
var h3student2name = ["— Jack","Rieger"];
var h3student2 = ["BFA","Communication","Design"];

var h4detailsdate1 = ["December","7,","2018,","1-5","PM"];
var h4detailsdate2 = ["Parsons","School","of","Design"];
var h4detailsdate3 = ["63","5th","Ave.,","Rm.","UL 102,","NYC"];

var h5content = ["Register"];

var arrowcontent = ["↵"];

var credit = ["Designed by Kate Leisy"];

var counter = 0;


//set up typing function

function typer() {
  
   

            // title

            if (counter <  4) {
              $(".title-content").append(h1content[counter] + " ");
            }

            if (counter >=  4 && counter < 13) {
              $("h2.subtitle").append($(".blinking-cursor"));
              $(".subtitle-content").append(h2content[counter-4] + " ");
            }

            //speakers 

            if (counter >=  13 && counter < 14) {
              
              $("h3.speaker-title").show().append($(".blinking-cursor"));
              $(".speaker-title-content").append(h3content[counter-13] + " ");
            } 
            
            //speaker 1 - atif akin


            if (counter >=  14 && counter < 16) {
              $("h3.speaker1-name").append($(".blinking-cursor"));
              $(".speaker-1-name").append(h3speaker1name[counter-14] + " ");
            }
            
            if (counter >=  16 && counter < 22) {
              $("h3.speaker1").show().append($(".blinking-cursor"));
              $(".speaker-1-content").append(h3speaker1[counter-16] + " ");
            }
            
            //speaker 2 - taeyoon choi

            if (counter >=  22 && counter < 24) {
              $("h3.speaker2-name").append($(".blinking-cursor"));
              $(".speaker-2-name").append(h3speaker2name[counter-22] + " ");
            }
            
            
            if (counter >=  24 && counter < 29) {
              $("h3.speaker2").show().append($(".blinking-cursor"));
              $(".speaker-2-content").append(h3speaker2[counter-24] + " ");
            }

            
            //speaker 3 - rik lomas

            
            if (counter >=  29 && counter < 31) {
              $("h3.speaker3-name").append($(".blinking-cursor"));
              $(".speaker-3-name").append(h3speaker3name[counter-29] + " ");
            }
            
            
              if (counter >=  31 && counter < 35) {
              $("h3.speaker3").show().append($(".blinking-cursor"));
              $(".speaker-3-content").append(h3speaker3[counter-31] + " ");
            }
            
            
            //speaker 3 - mindy seu


            if (counter >=  35 && counter < 37) {
              $("h3.speaker4-name").append($(".blinking-cursor"));
              $(".speaker-4-name").append(h3speaker4name[counter-35] + " ");      
            }

            if (counter >=  37 && counter < 46) {
              $("h3.speaker4").show().append($(".blinking-cursor"));
              $(".speaker-4-content").append(h3speaker4[counter-37] + " ");      
            }

            //moderator


            if (counter >= 46 && counter < 48) {
              $("h3.moderator").show().append($(".blinking-cursor"));
              $(".moderator-content").append(h3moderator[counter-46] + " ");
            }
            
            
            if (counter >= 48 && counter < 50) {
              $("h3.moderator1-name").append($(".blinking-cursor"));
              $(".moderator-1-name").append(h3moderator1name[counter-48] + " ");
            }

            if (counter >= 50 && counter < 56) {
              $("h3.moderator1").show().append($(".blinking-cursor"));
              $(".moderator-1-content").append(h3moderator1[counter-50] + " ");
            }

              //students


            if (counter >= 56 && counter < 58) {
              $("h3.student-title").show().append($(".blinking-cursor"));
              $(".student-title-content").append(h3studenttitle[counter-56] + " ");
            }
            
              //student 1 - rijk
            
            
            if (counter >= 58 && counter < 60) {
              $("h3.student1-name").append($(".blinking-cursor"));
              $(".student-1-name").append(h3student1name[counter-58] + " ");
            }


            if (counter >= 60 && counter < 63) {
              $("h3.student1").show().append($(".blinking-cursor"));
              $(".student-1-content").append(h3student1[counter-60] + " ");
            }
            
              //student 2 - jack


            if (counter >= 63 && counter < 65) {
              $("h3.student2-name").append($(".blinking-cursor"));
              $(".student-2-name").append(h3student2name[counter-63] + " ");
            }
            
            if (counter >= 65 && counter < 68) {
              $("h3.student2").show().append($(".blinking-cursor"));
              $(".student-2-content").append(h3student2[counter-65] + " ");
            }

              //details


            if (counter >= 68 && counter < 73) {
              $(".details").show();
              $("h4.details-date1").append($(".blinking-cursor"));
              $(".details-1-content").append(h4detailsdate1[counter-68] + " ");
            }

            if (counter >= 73 && counter < 77) {
              $("h4.details-date2").append($(".blinking-cursor"));
              $(".details-2-content").append(h4detailsdate2[counter-73] + " ");
            }

            if (counter >= 77 && counter < 83) {
              $("h4.details-date3").append($(".blinking-cursor"));
              $(".details-3-content").append(h4detailsdate3[counter-77] + " ");
            }

                //register button

            if (counter >= 83 && counter < 84) {
              $(".button").show().append($(".blinking-cursor"));
              $(".register-content").append(h5content[counter-83] + " ");
            }
            
            if (counter >= 84 && counter < 85) {
              $(".button").append($(".blinking-cursor"));
              $(".arrow-content").append(arrowcontent[counter-84] + " ");
            }
            
            if (counter >= 87 && counter < 88) {
              $(".credit").append(credit[counter-87] + " ");
            }
            

            counter++;  
            $(window).scrollTop(1000);
  
}


  
  if (mq.matches) {
          
      // begin p5.js for the changing color background effect

        var rectWidth;

        function setup() {
          createCanvas(windowWidth, windowHeight);
          noStroke();
          background(0);
          rectWidth = windowWidth;
        }

        function draw() { 
          // keep draw() here to continue looping while waiting for keys
        }


        function keyPressed() {
          var keyIndex = -1;
          if (key >= 'a' && key <= 'z') {
            keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
          }
          if (keyIndex == -1) {
            // If it's not a letter key, clear the screen
            background(0);
          } else if (counter >= 86) { 
            // It's a letter key, fill a rectangle
            
            var items = Array(0, 255);

            
            randFill_r = items[Math.floor(Math.random()*items.length)];
            randFill_g = items[Math.floor(Math.random()*items.length)];
            randFill_b = items[Math.floor(Math.random()*items.length)];
            fill(randFill_r,randFill_g,randFill_b);
            var x = map(keyIndex, 0, 25, 0, windowWidth - rectWidth);
            rect(x, 0, rectWidth, windowHeight);
            
            
            document.body.addEventListener("keydown", function (event) {
              if (event.keyCode === 13) {
              window.open("https://www.eventbrite.com/e/pedagogy-of-design-in-the-age-of-computation-tickets-52888340450");
                }
              });
          
          } 
        }



          // begin jquery for the typing text effect


    $(window).on('keypress', function(e) {
      //run typer function
      typer();
    });
  } else {
        setInterval(function(){ 
      typer();
    }, 120);
    
    $("h3").css("fontSize", "16px");
    $("h1").css("fontSize", "16px");
    $("h2").css("fontSize", "16px");
    $("h4").css("fontSize", "16px");
    $("h5").css("fontSize", "16px");
    $("h6").css("fontSize", "16px");
    $("p").css("fontSize", "16px");

  
  }
