import "./button.css"

export const button = (nodoPadre, texto) => {
    const buttonHTML = document.createElement("button");
    const divButton = document.createElement("div");

    divButton.setAttribute("id", "div_footer");

    buttonHTML.setAttribute("id", "mostrar_mas");
    buttonHTML.textContent = texto;

    divButton.appendChild(buttonHTML);
    nodoPadre.appendChild(divButton);
}

