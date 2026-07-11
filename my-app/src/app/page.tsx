import Link from "next/link";

export default function home() {
    return (
        <>
            <h1>hello welcome to the app</h1>
            <Link href={"/blog"}> <button> blog</button></Link>
            <Link href={"/product"}> <button> product 500</button></Link>
            <Link href="/article/breaking-news-123?lang=en">read in english</Link>
            <Link href="/article/breaking-news-123?lang=fr">read in french</Link>
        </>
    );
}