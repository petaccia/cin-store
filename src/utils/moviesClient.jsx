export default async function getMoviesByPath(path, language="fr-FR") {
    const url = new URL(`${process.env.TMDB_API_URL}${path}`);
    url.searchParams.append('api_key', process.env.TMDB_API_KEY);
    url.searchParams.append('language', language);

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
        throw error;
    }
}