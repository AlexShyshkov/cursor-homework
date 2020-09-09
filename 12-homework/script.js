"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");
    let crawl = document.getElementById("sw");
    let infoPanel = document.getElementById("info");
    let hero = document.getElementById("hero");
    let planet = document.getElementById("planet");

    function playSound(path){
        let sound = document.createElement("audio");
        sound.currentTime = 0;
        sound.volume = 0.3;
        sound.src = `src/sound/${path}`;
        sound.play();
        setTimeout(() => {
            sound.pause();
        }, 60000);
    }

    function initApp(){
        start.style.display = "none";
        crawl.style.display = "flex";
        playSound("main.mp3");

        setTimeout(() => {
            infoPanel.style.display = "flex";
        }, 40000);
    }

    start.addEventListener("click", initApp);
    hero.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
    planet.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
});