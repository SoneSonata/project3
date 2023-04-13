import { cueTimer } from './modules/cuepoints.js';

document.addEventListener("DOMContentLoaded", init);
var myCues;
function init(){ 
    const pod = document.querySelector("#pod");
    const controls = document.querySelector('#controls');
    controls.classList.remove("hide");

    myCues = [
        { seconds: 5, callback: func1 },
        { seconds: 25, callback: roll },
        { seconds: 36, callback: func2 },
        { seconds: 42, callback: func2r },
        { seconds: 83, callback: func3 },
        { seconds: 86, callback: func4 },
        { seconds: 98, callback: func5 },
        { seconds: 101, callback: func2 },
        { seconds: 109, callback: func2r },
        { seconds: 112, callback: func6},
        { seconds: 125, callback: func7},
        { seconds:127, callback: func8},
        { seconds:130, callback: func9},
        {seconds:135, callback: func10},
        {seconds:147, callback: func11},
        {seconds:195, callback: func3},
        {seconds:196, callback: func2},
        {seconds:206, callback: func5},
        {seconds:233, callback: func12},
        {seconds:250, callback: func13},
        {seconds:252, callback: func13r},
        {seconds:275, callback: func14},
        {seconds:303, callback: func7},
        {seconds:305, callback: func15},
    ];

    cueTimer.setup('pod', myCues);

    document.getElementById("rev1").addEventListener("click", (e) => {
        seekVideo(pod,78);
    });
    document.getElementById("rev2").addEventListener("click", (e) => {
        seekVideo(pod,187);
    });


}

function func1() {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Excuse the rambling, it can be entertaining though</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function roll() {
    const title = document.querySelector("#title");
    title.classList.add("roll");
    document.querySelector("#wind").src = "imagepage.html?i=bread.jpg";
}

function func2 () {
    const title = document.querySelector("#title");
    title.classList.add("shine");
    document.querySelector("#wind").src = "imagepage.html?i=Sos1.png";
    
}

function func2r () {
    title.classList.remove("shine");
    title.classList.remove("roll");
}

function func3 () {
    document.body.style= "background-image: linear-gradient(to right, white,grey,black);"
}

function func4 () {
    document.querySelector("#wind").src = "imagepage.html?i=line.jpg";
}

function func5 () {
    document.body.style= "background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);"
}

function func6 () {
    pod.volume = 1;
}

function func7 () {
    document.querySelector("#wind").src = "imagepage.html?i=subguess.jpg";
}

function func8 () {
    document.querySelector("#wind").src = "imagepage.html?i=notsub.jpg";
}

function func9 () {
    document.querySelector("#wind").src = "imagepage.html?i=lax.jpg";
}

function func10 () {
    document.querySelector("#wind").src = "https://en.wikipedia.org/wiki/Aviation/LAX_station";
}

function func11 () {
    document.querySelector("#wind").src = "imagepage.html?i=jj.jpg";
}

function func12 () {
    document.querySelector("#wind").src = "imagepage.html?i=subsub.jpg";
}

function func13 () {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Yeah,it's called Google!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
}

function func13r () {
    window.open("https://www.google.com/search?q=when+does+the+next+train+leave&rlz=1C1UEAD_enUS989US990&oq=when+does+&aqs=chrome.0.69i59j69i57j0i131i433i650j0i457i512j0i402i512j0i131i433i650j0i512j0i433i512j0i512l2.2246j0j7&sourceid=chrome&ie=UTF-8");
}

function func14 () {
    document.querySelector("#wind").src = "imagepage.html?i=birth.jpg";
}

function func15 () {
    document.querySelector("#wind").src = "imagepage.html?i=yessub.jpg";
}