
export default async function about() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000);
    })
    return (
        <h1>hello welcome to the about page</h1>
    );
}