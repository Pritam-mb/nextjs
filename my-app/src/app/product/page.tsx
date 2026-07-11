import Link from "next/link";

export default function product() {
    return (
        <>
            <h1>product page</h1>
            <h1><Link href="/product/1">product 1</Link></h1>
            <h1><Link href="/product/2" replace>product 2</Link></h1>
            <h1><Link href="/product/3">product 3</Link></h1>
            {/* {
                [1, 2, 3, 4, 5].map((item) => {
                    return (
                        <h1><Link href={`/product/${item}`}>product ${item}</Link></h1>
                    )
                })
            } */}
            <Link href="/">home</Link>
        </>
    )
}