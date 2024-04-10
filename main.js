import "./style.css"
import { lista } from "./src/components/lista/lista";
import { input } from "./src/components/search/input";
import { button } from "./src/components/button/button";
import { icon } from "./src/components/icon/icon";
import { alerta } from "./src/components/alert/alert";

//! Replicar Pinterest.

const headerContent = document.querySelector("#head");
const divHeader = document.createElement("div");
divHeader.className = "divHeader";

//! Header
//? Textos de listas.
const textos = ["Inicio", "Hoy", "Crear"];
const textos_izq = ["🔔", "💬", "Perfil"];

icon(divHeader);
lista(divHeader, textos);
input(divHeader);
lista(divHeader, textos_izq);
headerContent.appendChild(divHeader);


//! API 
const searchInput = document.querySelector(".searchInput");
const submit = document.querySelector(".submit");
const divApp = document.querySelector("#app");
const buttonContainer = document.querySelector("#footer")

button(buttonContainer, "Mostrar Mas")

const buttonMas = document.querySelector("#mostrar_mas");

let keyword = "";
let page = 1;
const accesKey = "rabFnJD5qERT_c1Kdu4DzJfLEGU9kMB9QtMq0PfRPZg";

async function buscarImagenes() {
  keyword = searchInput.value;
  const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  // console.log(data);

  if (page===1) {
    divApp.innerHTML = "";
  }

  const resultados = data.results;

  resultados.map((result) => {
    const imagen = document.createElement("img");
    imagen.src = result.cover_photo.urls.small;
    const imagenLink = document.createElement("a");
    imagenLink.href = result.links.html;
    imagenLink.target = "_blank";

    imagenLink.appendChild(imagen);
    divApp.appendChild(imagenLink);
  })


  // const inputAlert = () => {
  //   if (resultados.length = 0) {
  //     console.log("No hay resultados");
  //   }
  // }

  // inputAlert();

  const textoButton = ["Sevilla", "Decoracion", "Sala"]

  const noResults = (e) => {
    alerta(divApp, "Not Found :(", "Puedes probar con las siguientes busquedas!", textoButton);

    const buttonRecomendacion = document.querySelector(".recomendaciones");
    buttonRecomendacion.addEventListener("click", () => {
      const textButton = buttonRecomendacion.textContent;
      searchInput.value = textButton;
    })
  }

  if (resultados.length === 0) {
    noResults();
  }
}

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  buscarImagenes();
})

buttonMas.addEventListener("click", () => {
  page++;
  buscarImagenes();
})


//! Alerta
//? Textos botones
const textoButton = ["Sevilla", "Decoracion", "Sala"]


