import fetchMoviesFromAPI from "../../../../lib/api/apiClentTmdb";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
        return new Response(JSON.stringify({ error: "Le paramètre 'query' est requis." }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const searchResults = await fetchMoviesFromAPI(`/search/movie`, { query });
        return new Response(JSON.stringify({ results: searchResults.results }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        return new Response(JSON.stringify({ error: "Erreur interne du serveur." }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
