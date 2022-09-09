let characters;

// kérjük le az összes karaktert
const getCharacters = () => {
  return fetch("../json/got.json").then((data) => data.json());
};

// nekünk csak az élők kellenek
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

// rendezés családnév szerint
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

// a karakter kiválasztásánál szükség van egy egyedi azonosítóra a character div-ben
// class-szal ez nehéz, mert az nem lehet akármilyen string
// így adjunk rá egy title attribútumot, aminek már lehet a name a value-ja, ami elég egyedi
// így egyszerűen rá lehet keresni a kiválasztott karakterre és ráadni a highlight
// classt, a css selector kicsit trükkös
// először le kell szedni az összes elemről az esetlegsen korábbi kiválasztásnál
// ráadott classt
const setTitle = (titleValue) => {
  document
    .querySelectorAll(".character")
    .forEach((item) => item.classList.remove("selectedCharacter__highlight"));
  document
    .querySelector(`div[title='${titleValue}']`)
    .classList.add("selectedCharacter__highlight");
};

// a kiválasztott karakter beállításai
const selectCharacter = (object) => {
  setTitle(object.name);
  document.querySelector(".selected__image").src = `../${object.picture}`;
  document.querySelector(".selected__image").alt = object.name;
  document.querySelector(".selected__name").textContent = object.name;
  if (object.house) {
    document.querySelector(
      ".selected__house"
    ).src = `../assets/houses/${object.house}.png`;
  } else {
    document.querySelector(".selected__house").src =
      "../assets/houses/icon0.png";
  }
  document.querySelector(".selected__description").textContent = object.bio;
};

// a kiválasztott karakter mezőinek kiürítése
const emptySelectedCharacterDiv = () => {
  document.querySelector(".selected__image").src = "";
  document.querySelector(".selected__image").alt = "";
  document.querySelector(".selected__name").textContent = "";
  document.querySelector(".selected__house").src = "";
  document.querySelector(".selected__description").textContent = "";
};

// ha nincs a keresésnek megfelelő karakter
const setCharacterNotFound = () => {
  emptySelectedCharacterDiv();
  document.querySelector(".selected__name").textContent = "Character not found";
};

// az oldal feltöltése az élő karakterekkel
const setDOM = (array) => {
  array.forEach((element) => {
    const characterContainer = document.querySelector(".character__container");
    const charatcertDiv = document.createElement("div");
    characterContainer.appendChild(charatcertDiv);
    charatcertDiv.classList.add("character");
    charatcertDiv.setAttribute("title", `${element.name}`);
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

// karakter keresés
const searchCharacter = () => {
  let input = document.querySelector(".search__input").value;
  let selectedCharacter = characters.filter(
    (item) => ("" + item.name).toLowerCase() == ("" + input).toLowerCase()
  );
  if (selectedCharacter.length > 0) {
    selectCharacter(selectedCharacter[0]);
    clearInputField();
  } else {
    clearInputField();
    setCharacterNotFound();
  }
};

// kereső gomb
const setSearchIcon = () => {
  document
    .querySelector(".search__button")
    .addEventListener("click", () => searchCharacter());
};

// a keresőmező az enter fölengedésére indul
const setEnterInSearchField = () => {
  document
    .querySelector(".search__input")
    .addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        searchCharacter();
      }
    });
};

async function main() {
  try {
    characters = await getCharacters();
    characters = filterAliveCharacters(characters);
    characters = sortCharacters(characters);
    setDOM(characters);
    clearInputField();
    setSearchIcon();
    setEnterInSearchField();
  } catch {
    console.error("Hiba");
  }
}

main();
