export const Card = ({
    children,
    type
}: {
    children: React.ReactNode,
    type: string
}) => {
    const cardstyle = {
        padding: "20px",
        border: "1px solid #ccc",
        margin: "20px",
        color: type === "info" ? "blue" : type === "success" ? "green" : type === "error" ? "red" : "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    }
    return (
        <div style={cardstyle}>
            {/* <h1>{type}</h1> */}
            {children}
        </div>
    )
}