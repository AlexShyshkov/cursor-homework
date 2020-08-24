"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");
    let buttons = document.getElementById("buttons");
    
    start.addEventListener("click", function(){
        start.style.display = "none";
        buttons.style.display = "block";
    });
});