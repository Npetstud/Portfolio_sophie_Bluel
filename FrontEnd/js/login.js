const connexion = document.querySelector("#connexion");
const errorMessage = document.querySelector("#error-message")
connexion.addEventListener("submit", function(event) { 
    event.preventDefault(); 

    const email = event.target.querySelector("[name=email]").value;
    const password = event.target.querySelector("[name=password]").value;

    fetch ("http://localhost:5678/api/users/login", { 
        method : "POST",
        headers:{ 
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    // Le message d'erreur qui doit s'afficher
    .then((res) => {
        
        if (!res.ok) {
            throw new Error("Erreur dans l'identifiant ou le mot de passe");
        }
        return res.json();
    })
    .then((data) => {
       
    
        window.localStorage.setItem("jeton", data.token)
        // Rediriger vers la page du site avec des boutons d'actions pour éditer le site
        window.location.href = "index.html";
    })
    .catch((error) => {
        // Afficher le message d'erreur
        console.error(error);
        errorMessage.textContent = error.message;
        errorMessage.style.color = "red";
    });
})