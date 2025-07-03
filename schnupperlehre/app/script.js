const filme = [
  {
    id: 1,
    bewertung: "4",
    titel: "Avatar",
    texttitel: "Avatar",
    jahr: 2009,
    Preis: "CHF 21.99",
    genre: "Science Fiction",
    sprachen1: "English",
    sprachen2: "German",
    sprachen3: "Koreanisch",
    beschreibung:
      "Avatar (2009) is about a Marine who joins an alien world and helps defend it from human exploitation.",
    detailbeschreibung: "",
    bild: "./images/avatar.jpg",
  },
  {
    id: 2,
    bewertung: "4",
    titel: "Titanic",
    jahr: 1997,
    Preis: "CHF 12.99",
    texttitel: "Titanic",
    sprachen1: "English",
    sprachen2: "German",
    sprachen3: "Swedish",
    genre: "Drama/Romance",
    beschreibung:
      "Titanic (1997) is a romantic drama about a young couple from different social classes who fall in love aboard the ill-fated RMS Titanic.",
    detailbeschreibung: "",
    bild: "./images/titanic.jpg",
  },
  {
    id: 3,
    bewertung: "4.5",
    titel: "Star Wars",
    texttitel: "Star Wars",
    jahr: 1977,
    Preis: "CHF 9.99",
    sprachen1: "English",
    sprachen2: "German",
    sprachen3: "French",
    genre: "Science Fiction",
    beschreibung:
      "Star Wars (1977) follows a farm boy, Luke Skywalker, who joins a rebellion to defeat the evil Empire and save the galaxy.",
    detailbeschreibung: "",
    bild: "./images/startwars.jpg",
  },
];

function zeigeFilmeKacheln() {
  const filmshop = document.getElementById("film-shop");
  filmshop.innerHTML = "";
  filme.forEach((film) => {
    const kachel = document.createElement("sl-card");
    kachel.className = "card-overview";
    kachel.innerHTML = `
  <img
        slot="image"
        src="${film.bild}"
      />

      <p class="title">
        <h2><strong>${film.titel}</strong></h2>
      </p>
      <em>${film.texttitel}</em>
  ${film.beschreibung}
      <br />
      <br>
      <sl-dropdown>
        <sl-button slot="trigger" caret>Languages</sl-button>
        <sl-menu>
          <sl-menu-item>${film.sprachen1}</sl-menu-item>
          <sl-menu-item>${film.sprachen2}</sl-menu-item>
          <sl-menu-item>${film.sprachen3}</sl-menu-item>
          <sl-divider></sl-divider>
          </sl-menu-item>
        </sl-menu>
      </sl-dropdown>

      <p class="Price">${film.Preis}</p>
      <small>${film.jahr}</small>

      <div slot="footer">
        <sl-button variant="primary" pill onclick="zeigeFilmDetails(${film.id})">More Info</sl-button>
        <sl-rating
          label="Rating"
          readonly
          precision="0.1"
          value=${film.bewertung}
        ></sl-rating>
        <sl-button variant="primary" pill>Buy Now</sl-button>
      </div>
`;
    filmshop.appendChild(kachel);
  });
}
function zeigeFilmDetails(filmId) {
  // Film suchen
  const film = filme.find((f) => f.id === filmId);

  const container = document.getElementById("film-shop");
  container.innerHTML = `
    <div id="detail-bereich">
            <h1 id="detail-titel">${film.titel}</h1>
            <img id="detail-bild" src="${film.bild}" alt="">
            <p id="detail-beschreibung">${film.beschreibung}</p>
            <p><strong>Jahr:</strong> <span id="detail-jahr">${film.jahr}</span></p>
            <p><strong>Genre:</strong> <span id="detail-genre">${film.genre}</span></p>
            <button onclick="zeigeFilmeKacheln()">Zurück zur Übersicht</button>
        </div>
    `;
}
