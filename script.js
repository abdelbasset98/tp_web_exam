console.log("javascript fonctionne !");

const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");
btnMessage.addEventListener("click", function () {
    message.textContent = "Vous avez cliqué sur le bouton !";
});