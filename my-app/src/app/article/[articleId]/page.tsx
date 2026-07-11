"use client"
import Link from "next/link";
import { use } from "react";
export default function Newsarticle({ params, searchParams }: {
    params: Promise<{ articleId: string }>
    searchParams: Promise<{ lang: string }>
}) {
    const { articleId } = use(params);
    const { lang } = use(searchParams);
    return (
        <>
            <h1>hello welcome to the news article page</h1>
            <h1>reading in lanuage {lang} </h1>
            <Link href={`/article/${articleId}?lang=es`} replace > spanish</Link>
            <Link href={`/article/${articleId}?lang=en`}> english</Link>
            <Link href={`/article/${articleId}?lang=fr`}> french</Link>
        </>
    )
}
// async await for server component
// for client component use "use()"
// hooks for client component and for hooks use "use client"