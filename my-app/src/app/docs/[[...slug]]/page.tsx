export default async function docs({ params }: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params
    if (slug?.length === 2) {
        return <h1>docs page for {slug[0]} and {slug[1]}</h1>
    }
    else if (slug?.length === 1) {
        return <h1>docs page for {slug[0]}</h1>
    }
    return <h1>docs page for home page</h1>
}