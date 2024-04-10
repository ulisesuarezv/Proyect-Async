//! lista ul - ol
import "./lista.css";

export const lista = (nodoPadre, text) => {
  const navLista = document.createElement("nav");
  const nodoLista = document.createElement("ul");

  text.forEach(texto => {
    const listaHTML = document.createElement("li");
    listaHTML.textContent = texto;
    nodoLista.appendChild(listaHTML);
  });

  navLista.className = "lista"

  navLista.appendChild(nodoLista);
  nodoPadre.appendChild(navLista);
};
