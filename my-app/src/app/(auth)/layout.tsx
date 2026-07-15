"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"
import { useState } from "react"
const navlink = [
    {
        name: "login", href: "/login"
    }, { name: "register", href: "/register" }
]
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [search, setSearch] = useState("")
    const pathname = usePathname(); //used to identify the current active url link
    return (
        <>
            <div className="mb-6">
                <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            {navlink.map((e) => {
                const isActive = pathname === e.href || (pathname.startsWith(e.href) && e.href !== "/")
                return <Link
                    className={isActive ? "font-bold" : "text-blue-500 mr-4 ml-4"}
                    key={e.name} href={e.href}>{e.name}</Link>
            })}
            {children}
        </>
    )
}