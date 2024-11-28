import 'server-only';

// Fonction générique pour appeler l'API TMDB
export default async function fetchMoviesFromAPI(path, param = {}, language = "fr-FR", page = 1) {
    const url = new URL(`${process.env.TMDB_API_URL}${path}`);
    url.searchParams.append('api_key', process.env.TMDB_API_KEY);
    url.searchParams.append('language', language);
    url.searchParams.append('page', page);
    
    // Ajout des paramètres dynamiques
    Object.entries(param).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });
    
    
    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json', 
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
        throw error;
    }
}
