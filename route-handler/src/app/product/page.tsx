import Link from "next/link";
export default function ProductPage(){
    return(
        <>
        <h1>Product Page time {new Date().toLocaleTimeString()}</h1>
        <Link href="/product/1">Go to Comment Page</Link>
        <Link href="/product/2">Go to Comment Page</Link>
        <Link href="/product/3">Go to Comment Page</Link>
        </>
    )
}