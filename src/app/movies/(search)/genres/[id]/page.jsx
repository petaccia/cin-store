import SearchResults from "../../components/SearchResults";

export default async function MoviesGenresIdPage ({ params, searchParams }) {
    
    const { id } = await params;
    return (
        <SearchResults searchParams={searchParams} genreId={id} />
    )
}