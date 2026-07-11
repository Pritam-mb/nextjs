"use client"

import { useState } from "react";
// import { metadata } from "../layout";

export const metadata = {
    title: "counter"
}

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>count {count}</p>
            <button onClick={() => setCount(() => count + 1)}>increment</button>
        </div>
    )
}
//  cant export metadata from a componenet "use client " direct