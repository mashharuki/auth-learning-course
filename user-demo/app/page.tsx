"use client";
import {SessionProvider} from "next-auth/react";
import Home from "@/app/home";

/**
 * App コンポーネント
 * @returns 
 */
export default function App() {
  return (
    <SessionProvider >
      <Home/>
    </SessionProvider>
  )
}
