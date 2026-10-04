import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get("Authorization"));
    const headerList = await headers();
    console.log(headerList.get("Authorization"))

    const name = request.cookies.get("name")
    console.log(name)

    const cookiestore = await cookies()
    cookiestore.set("theme", "dark")
    console.log(cookiestore.get("theme"))

    return NextResponse.json("<h1>profile data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "name=pritam"
        }
    })
}