"use strict";

window.addEventListener("DOMContentLoaded", function(){
    let start = document.getElementById("start");
    let buttons = document.getElementById("buttons");
    let tooltip;
    
    start.addEventListener("click", function(){
        start.style.display = "none";
        buttons.style.display = "block";
    });

    document.addEventListener("mouseover", function(event) {
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

    document.addEventListener("mouseout", function(e) {
        if(tooltip) {
            tooltip.remove();
            tooltip = null;
        }
    });
});