import React, { useState, useEffect } from 'react';
type userData = {
    id: number;
    name: string;
    email: string;
};
export default function Userfetch() {
    const [userData, setUserData] = useState<userData[]>([]);
    useEffect(() => {
        async function fetchData() {
            try{
                const response = await fetch('/api/user');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            }catch (error) {
                console.error('Error fetching user data:', error);
            }finally {
                console.log('Fetch attempt completed');
            }

        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>User Fetch Page</h1>
            <p>This is the User Fetch page content.</p>
            {userData.map((user: userData) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    )
}