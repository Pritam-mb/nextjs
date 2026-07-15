import { error } from "console"
import { notFound, redirect } from "next/navigation"
// import {user}
function RandomInt(count: number) {
    return Math.floor(Math.random() * count)
}
export default async function ProductReview({ params }: {
    params:
    Promise<{ productId: string, reviewsId: string }>
}) {
    const random = RandomInt(2)
    if (random === 1) {
        throw new Error("internal server error")
    }
    // const router = useRouter();
    const { productId, reviewsId } = await params;
    if (parseInt(reviewsId) > 1000) {
        // notFound();
        redirect('/product')
    }
    return (
        <>
            <h1>review page for product {productId}</h1>
            <p>review {reviewsId}</p>
        </>
    )
}