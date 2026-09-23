const planetWrapper = document.getElementById("planetWrapper");
const arrangeFromDistance = document.getElementById("arrangeFromDistance");
const arrangeFromSize = document.getElementById("arrangeFromSize");

const planetObjects = [
    {
        name: "Mercury",
        order: 1,
        color: "gray",
        diameterKm: 4880,
        funFact: "Mercury is the closet planet to the sun, but isn't the hottest planet in our solar system."
    },

    {
        name: "Venus",
        order: 2,
        color: "goldenrod",
        diameterKm: 12104,
        funFact: "Venus is the hottest planet in our solar system."
    },

    {
        name: "Earth",
        order: 3,
        color: "skyblue",
        diameterKm: 12576,
        funFact: "Earth is the most habitable planet in the solar system."
    },

    {
        name: "Mars",
        order: 4,
        color: "firebrick",
        diameterKm: 6792,
        funFact: "Mars will be the first planet that we will visit from Earth."
    },

    {
        name: "Jupiter",
        order: 5,
        color: "sandybrown",
        diameterKm: 142984,
        funFact: "Jupiter is the biggest planet in our solar system."
    },

    {
        name: "Saturn",
        order: 6,
        color: "wheat",
        diameterKm: 120536,
        funFact: "Saturn is the planet with the most moons in our solar system."
    },
];

const planets = [];

function createPlanet(planetObject){
    const planet = document.createElement("div");
    const planetSize = planetObject.diameterKm;

    planet.style.width = "150px";
    planet.style.height = "150px";
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
    planetCard.style.alignItems = "center";

    const planet = createPlanet(planetObject);
    planetCard.appendChild(planet);

    const planetInfo = document.createElement("div");
    planetInfo.style.marginLeft = "24px";
    planetCard.appendChild(planetInfo);

    const planetHeader = document.createElement("h2");
    planetHeader.innerText = planetObject.name;

    const planetParagraph = document.createElement("p");
    planetParagraph.innerText = "Order from the Sun: " + planetObject.order + "\nDiameter (km): " + planetObject.diameterKm + " km";

    const funFact = document.createElement("p");
    funFact.innerText = "Fun Fact: \n" + planetObject.funFact;
    funFact.style.width = "50%";
    funFact.style.marginLeft = "24px";

    const deletePlanet = document.createElement("button");
    deletePlanet.innerText = "Delete";

    deletePlanet.addEventListener("click", ()=>{
        const planetIndex = planets.indexOf(planetObject);
        if (planetIndex != -1){
            planets.splice(planetIndex, 1);
            planetWrapper.removeChild(planetCard);
        }
    })

    planet.addEventListener("click", ()=>{
        (planetCard.contains(funFact)) ? planetCard.removeChild(funFact) : planetCard.appendChild(funFact);
    })

    planetInfo.appendChild(planetHeader);
    planetInfo.appendChild(planetParagraph);
    planetInfo.appendChild(deletePlanet);

    planetWrapper.appendChild(planetCard);
    return planetCard;
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

for (const planetObject of planetObjects) {
    createPlanetCard(planetObject);
    planets.push(planetObject);
}
