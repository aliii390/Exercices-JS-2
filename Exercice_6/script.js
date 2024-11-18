
const img = document.querySelectorAll("img");

img.forEach((image) => {
    image.addEventListener("mouseover", handleMouseOver);
    image.addEventListener("mouseout", handleMouseOut);
})

function handleMouseOver(event) {
    const imageName = event.target.id; 
    event.target.src = `./images/${imageName}_2.jpg`;
}

function handleMouseOut(event) {
    const imageName = event.target.id; 
    event.target.src = `./images/${imageName}.jpg`;
}
