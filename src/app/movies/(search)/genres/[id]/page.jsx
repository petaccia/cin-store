export default async function MoviesGenresIdPage ({ params }) {
    const { id } = await params;
    return (
        <div>
            <h1>Genre page with id : {id}</h1>
        </div>
    )
}