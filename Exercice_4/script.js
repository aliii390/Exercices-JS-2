const nom = document.getElementById("lastname");
const prenom = document.getElementById("firstname");
const ville = document.getElementById("city");
const button = document.querySelector("button");



button.addEventListener("click", handleClick);

function handleClick(){
    nom.value ="";
    prenom.value = "";
    ville.value = "";

}