import { Metadata } from "next";
type Props = {
    params: Promise<{ productId: string }>;
    // searchParams:Promise<{}>;
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id}`)
        }, 100);
    })
    return {
        title: `product ${title}`,
        description: `product ${title}`
    }
}
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