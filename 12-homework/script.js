"use strict";

window.addEventListener("DOMContentLoaded", function(){
    const BASE = "https://swapi.dev/api/";

    let start = document.getElementById("start");
    let crawl = document.getElementById("sw");
    let infoPanel = document.getElementById("info");
    let hero = document.getElementById("hero");
    let planet = document.getElementById("planet");
    //let film = document.getElementById("film").value;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let currentPage = 1;

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

    function renderHeroList(actors) {
        let heroesList = document.querySelector(".characters-list");
        heroesList.innerHTML = "";

        actors.forEach(actor => {
            let heroesListItem = document.createElement("div");
            heroesListItem.className = ".hero-list__item";
            heroesListItem.innerHTML = `
                <div class="hero-image>
                    <img src="${actor.photo}">
                </div>
                <div class="hero-name">${actor.name}</div>
                <div class="hero-birth">${actor.birth_year}</div>
                <div class="hero-gender">${actor.gender}</div>
            `;
            heroesList.append(heroesListItem);
        });
    }

    function getInfo() {
        let filmId = document.getElementById("film").value;
        console.log(filmId);
        document.querySelector(".hero-info").style.display = "block";
        const chars = [];
    
        return axios.get(`${BASE}films/${filmId}/`)
                    .then(film => {
                            return film.data.characters;
                        })
                    .then(characters => {
                        characters.forEach(char => {
                            return axios.get('https' + char.substr(4,char.length))
                                        .then(char => {
                                            char.data.photo = `src/image/${parseInt((char.data.url).match(/\d+/))}.png`;
                                            chars.push(char.data);
                                            renderHeroList(chars);
                                        });
                                    });
                                });
    }

    function renderPlanetsList(planets) {
        let planetsList = document.querySelector(".planets-list");
        planetsList.innerHTML = "";

        planets.forEach(planet => {
            let planetsListItem = document.createElement("div");
            planetsListItem.className = ".planet-list__item";
            planetsListItem.innerHTML = `<h3 class="item-text">${planet.name}</h3>`;

            planetsList.append(planetsListItem);
        });
    }

    function getPlanets() {
        let config = {
            method: "GET",
            url: `${BASE}planets/`,
            params: {
                page: currentPage
            },
        };
        
        return axios(config)
                .then((response) =>{
                    return renderPlanetsList(response.data.results);
                })
                .catch(() => console.log("error in rendering of planets"));
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

    hero.addEventListener("click", getInfo);

    planet.addEventListener("click", getPlanets);

    next.addEventListener("click", () => {
        if(currentPage >= 6) {
            return;
        } else {
            getPlanets(++currentPage);
        }
    });

    prev.addEventListener("click", () => {
        if(currentPage <= 1) {
            return;
        } else {
            getPlanets(--currentPage);
        }
    });
});