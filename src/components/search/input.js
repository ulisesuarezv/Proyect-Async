import "./input.css"

export const input = (nodoPadre) => {
    const formInput = document.createElement("form");
    const inputHTML = document.createElement("input");

    // inputHTML.textContent = "Buscar..."
    inputHTML.type = "text";
    inputHTML.placeholder = "Buscar..."
    inputHTML.className = "searchInput"

    formInput.className = "submit"
    formInput.action = "";

    formInput.appendChild(inputHTML);
    nodoPadre.appendChild(formInput);
}