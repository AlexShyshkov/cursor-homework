"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");
    let buttons = document.getElementById("buttons");
    let icon = document.querySelectorAll(".buttons-panel__icon");
    let audio = document.querySelectorAll("audio");
    let tooltip;

    start.addEventListener("click", function(){
        start.style.display = "none";
        buttons.style.display = "block";
    });

    buttons.addEventListener("mouseover", function(event) {
        let target = event.target;

        let tooltipHtml = target.dataset.tooltip;
        if (!tooltipHtml) return;

        tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerHTML = tooltipHtml;
        document.body.append(tooltip);

        let position = target.getBoundingClientRect();

        let left = position.left + (target.offsetWidth - tooltip.offsetWidth) / 2;

        if(left < 0) {
            left = 0;
        }

        let top = position.top - tooltip.offsetHeight - 5;

        if(top < 0) {
            top = position.top + target.offsetHeight + 5;
        }

        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";
    });

    buttons.addEventListener("mouseout", function(e) {
        if(tooltip) {
            tooltip.remove();
            tooltip = null;
        }
    });

    function setAudioSettings(item) {
        item.currentTime = 0;
        item.preload = "auto";
        item.volume = 0.2;
        item.play();
    }

    for(let i = 0; i < icon.length; i++) {
        icon[i].addEventListener("click", function() {
            let key = this.id;
            setAudioSettings(audio[i]);            
        });
    }

    window.addEventListener("keypress", function(event) {
        let key = event.keyCode;
        for(let i = 0; i < icon.length; i++) {
            if(icon[i].id == key) {
                setAudioSettings(audio[i]);
            }
        }
    });
});