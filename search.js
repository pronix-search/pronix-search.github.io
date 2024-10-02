// Fonction pour obtenir la requête de recherche dans l'URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParameter('query');
    const resultsContainer = document.getElementById('results');
    const queryText = document.getElementById('query-text');

    if (query) {
        queryText.textContent = query;

        // Appel à une API ou base de données pour des résultats réels
        fetch(`https://api.searchengine.com/search?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    data.results.forEach(result => {
                        const item = document.createElement('div');
                        item.className = 'result-item';
                        item.innerHTML = `<h3><a href="${result.url}" target="_blank">${result.title}</a></h3><p>${result.description}</p>`;
                        resultsContainer.appendChild(item);
                    });
                } else {
                    resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
                }
            })
            .catch(error => {
                console.error("Erreur de recherche:", error);
                resultsContainer.innerHTML = '<p>Erreur lors de la recherche. Veuillez réessayer.</p>';
            });
    } else {
        resultsContainer.innerHTML = '<p>Aucun terme de recherche spécifié.</p>';
    }
});
