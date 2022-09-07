/*
{
  "name": "Jon Snow",
  "portrait": "assets/jon.png",
  "picture": "assets/pictures/jon_snow.jpg",
  "bio":"Jon is the bastard child of Ned Stark of Winterfell and a unkwnow woman. Soon after his marriage, Ned Stark leaved his home to go to fight on the war of the usurper, and returned home carrying a infant that was supposedly his own",
  "organization": "nightwatch"
  },
  { "name":"Ned Stark",
    "portrait": "assets/ned.png",
    "picture": "assets/pictures/ned_stark.jpg",
    "bio":"Eddard 'Ned' Stark is the head of House Stark, Lord of Winterfell, and Warden of the North. He is a friend to King Robert Baratheon, whom he was raised with and helped to win the Iron Throne, and is eventually named his Hand. ",
    "house": "stark"
  }
  */

const getCharacters = () => {
  return fetch("../json/got.json").then((data) => data.json());
};

const filterAliveCharacters = (array) => {
  array = array.filter((item) => !item.hasOwnProperty("dead"));
  return array;
};

// itt még a családnév alapján kellene rendezni
const sortCharacters = (array) => {
  array = array.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  return array;
};

const selectCharacter = (object) => {
  document.querySelector(".selected__image").src = `../${object.picture}`;
  document.querySelector(".selected__image").alt = object.name;
  document.querySelector(".selected__name").textContent = object.name;
  if (object.house) {
    document.querySelector(
      ".selected__house"
    ).src = `../assets/houses/${object.house}.png`;
  } else {
    document.querySelector(".selected__house").src = "";
  }
  //document.querySelector(".selected__house").alt = object.name;
  document.querySelector(".selected__description").textContent = object.bio;
};

const setDOM = (array) => {
  array.forEach((element) => {
    const characterContainer = document.querySelector(".character__container");
    const charatcertDiv = document.createElement("div");
    characterContainer.appendChild(charatcertDiv);
    charatcertDiv.classList.add("character");
    const image = document.createElement("img");
    charatcertDiv.appendChild(image);
    image.src = `../${element.portrait}`;
    image.alt = element.name;
    const p = document.createElement("p");
    charatcertDiv.appendChild(p);
    p.classList.add("name");
    p.textContent = element.name;
    p.addEventListener("click", () => selectCharacter(element));
  });
};

async function main() {
  try {
    let characters = await getCharacters();
    characters = filterAliveCharacters(characters);
    characters = sortCharacters(characters);
    console.log(characters);
    setDOM(characters);
  } catch {
    console.error("Hiba");
  }
}

main();
