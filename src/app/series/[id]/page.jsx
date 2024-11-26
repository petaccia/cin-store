export default async function SeriesIdPage ({ params }) {
    const { id } = await params;
    return (
        <div>
            <h1>Series page with id : {id}</h1>
        </div>
    )
};