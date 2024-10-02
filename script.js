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

// Détecter la touche "Entrée" pour lancer la recherche
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = document.getElementById('search-input').value;
        if (query) {
            const randomString = generateRandomString(15);
            window.location.href = `search.html?query=${encodeURIComponent(query)}&id=${randomString}`;
        } else {
            alert("Veuillez entrer une recherche.");
        }
    }
});
