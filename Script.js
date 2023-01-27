const button = document.getElementById("changeColorBtn");
const body = document.querySelector("body");
const colorName = document.querySelector(".colorname");

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${r}, ${g}, ${b})`;
    return randomColor;
}

const setBackground = () => {
    const newColor = generateRandomColor();
    colorName.innerHTML = newColor;
    body.style.backgroundColor = newColor;
    button.style.backgroundColor = newColor;
};

button.addEventListener("click", setBackground);