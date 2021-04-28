/*jslint browser: true*/
/*global $, jQuery, alert*/

//go to top of page on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 1);
}

// Let's use the 'active' variable to let us know when we're using it
let active = false;

// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller-compare').addEventListener('mousedown', function () {
    active = true;
    // Add our scrolling class so the scroller has full opacity while active
    document.querySelector('.scroller-compare').classList.add('scrolling-compare');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup', function () {
    active = false;
    document.querySelector('.scroller-compare').classList.remove('scrolling-compare');
});
document.body.addEventListener('mouseleave', function () {
    active = false;
    document.querySelector('.scroller-compare').classList.remove('scrolling-compare');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    // Their mouse is here...
    let x = e.pageX;
    // but we want it relative to our wrapper
    x -= document.querySelector('.wrapper-compare').getBoundingClientRect().left;
    // Okay let's change our state
    scrollIt(x);
});

// Let's use this function
function scrollIt(x) {
    let transform = Math.max(0, (Math.min(x, document.querySelector('.wrapper-compare').offsetWidth)));
    document.querySelector('.after-compare').style.width = transform + "px";
    document.querySelector('.scroller-compare').style.left = transform - 25 + "px";
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
scrollIt(400);

// And finally let's repeat the process for touch events
// first our middle scroller...
document.querySelector('.scroller-compare').addEventListener('touchstart', function () {
    active = true;
    document.querySelector('.scroller-compare').classList.add('scrolling-compare');
});
document.body.addEventListener('touchend', function () {
    active = false;
    document.querySelector('.scroller-compare').classList.remove('scrolling-compare');
});
document.body.addEventListener('touchcancel', function () {
    active = false;
    document.querySelector('.scroller-compare').classList.remove('scrolling-compare');
});

//Navbar collapse

$(function () {
    "use strict";
    // navbar-collapse.in -----
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    $('.carousel').carousel({
        interval: false
    })
});

//Enable tool tips
$(function () {
    "use strict";
    $('[data-toggle="tooltip"]').tooltip();
});

//Show the tooltip for the compare window
$('#tooltip-compare').tooltip('show');


//Years of experience
var year = (new Date().getFullYear()) - 2012;
document.getElementById("yearsOfExperience").innerHTML = year;

//Copyright year
var copyrightYear = new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = copyrightYear;

//Wavey divider
const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
    wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
    wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
    wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

if ($(window).width() > 960) {

    var badgeDesign = anime({
        targets: '.badge',
        translateY: 40,
        opacity: 1,
        duration: 300,
        loop: false,
        direction: 'alternate',
        delay: anime.stagger(30),
        autoplay: false
    });
    anime({
        targets: '#lottieLogo',
        translateY: -200,
        scale: 0.5,
        duration: 2000,
        delay: 2000,
        easing: 'easeInOutExpo'
    });
    anime({
        targets: '.staggered-intro',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(300, {
            start: 2800
        }) // increase delay by 100ms for each elements.
    });
    anime({
        targets: '#animate-jump',
        translateY: [0, -30],
        duration: 500,
        autoplay: true,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine'
    });

    var fired = false;
    //Change class based on scroll
    $(function () {
        //caches a jQuery object containing the header element
        var heading = $("#intro-heading h1");
        var heading2 = $("#intro-heading h2");
        var scrollPrompt = $("#scroll-prompt-1");

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll == 0) {
                scrollPrompt.removeClass('animate__fadeOutDown');
                scrollPrompt.addClass('animate__fadeInUp');
                $("#intro-heading h2.doStuff").removeClass('re-define').html("<span style='color: #FF5252'>Designer.</span><span style='color: rgb(4, 105, 192)'>&nbsp;Coder.</span><span style='color: rgb(70, 149, 234)'>&nbsp;Motion Artist.</span>");
                $("#to-top").css("right", "-60px");
                if (fired === true) {
                    badgeDesign.reverse();
                    badgeDesign.play();
                    fired = false;
                }

            } else if (scroll > 0 && scroll <= 400) {
                scrollPrompt.addClass('animate__fadeOutDown').removeClass('animate__delay-3s animate__fadeInUp');
                $("#intro-heading h2.doStuff").removeClass('re-define').html("<span style='color: #FF5252'>Designer.</span><span style='color: rgb(4, 105, 192)'>&nbsp;Coder.</span><span style='color: rgb(70, 149, 234)'>&nbsp;Motion Artist.</span>");
                $("#to-top").css("right", "-60px");
                $("nav.navbar").css({
                    "box-shadow": "none",
                    "-webkit-box-shadow": "none"
                });
                if (fired === false) {
                    badgeDesign.play();
                    fired = true;
                }

            } else if (scroll > 400) {
                $("#intro-heading h2.doStuff").html("Re-defining your digital brand").css({
                    'color': '#FF5252',
                    'background-color': 'transparent '
                }).addClass('re-define');
                $("#to-top").css("right", "0");
                $("nav.navbar").css({
                    "box-shadow": "0px 2px 3px 1px rgba(0,0,0,0.1)",
                    "-webkit-box-shadow": "0px 2px 3px 1px rgba(0,0,0,0.1)"
                });
            }

            function valBetween(v, min, max) {
                return (Math.min(max, Math.max(min, v)));
            }
            $(window).scroll(function (e) {
                var distanceScrolled = valBetween($(this).scrollTop(), 700, 1100);
                $('#lottieLogo').css({
                    'top': '' + 50 - (distanceScrolled - 700) + 'px'
                });
            });
        });
    });
    //disable scrolling for 3 seconds
        if ($(window).scrollTop() == 0) {
        document.body.style.overflow = 'hidden';
        setTimeout(function () {
            document.body.style.overflow = 'auto';
        }, 3000);
    }
}

anime({
    targets: ['.wave-top > path', '.wave-bottom > path'],
    easing: 'linear',
    duration: 7500,
    loop: true,
    d: [
        {
            value: [wave1, wave2]
        },
        {
            value: wave3
        },
        {
            value: wave4
        },
        {
            value: wave1
        },
  ],
});







//SPA

"use strict";

let quiz = {
    questions: [
        {
            text: "How would you feel about me working remotely?",
            answers: [
                {
                    text: "I prefer to have all employees in the office Monday to Friday",
                    value: -40
        },
                {
                    text: "I'm happy to provide flexible/part-time arrangements",
                    value: 0
        },
                {
                    text: "I'm fine with it as long as the work is done",
                    value: 20
        }
      ]
    },
        {
            text: "Is your office pet-friendly?",
            answers: [
                {
                    text: "Yes",
                    value: 20
        },
                {
                    text: "No",
                    value: 0
        },
                {
                    text: "Unsure",
                    value: 0
        }
      ]
    },
        {
            text: "Does your office have onsite parking?",
            answers: [
                {
                    text: "Yes",
                    value: 20
        },
                {
                    text: "No",
                    value: -20
        },
                {
                    text: "Unsure",
                    value: 0
        }
      ]
    },
        {
            text: "Describe your ideal designer.",
            answers: [
                {
                    text: "Extroverted, unwavering, confident about their designs, adamant about their creative vision",
                    value: -60
        },
                {
                    text: "Adaptable, willing to compromise sometimes, has a rational approach to design",
                    value: 20
        },
                {
                    text: "Always happy to compromise, willing to stay back regularly",
                    value: -40
        }
      ]
    },
        {
            text: "Which profile best describes your team?",
            answers: [
                {
                    text: "A start-up that embraces new ideas and isn't afraid of change.",
                    value: 20
        },
                {
                    text: "Everybody likes to provide feedback/changes on creative as they're highly passionate about the brand.",
                    value: -60
        },
                {
                    text: "Everybody is happy to focus on their own roles. They do their work well and they generally finish work on time.",
                    value: 20
        }
      ]
    },
        {
            text: "Which statement do you agree with more?",
            answers: [
                {
                    text: "UI design and UX research are two very different areas. The former involves layout/visual design and the latter involves building personas, heavy research and testing.",
                    value: +20
        },
                {
                    text: "UI and UX are the same thing. The role can be done by one person.",
                    value: -40
        },
                {
                    text: "I'm just looking for a print/email designer",
                    value: -20
        }
      ]
    },
        {
            text: "Which mediums do you require work on the most?",
            answers: [
                {
                    text: "Mainly Android/iOS app design",
                    value: -60
        },
                {
                    text: "Website, motion graphic and email design. Maybe a bit of print design.",
                    value: 40
        },
                {
                    text: "Mainly print design with a bit of digital work.",
                    value: -40
        }
      ]
    }
  ]
};

var app = new Vue({
    el: "#app",
    data: {
        quiz: quiz,
        questionIndex: 0,
        responses: []
    },

    methods: {
        prev: function () {
            this.responses.pop();
            this.questionIndex--;
        },

        next2: function (answer) {
            this.responses.push(answer);
            this.questionIndex++;
        },

        score: function () {
            let arr = this.responses;
            if (arr.length > 0) {
                let sum = arr.reduce((acc, val) => {
                    return acc + val;
                });
                return sum;
            }
        },

        playAgain: function () {
            this.questionIndex = 0;
            this.responses = [];
        }
    }
});
