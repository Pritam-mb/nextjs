import { notFound } from "next/navigation"
export default async function productReview({ params }: {
    params:
    Promise<{ productId: string, reviewsId: string }>
}) {
    const { productId, reviewsId } = await params;
    if (parseInt(reviewsId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>review page for product {productId}</h1>
            <p>review {reviewsId}</p>
        </>
    )
}