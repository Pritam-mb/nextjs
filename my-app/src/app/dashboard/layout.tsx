export default function DashboardLayout({
    children,
    users,
    revenue,
    notification,
    login
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
    login: React.ReactNode,
}) {
    const isLoggedin = false
    return isLoggedin ? (
        <>
            <h1>dashboard layout</h1>
            {children}
            <div >
                {users}
                {revenue}
                {notification}
                {/* {login} */}
            </div>
        </>
    ) : (
        login
    )

}