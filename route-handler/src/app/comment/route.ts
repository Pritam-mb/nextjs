import { comments } from "./data";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchparams = request.nextUrl.searchParams;
    const query = searchparams.get("query");
    const filterComment = query ? comments.filter((e) => {
        return e.message.includes(query);
    }) : comments;
    return Response.json(filterComment);
}
export async function POST(request: Request) {
    const comment = await request.json()
    const newComment = {
        id: comments.length + 1,
        message: comment.message,
        author: comment.author
    }
    comments.push(newComment)
    return Response.json(newComment, { status: 201 });
}