// app/layout.tsx
import Navbar from "./components/Navbar";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "EMS - Frontend",
  description: "Employee Management System Frontend"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
