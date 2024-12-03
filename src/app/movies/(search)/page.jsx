import SearchResults from "./components/SearchResults";

export default function MoviesPage( { searchParams } ) {
    return (
       <SearchResults searchParams={searchParams} />
    )
}