"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [name, setName] = useState("");

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ marginTop: 12, padding: 8, display: "block" }}
      />
      <p style={{ marginTop: 12 }}>Hello, {name || "friend"}!</p>
    </main>
  );
}
