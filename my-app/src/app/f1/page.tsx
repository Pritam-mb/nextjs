import Link from "next/link";

export default function F1() {
    return (
        <>
            <h1>hello welcome to the f1 page</h1>
            <Link href="/f1/f2"> f2</Link>  {/*//intercepting routwes */}
            <Link href="/f3"> f3</Link>
        </>
    )
}
// (...)  uses for to match segments from the root directory