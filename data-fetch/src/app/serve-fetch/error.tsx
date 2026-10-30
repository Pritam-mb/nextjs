"use client"
import { useEffect } from 'react';
export default function Error({ error }: {error: Error}) {
    useEffect(() => {
        console.error('Error occurred:', error);
    }, [error]);
    return (
        <div>
            <h1>Error</h1>
            <p>Something went wrong: {error.message}</p>
            {/* <button onClick={() => reset()}>Try again</button> */}
        </div>
    )
}