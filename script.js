console.log("javascript fonctionne !");

const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");
btnMessage.addEventListener("click", function () {
    message.textContent = "Vous avez cliqué sur le bouton !";
});

const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector(".form button");

button.addEventListener("click", function () {
    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Veuillez remplir tous les champs !");
    } 
    const users= JSON.parse(localStorage.getItem("users")) || [];
     users.push({ nom: nom.value, email: email.value, password: password.value });
    localStorage.setItem("users", JSON.stringify(users));

    alert(`Inscription réussie ! nom : ${nom.value}, email : ${email.value} password : ${password.value}`);
    nom.value = "";
    email.value = "";
    password.value = "";
      
});