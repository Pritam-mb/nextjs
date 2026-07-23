"use client"

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorPage({ error, reset }: {
    error: Error
    reset: () => void
}) {
    const router = useRouter()
    const relod = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
    return (
        <>
            <h1>error is {error.message}</h1>
            <button onClick={relod}>retry</button>
        </>
    )
}
