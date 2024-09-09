"use client";
import {SessionProvider} from "next-auth/react";
import Home from "@/app/home";

export default function App() {
  return (
    <SessionProvider >
      <Home/>
    </SessionProvider>
  )
}
