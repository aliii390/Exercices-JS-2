const nom = document.getElementById("lastname");


nom.addEventListener("focusout", formulaire);

function formulaire(){
    if(nom.value === ""){
        alert("remplissez les champs")
    } else{
        alert("merci de votre participation")
    }
}