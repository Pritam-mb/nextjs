export default async function product({ params, }: {
    params: Promise<{ productId: string }>;
}) {
    const productId = (await params).productId
    return (
        <>
            <h1>product page</h1>
            <p>Product {productId}</p>
        </>
    )
}