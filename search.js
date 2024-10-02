function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParameter('query');
    const id = getQueryParameter('id'); // Chaîne aléatoire
    const resultsContainer = document.getElementById('results');
    
    if (query && id) {
        // Simuler des résultats de recherche
        const results = [
            { title: "Résultat 1 pour " + query, link: "https://example.com/1", description: "Description de résultat 1." },
            { title: "Résultat 2 pour " + query, link: "https://example.com/2", description: "Description de résultat 2." },
            { title: "Résultat 3 pour " + query, link: "https://example.com/3", description: "Description de résultat 3." }
        ];

        results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'result-item';
            item.innerHTML = `<h3><a href="${result.link}" target="_blank">${result.title}</a></h3><p>${result.description}</p>`;
            resultsContainer.appendChild(item);
        });

        // Afficher la chaîne aléatoire
        const randomIdDisplay = document.createElement('p');
        randomIdDisplay.textContent = "ID de recherche unique : " + id;
        resultsContainer.appendChild(randomIdDisplay);
    } else {
        resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }

    // Bouton retour à l'accueil
    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
