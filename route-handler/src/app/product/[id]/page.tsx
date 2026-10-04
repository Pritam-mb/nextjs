export default async function ProductPage(
    {params}: {params: Promise<{id: string}>;}
) {
    const {id} = await params;
    return(
        <>
        <h1>Product Page {id} time {new Date().toLocaleTimeString()}</h1>
        </>
    )
}