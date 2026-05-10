"use client";

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await res.json();

      if (data.token) {

        localStorage.setItem("token", data.token);

        alert("Login realizado 🚀");

      } else {

        alert("Login inválido");

      }

    } catch (err) {

      alert("Erro no servidor");

    }

  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold mb-6">
          Zenvy AI
        </h1>

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-black text-white p-3 w-full rounded-xl"
        >
          Entrar
        </button>

      </div>

    </main>
  );

}