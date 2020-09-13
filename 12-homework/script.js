"use strict";

window.addEventListener("DOMContentLoaded", function(){
    const BASE = "https://swapi.dev/api/";

    let start = document.getElementById("start");
    let crawl = document.getElementById("sw");
    let infoPanel = document.getElementById("info");
    let hero = document.getElementById("hero");
    let planet = document.getElementById("planet");
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

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
       // crawl.style.display = "flex";
        playSound("main.mp3");

        setTimeout(() => {
            infoPanel.style.display = "flex";
        }, 40000);
    }

    function renderPlanetsList(planets) {
        let planetsList = document.querySelector(".planets");
        planetsList.innerHTML = "";

        planets.forEach(planet => {
            let planetsListItem = document.createElement("div");
            planetsListItem.className = ".planet-list__item";
            planetsListItem.innerHTML = `<p>${planet.name}</p>`;

            planetsList.append(planetsListItem);
        });
    }

    function getPlanets() {
        let config = {
            method: "GET",
            url: `${BASE}planets/`,
            params: {
                page: page
            },
        };

        return axios(config)
                .then((response) => {
                    return renderPlanetsList(response.data.result);
                })
                .catch(error => console.log("Error in planet rendering"));
    }

    start.addEventListener("click", initApp);
    hero.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
    planet.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
    prev.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });
    next.addEventListener("mouseover", () => {
        playSound("sword.mp3");
    });

    planet.addEventListener("click", getPlanets);
});