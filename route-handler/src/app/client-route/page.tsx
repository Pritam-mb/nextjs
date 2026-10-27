"use client";
import { serverSideFunction } from "@/src/utils/server-utils";
export default function ClientRoutePage() {
    const result = serverSideFunction();
    console.log(result);
    return (
        <>
            <h1>Client Route Page {result} time {new Date().toLocaleTimeString()}</h1>
        </>
    )
}