export default async function MoviesIdPage ({ params }) {
    const { id } = await params;
    return (
        <div>
            <h1>Movie page with id : {id}</h1>
        </div>
    )
};