particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":77, "density": {
                "enable": false, "value_area": 7000
            }
        }
        , "color": {
            "value": ["#ff5252","#2196F3","#C50E29","#0169C0"]
        }
        , "shape": {
            "type":["circle","image"], "stroke": {
                "width": 0, "color": "#2196F3"
            },
              "image": {
                "src": "img/arc.svg",
                "width": 500,
                "height": 500
              }
        }
        , "opacity": {
            "value":1, "random":false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }
        , "size": {
            "value":3, "random":true, "anim": {
                "enable": false, "speed": 40, "size_min": 3, "sync": true
            }
        }
        , "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":1, "direction":"top", "random":true, "straight":false, "out_mode":"out", "bounce":true, "attract": {
                "enable": false, "rotateX": 0, "rotateY": 0
            }
        }
    }
    , "interactivity": {
        "detect_on":"canvas", "events": {
            "onhover": {
                "enable": false, "mode": "bubble"
            }
            , "onclick": {
                "enable": false, "mode": "push"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":400, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }
            , "repulse": {
                "distance": 200, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}

);
