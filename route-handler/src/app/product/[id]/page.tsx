export const dynamicParams = true //it allows that routes that are not is static can be accesable or not

export async function generateStaticParams() { //it build static page during run time 
    return [{
        id: "1"
    },
    {
        id: "2"
    },
    {
        id: "3"
    },
    ]
}

export default async function ProductPage(
    { params }: { params: Promise<{ id: string }>; }
) {
    const { id } = await params;
    return (
        <>
            <h1>Product Page {id} time {new Date().toLocaleTimeString()}</h1>
        </>
    )
}
// see normally next js prebuild the product page during build so when we render there is no request on server 