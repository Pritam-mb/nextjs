export default function DashboardLayout({
    children,
    users,
    revenue,
    notification
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode,
}) {
    return (
        <>
            <h1>dashboard layout</h1>
            {children}
            <div>
                {users}
                {revenue}
                {notification}
            </div>
        </>
    )
}