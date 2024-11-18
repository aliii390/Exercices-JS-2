const nom = document.getElementById("lastname");



nom.addEventListener("keyup", handleKeyup)

function handleKeyup(){
    console.log(nom.value);
}