import Author from "./author";

type User={
    id: number;
    name: string;
    username: string;
    email: string;
}

export default async function ServeFetch() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users: User[] = await response.json();
    return (
        <div>
            <h1>Server Fetch Page</h1>
            <p>This is the Server Fetch page content.</p>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <Author userId={user.id} />
                    <p>{user.email}</p>
                </div>
            ))} 
        </div>
    )
}