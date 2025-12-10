/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserFromToken, clearAuth } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const u = getUserFromToken();
    setUser(u);
  }, []);

  const handleLogout = () => {
    clearAuth();
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl">EMS</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
          <Link href="/employees" className="text-gray-600 hover:text-gray-900">Employees</Link>
          <Link href="/departments" className="text-gray-600 hover:text-gray-900">Departments</Link>
          {user ? (
            <>
              <span className="px-3 py-1 bg-gray-100 rounded text-sm">{user.name || user.email}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-600">Login</Link>
              <Link href="/register" className="text-green-600">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
