import { comments } from "../data"
import { NextRequest, NextResponse } from "next/server"
// export async function GET(request: Request,
//     { params }: { params: Promise<{ id: string }> }
// ) {
//     const { id } = await params
//     const comment = comments.find((e) => e.id === parseInt(id))
//     return Response.json(comment)
// }
export async function PATCH(request: Request,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const body = await request.json()
    const comment = comments.find((e) => e.id === parseInt(id))
    const index = comments.findIndex((e) => e.id === parseInt(id))
    if (comment) {
        comment.message = body.message
        comment.author = body.author
    }
    return Response.json(comment, { status: 200 })
}
export async function GET(request: NextRequest,) {
    const searchparams = request.nextUrl.searchParams
    const query = searchparams.get("query")
    const filterComment = query ? comments.filter((e) => {
        return e.message.includes(query)
    }) : comments
    return Response.json(filterComment)
}