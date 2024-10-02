// Fonction pour générer une chaîne aléatoire
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (query) {
        // Générer une chaîne aléatoire de 15 caractères
        const randomString = generateRandomString(15);
        
        // Rediriger vers la page de résultats avec la requête et une chaîne aléatoire
        window.location.href = `search.html?query=${encodeURIComponent(query)}&id=${randomString}`;
    } else {
        alert("Veuillez entrer une recherche.");
    }
});
