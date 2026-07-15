"use client"
import { useRouter } from "next/navigation"
export default function orderProductPage() {
    const router = useRouter()
    const handleChange = () => {
        router.push('/product/1')
    }
    return (
        <div>
            <h1>order product</h1>
            <button onClick={handleChange}>place order</button>
        </div>
    )
}