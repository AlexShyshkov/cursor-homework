"use strict";

window.addEventListener("DOMContentLoaded", function() {
    function getRandomColour() {
        
    }
    
    function generateBlocks() {
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.prepend(container);

        for (let i = 0; i < 25; i++) {
            let block = document.createElement('div');
            block.classList.add('block');
            container.appendChild(block);
        }
    }
    
    generateBlocks();
});