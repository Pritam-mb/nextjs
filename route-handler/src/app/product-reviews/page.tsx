import { Product } from "../components/product"
import { Suspense } from "react"
import { Review } from "../components/reviews"
export default function ProductReviews() {
    return (
        <>
            <h1>product reviews page</h1>
            <Suspense fallback={<h1>loading...</h1>}><Product /></Suspense>
            <Suspense fallback={<h1>loading...</h1>}><Review /></Suspense>
        </>

    )
}
