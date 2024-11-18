
const imgUn = document.getElementById("image1")

imgUn.addEventListener("mouseover", handleClik);
imgUn.addEventListener("mouseout", deuxiemeClik)


function handleClik(){
   imgUn.src = './images/image1_2.jpg';
}

function deuxiemeClik(){
    imgUn.src = './images/image1.jpg';
}

