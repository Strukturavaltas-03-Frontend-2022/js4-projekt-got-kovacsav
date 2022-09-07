let characters;

const getCharacters = () => {
  return fetch("../json/got.json").then((data) => data.json());
};

const filterAliveCharacters = (array) => {
  array = array.filter((item) => !item.hasOwnProperty("dead"));
  return array;
};

// megfordítja a neveket családnév - keresztnév sorrendbe
const turnNameOrder = (string) => {
  const firstName = string.split(" ")[0];
  const lastName = string.split(" ")[1];
  return (string = lastName ? `${lastName} ${firstName}` : `${firstName}`);
};

// rendezés
const sortCharacters = (array) => {
  array = array.sort((a, b) =>
    turnNameOrder(a.name) > turnNameOrder(b.name)
      ? 1
      : turnNameOrder(b.name) > turnNameOrder(a.name)
      ? -1
      : 0
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

const emptySelectedCharacterDiv = () => {
  document.querySelector(".selected__image").src = "";
  document.querySelector(".selected__image").alt = "";
  document.querySelector(".selected__name").textContent = "";
  document.querySelector(".selected__house").src = "";
  document.querySelector(".selected__description").textContent = "";
};

const setCharacterNotFound = () => {
  emptySelectedCharacterDiv();
  document.querySelector(".selected__name").textContent = "Character not found";
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

// Beviteli mező törlése
const clearInputField = () => {
  document.querySelector(".search__input").value = "";
};

const searchCharacter = () => {
  let input = document.querySelector(".search__input").value;
  let selectedCharacter = characters.filter(
    (item) => ("" + item.name).toLowerCase() == ("" + input).toLowerCase()
  );
  console.log(selectedCharacter);
  if (selectedCharacter.length > 0) {
    selectCharacter(selectedCharacter[0]);
    clearInputField();
  } else {
    clearInputField();
    setCharacterNotFound();
  }
};

const setSearchIcon = () => {
  document
    .querySelector(".search__icon")
    .addEventListener("click", () => searchCharacter());
};

const setEnterInSearchField = () => {
  document
    .querySelector(".search__input")
    .addEventListener("keypress", (event) => {
      if (event.key == "Enter") {
        searchCharacter();
      }
    });
};

async function main() {
  try {
    characters = await getCharacters();
    characters = filterAliveCharacters(characters);
    characters = sortCharacters(characters);
    //console.log(characters);
    setDOM(characters);
    clearInputField();
    setSearchIcon();
    setEnterInSearchField();
  } catch {
    console.error("Hiba");
  }
}

main();
