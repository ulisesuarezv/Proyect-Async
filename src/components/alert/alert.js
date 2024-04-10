import "./alert.css";

export const alerta = (nodoPadre, texto, text2, text3) => {
    const alertaHTML = document.createElement("h1");
    const textoHTML = document.createElement("p");
    const divAlerta = document.createElement("div");

    divAlerta.setAttribute("id", "alerta")
    alertaHTML.textContent = texto;
    textoHTML.textContent = text2;

    divAlerta.appendChild(alertaHTML);
    divAlerta.appendChild(textoHTML);
    nodoPadre.appendChild(divAlerta);

    text3.forEach(texto => {
        const buttonAlerta = document.createElement("button");
        buttonAlerta.textContent = texto;
        buttonAlerta.className = "recomendaciones"
        divAlerta.appendChild(buttonAlerta);
    })
}