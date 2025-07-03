const filme = [
  {
    id: 1,
    titel: "Avatar",
    jahr: 2009,
    genre: "Science Fiction",
    preis: "CHF 19.99",
    beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt.",
    bild: "./images/avatar.jpg",
  },

  {
    id: 2,
    titel: "Titanic",
    jahr: 2009,
    genre: "Science Fiction",
    beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt.",
    bild: "./images/titanic.jpg",
  },

  {
    id: 3,
    titel: "Star Wars",
    jahr: 2009,
    genre: "Science Fiction",
    beschreibung: "Ein Soldat wird auf den Planeten Pandora geschickt.",
    bild: "./images/startwars.jpg",
  },
];

function zeigeFilmeKacheln() {
  const filmshop = document.getElementById("film-shop");
  filmshop.innerHTML = "";
  filme.forEach((film) => {
    const kachel = document.createElement("sl-card");
    kachel.className = "film-kachel";
    kachel.innerHTML = `
  <img src="${film.bild}" alt="anpassen.titel">
  <h3>${film.titel}</h3>
  <p>Jahr: ${film.jahr}</p>
  <p>Genre: ${film.genre}</p>
  <p>Preis: ${film.preis}</p>
  <button onclick="zeigeFilmDetails(${film.id})">Details anzeigen</button>
`;
    filmshop.appendChild(kachel);
  });
}
function zeigeFilmDetails(filmId) {
  const film = filme.find((f) => f.id === filmId);
  const filmshop = document.getElementById("film-shop");
  filmshop.innerHTML = `
  <div id="detail-bereich">
            <h2 id="detail-titel">${film.titel}</h2>
            <img id="detail-bild" src="${film.bild}" alt="">
            <p id="detail-beschreibung">${film.beschreibung}</p>
            <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
            <p><strong>Genre:</strong> <span id="detail-genre">${film.genre}</span></p>
            <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
        </div>
  `;
}
