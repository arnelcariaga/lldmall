"use client";
import { SessionProvider } from "next-auth/react";
export default function MySessionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
