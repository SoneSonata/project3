import { cueTimer } from './modules/cuepoints.js';

document.addEventListener("DOMContentLoaded", init);
var myCues;
function init(){ 
    const pod = document.querySelector("#pod");

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
    document.querySelector("#wind").src = "i/bread.jpg";
}

function func2 () {
    const title = document.querySelector("#title");
    title.classList.add("shine");
    document.querySelector("#wind").src = "i/Sos1.png";
    
}

function func2r () {
    title.classList.remove("shine");
    title.classList.remove("roll");
}

function func3 () {
    document.body.style= "background-image: linear-gradient(to right, white,grey,black);"
}

function func4 () {
    document.querySelector("#wind").src = "i/line.jpg";
}

function func5 () {
    document.body.style= "background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);"
}

function func6 () {
    pod.volume = 1;
}

function func7 () {
    document.querySelector("#wind").src = "i/subguess.jpg";
}

function func8 () {
    document.querySelector("#wind").src = "i/notsub.jpg";
}

function func9 () {
    document.querySelector("#wind").src = "i/lax.jpg";
}

function func10 () {
    document.querySelector("#wind").src = "https://en.wikipedia.org/wiki/Aviation/LAX_station";
}

function func11 () {
    document.querySelector("#wind").src = "i/jj.jpg";
}

function func12 () {
    document.querySelector("#wind").src = "i/subsub.jpg";
}

function func13 () {
    let pop = document.querySelector(".pop");
    pop.innerHTML = "<p>Yeah,it's called Google!</p>";
    pop.classList.toggle("hide");
    setTimeout(() => {
        document.querySelector(".pop").classList.toggle("hide");
    }, 2000);
    document.querySelector("#wind").src = "https://www.google.com/";
}

function func14 () {
    document.querySelector("#wind").src = "i/birth.jpg";
}

function func15 () {
    document.querySelector("#wind").src = "i/yessub.jpg";
}