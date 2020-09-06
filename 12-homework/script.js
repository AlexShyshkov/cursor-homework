"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");
    let crawl = document.getElementById("sw");

    function playSound(path){
        let sound = document.createElement("audio");
        sound.currentTime = 0;
        sound.volume = 0.3;
        sound.src = `src/sound/${path}`;
        sound.play();
    }

    function initApp(){
        start.style.display = "none";
        crawl.style.display = "flex";
        playSound("main.mp3");
    }

    start.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
    start.addEventListener("click", initApp);
});