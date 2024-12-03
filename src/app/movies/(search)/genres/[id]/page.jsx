import SearchResults from "../../components/SearchResults";

export default async function MoviesGenresIdPage ({ params, searchParams }) {
    
    return (
        <SearchResults searchParams={searchParams} genreId={params.id} />
    )
}