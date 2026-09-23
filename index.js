const planetWrapper = document.getElementById("planetWrapper");
const arrangeFromDistance = document.getElementById("arrangeFromDistance");
const arrangeFromSize = document.getElementById("arrangeFromSize");

function createPlanet(planetObject){
    const planet = document.createElement("div");
    const planetSize = planetObject.diameterKm;

    const funFact = document.createElement("p");
    funFact.innerText = planetObject.funFact;
    funFact.style.width = "80%";
    funFact.style.marginLeft = "10%";

    planet.style.width = "150px";
    planet.style.height = "150px";
    planet.style.backgroundColor = planetObject.color;
    planet.style.borderRadius = "50%";

    planet.style.display = "flex";
    planet.style.alignItems = "center";

    planet.addEventListener("click", ()=>{
        (planet.contains(funFact)) ? planet.removeChild(funFact) : planet.appendChild(funFact);
    })
    return planet;
}

function createPlanetCard(planetObject){
    const planetCard = document.createElement("div");
    planetCard.style.border = "2px solid black";
    planetCard.style.borderRadius = "8px";
    planetCard.style.marginTop="4px";
    planetCard.style.display = "flex";

    const planet = createPlanet(planetObject);
    planetCard.appendChild(planet);

    const planetInfo = document.createElement("div");
    planetInfo.style.marginLeft = "24px";
    planetCard.appendChild(planetInfo);

    const planetHeader = document.createElement("h2");
    planetHeader.innerText = planetObject.name;

    const planetParagraph = document.createElement("p");
    planetParagraph.innerText = "Order from the Sun: " + planetObject.order + "\nDiameter (km): " + planetObject.diameterKm + " km";

    const deletePlanet = document.createElement("button");
    deletePlanet.innerText = "Delete";

    deletePlanet.addEventListener("click", ()=>{
        const planetIndex = planets.indexOf(planetObject);
        if (planetIndex != -1){
            planets.splice(planetIndex, 1);
            planetWrapper.removeChild(planetCard);
        }
    })

    planetInfo.appendChild(planetHeader);
    planetInfo.appendChild(planetParagraph);
    planetInfo.appendChild(deletePlanet);

    planetWrapper.appendChild(planetCard);
    return planetCard;
}

const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];
const planetColors = ["gray", "goldenrod", "skyblue", "firebrick", "sandybrown", "wheat"];
const planetSizesInKm = [4880, 12104, 12756, 6792, 142984, 120536];
const planetFunFacts = ["is the closest planet to the sun but isn't the hottest.", "the hottest planet.", "the most habitable planet.", "going to be the first planet other than Earth that we will visit.", "the biggest planet.", "the planet with the most moons."];

const planets = [];
for (let i = 0; i < planetNames.length; i++) {
    const planetName = planetNames[i];
    const planetObject = {
        name: planetName,
        order: i + 1,

        diameterKm: planetSizesInKm[i],
        funFact: planetName + " is " + planetFunFacts[i],
        color: planetColors[i]
    };

    createPlanetCard(planetObject);
    planets.push(planetObject);
}


arrangeFromDistance.addEventListener("click", ()=>{
    const buttonCurrentArrangement = arrangeFromDistance.innerHTML;
    if (buttonCurrentArrangement == "Closest"){
        planets.sort((b, a) => a.order - b.order);
        arrangeFromDistance.innerHTML = "Farthest";
    }else{
        planets.sort((a, b) => a.order - b.order);
        arrangeFromDistance.innerHTML = "Closest";
    }

    planetWrapper.innerHTML = "";
    for (let i = 0; i < planets.length; i++){
        createPlanetCard(planets[i]);
    }
})

arrangeFromSize.addEventListener("click", ()=>{
    const buttonCurrentArrangement = arrangeFromSize.innerHTML;
    if (buttonCurrentArrangement == "Largest"){
        planets.sort((a, b) => a.diameterKm - b.diameterKm);
        arrangeFromSize.innerHTML = "Smallest";
    }else{
        planets.sort((b, a) => a.diameterKm - b.diameterKm);
        arrangeFromSize.innerHTML = "Largest";
    }

    planetWrapper.innerHTML = "";
    for (let i = 0; i < planets.length; i++){
        createPlanetCard(planets[i]);
    }
})
