const img = document.querySelectorAll("img");

img.forEach((image) => {
    image.addEventListener("mouseover", handleMouse);
    
})


let tog = true;

function handleMouse (event){
    let imageName = event.target.id;

    if (tog == true) {
      event.target.src = "./images/" + event.target.id + "_2.jpg";
    }
    if (tog == false) {
      event.target.src = "./images/" + event.target.id + ".jpg";
    }
  
    tog = !tog
}


