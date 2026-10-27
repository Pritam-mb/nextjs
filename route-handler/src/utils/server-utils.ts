import "server-only"
export const serverSideFunction = () => {
    console.log(
        `
        use multiple libraries for this components,
        use environment variables,
        interact with env`
    )
    return "server-result";
}