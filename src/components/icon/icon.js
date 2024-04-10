import "./icon.css"

export const icon = (nodoPadre) => {
    const iconHTML = document.createElement("img");
    const divIcon = document.createElement("div");

    divIcon.className = "icon";
    iconHTML.src = "./src/assets/pinterest.png";

    divIcon.appendChild(iconHTML);
    nodoPadre.appendChild(divIcon);
}