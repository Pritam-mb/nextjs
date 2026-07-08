"use client"
import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname?.split("/")[2];
    const reviewId = pathname?.split("/")[4]; //
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-center ">Page not found for product {productId} and review {reviewId}</h1>
            </div>
        </>
    );
}