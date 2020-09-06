"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");

    function playSwordSound(){
        let sword = document.createElement("audio");
        sword.src = "src/sound/sword.mp3";
        sword.currentTime = 0;
        sword.volume = 0.3;
        sword.play();
    }



    start.addEventListener("mouseover", playSwordSound);
    
});