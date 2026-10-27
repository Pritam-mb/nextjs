"use client";
import ServerComponent from '@/src/app/components/servercomponent'
import React from "react";
export default function Clientcomponent({children}: {children?: React.ReactNode}) {
 const [count, setCount] = React.useState(0);
 return (
   <div>
     <h1>client component Page</h1>
     {/* <p>Count: {count}</p> */}
        {children}
     {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
   </div>
 );
}

// inside client we can not borrow server , and then server is also a client so we pass them as a child 
// but server can borrow client, but client cannot borrow server.