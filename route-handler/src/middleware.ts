import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themePreference = request.cookies.get("theme")
    if (!themePreference) {
        response.cookies.set("theme", "dark")
    }
    response.headers.set("X-Custom-Header", "hello")
    return response
    // if (request.nextUrl.pathname === "/profile") {
    //     return NextResponse.redirect(new URL("/hello", request.nextUrl))
    // }
}

export const config = {
    matcher: "/profile",
}
