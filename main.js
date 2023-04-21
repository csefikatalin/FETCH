import { adatBeolvas,adatTorol,adatUj } from "./vegpontHivasok.js";
let lista = [];
let pokemon = [];
$(function () {
  let file = "http://localhost:3000/adatLista";
  adatBeolvas(file, megjelenit);
  // console.log("adatbeolvas meghívása után",lista);//benne lesznek az adatok? NEM!
  let pokemonVegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
  adatBeolvas(pokemonVegpont, pokemonMegjelenit);
  $("#torol").on("click", function () {
    adatTorol(file, 2);
  });
  $("#ujelem").on("click", function () {
    const ujELEM = {
      nev: "Kutyi",
      kor: 2,
      fajta: "keverék",
    };
    adatUj(file, ujELEM);
  });
});


function megjelenit(adataim) {
  lista = adataim;
  console.log("megjelenít adataim", lista);
}

function pokemonMegjelenit(adataim) {
  console.log(adataim);
  //a main-be kiírnánk a pokemon nevét és a képét megjelenítenénk!

  console.log(adataim.sprites.front_default);
  let eleresiUt = adataim.sprites.front_default;
  let pokemonNev = adataim.name;
  const pokemonELEM = $("main");
  const text = `<h2>${pokemonNev}</h2>
              <div class="kep">
              <img src="${eleresiUt}" alt="${pokemonNev}"
              </div>  `;
  pokemonELEM.html(text);
}
