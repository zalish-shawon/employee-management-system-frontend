/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserFromToken, clearAuth } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState<any>(undefined); // undefined initially
  const router = useRouter();

  useEffect(() => {
    const u = getUserFromToken();
    setUser(u); // null if not logged in, object if logged in
  }, []);

  const handleLogout = () => {
    clearAuth();
    setUser(null);
    router.push("/login");
  };

  // While checking token, show nothing to avoid flicker
  if (user === undefined) return null;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <span className="font-bold text-2xl text-blue-600">EMS</span>
    </Link>

    {/* Navigation Links */}
    <div className="flex items-center gap-4">
      {user ? (
        <>
          <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/employees" className="text-gray-600 hover:text-blue-600 transition-colors">
            Employees
          </Link>
          <Link href="/departments" className="text-gray-600 hover:text-blue-600 transition-colors">
            Departments
          </Link>
          <Link href="/attendance" className="text-gray-600 hover:text-blue-600 transition-colors">
            Attendance
          </Link>

          {/* User Info */}
          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
            {user.name || user.email}
          </span>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg font-medium transition-all"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className="px-4 py-1 text-blue-600 font-medium hover:bg-blue-50 rounded transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-1 text-green-600 font-medium hover:bg-green-50 rounded transition"
          >
            Register
          </Link>
        </>
      )}
    </div>
  </div>
</nav>

  );
}
