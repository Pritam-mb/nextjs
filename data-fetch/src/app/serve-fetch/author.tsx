type author={
    id: number;
    name: string;
    username: string;
    email: string;

}

export default async function Author({userId}: {userId: number}) {

    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const author: author = await response.json();
    return (
        <div>
            <h1>Author Page</h1>
            <h1>written by : {author.name}</h1>
            <p>username : {author.username}</p>
            <p>email : {author.email}</p>
        </div>
    )
}
