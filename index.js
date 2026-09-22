const planetWrapper = document.getElementById("planetWrapper");
function createPlanet(planetObject){
    const planet = document.createElement("div");
    const planetSize = planetObject.diameterKm;
    const displayedPlanetSize = Math.log(planetSize) * 10;

    planet.style.width = displayedPlanetSize + "px";
    planet.style.height = displayedPlanetSize + "px";
    planet.style.backgroundColor = planetObject.color;
    planet.style.borderRadius = "50%";
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

    const p = document.createElement("p");
    p.innerHTML = planetObject.name + "<br>Order from the Sun: " + planetObject.order + "<br>Diameter (km): " + planetObject.diameterKm + " km";

    planetCard.appendChild(p);
    planetWrapper.appendChild(planetCard);
    return planetCard;
}

const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];
const planetColors = ["gray", "red", "skyblue", "firebrick", "sandybrown", "wheat"];
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

    const planetCard = createPlanetCard(planetObject);
    planets.push(planetObject);
}