"use strict";

window.addEventListener("DOMContentLoaded", function() {
    function getRandomColor() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }
    
    function generateBlocks() {
        let container = document.createElement('div');
        container.classList.add('container');
        document.body.prepend(container);

        for (let i = 0; i < 25; i++) {
            let block = document.createElement('div');
            block.classList.add('block');
            setInterval(() => {
                block.style.backgroundColor = getRandomColor();
            }, 1000);
            
            container.appendChild(block);
        }
    }

    generateBlocks();

    /*let soundtrack = document.getElementById('soundtrack');

    function playSoundtrack()
    {
        soundtrack.play();
        soundtrack.volume = 0.4;
        soundtrack.loop = false;
    }

    setTimeout(playSoundtrack,1000);*/
});