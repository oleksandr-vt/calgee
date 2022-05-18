// Custom Scripts
// Pop-up
var outButton = document.querySelector('.click'),
    pop = document.getElementById('click_button');
var main = document.getElementById("window");
var shadow = document.querySelector("body");
var hide = document.getElementById("close");

function simulator_FB() {
    "use strict"
    main.style.display = "block";
    // main.style.overflowY = "scroll";
    shadow.classList.add('locked');
    // shadow.style.backgroundColor = "rgba(0, 0, 0, 0.38)"
}

function simulator_FB_close() {
    "use strict"
    main.style.display = "none";
    shadow.classList.remove('locked');
}

