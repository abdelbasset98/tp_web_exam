console.log("javascript fonctionne !");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
    showDashboard(currentUser);
}

const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");
btnMessage.addEventListener("click", function () {
    message.textContent = "Vous avez cliqué sur le bouton !";
});

function showTab(tab) {
    document.getElementById("signup").style.display = tab === "signup" ? "block" : "none";
    document.getElementById("login").style.display = tab === "login" ? "block" : "none";
    document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab")[tab === "signup" ? 0 : 1].classList.add("active");
}

document.getElementById("btnSignup").addEventListener("click", function () {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (nom === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
    } else {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ nom, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert(`Inscription réussie ! Bienvenue ${nom}`);
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
});

document.getElementById("btnLogin").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        showDashboard(user);
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});

function showDashboard(user) {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
    document.getElementById("username").textContent = user.nom;
    document.getElementById("userEmail").textContent = user.email;
}

function logout() {
    localStorage.removeItem("currentUser");
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("mainPage").style.display = "block";
}