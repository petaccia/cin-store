import 'server-only';

/**
 * Récupère les données de films depuis l'API TMDB
 * @param {string} path - Chemin de l'endpoint API
 * @param {Object} param - Paramètres de requête additionnels
 * @param {string} language - Langue de la réponse (défaut: fr-FR)
 * @param {number} page - Numéro de page des résultats (défaut: 1)
 * @returns {Promise<Object>} Données de réponse de l'API
 */
export default async function fetchMoviesFromAPI(path, param = {}, language = "fr-FR", page = 1) {
    if (!process.env.TMDB_API_URL || !process.env.TMDB_API_KEY) {
        throw new Error('Configuration API TMDB manquante');
    }

    const url = new URL(`${process.env.TMDB_API_URL}${path}`);
    
    const defaultParams = {
        api_key: process.env.TMDB_API_KEY,
        language,
        page: page.toString()
    };

    // Ajout des paramètres par défaut
    Object.entries(defaultParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    // Ajout des paramètres personnalisés
    Object.entries(param).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, value.toString());
        }
    });

    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            next: { revalidate: 3600 } // Cache pendant 1 heure
        });

        if (!response.ok) {
            throw new Error(`Erreur API TMDB: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error('Erreur lors de la requête TMDB API:', error);
        throw new Error('Échec de la récupération des données depuis l\'API TMDB');
    }
}
