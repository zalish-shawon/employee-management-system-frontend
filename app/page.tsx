"use client";
import './globals.css'
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-32 flex flex-col md:flex-row items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Simplify Your <span className="text-yellow-400">Employee Management</span>
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              Manage your team efficiently with our modern EMS system. Track employees, departments, and attendance in one platform.
            </p>
            <div className="flex gap-4">
              <Link href="/register" className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded shadow hover:bg-yellow-300 transition">
                Get Started
              </Link>
              <Link href="/dashboard" className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="/hero-illustration.png"
              alt="Employee management illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose EMS?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-blue-600 mb-4 text-4xl">👨‍💼</div>
            <h3 className="font-semibold text-xl mb-2">Manage Employees</h3>
            <p className="text-gray-600">Easily add, edit, and remove employee records with real-time updates.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-blue-600 mb-4 text-4xl">📊</div>
            <h3 className="font-semibold text-xl mb-2">Analytics & Reports</h3>
            <p className="text-gray-600">Track attendance, department performance, and employee growth metrics.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-blue-600 mb-4 text-4xl">🔒</div>
            <h3 className="font-semibold text-xl mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Keep your employee data safe with secure login and role-based access.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your team?</h2>
        <p className="text-gray-700 mb-8 text-lg md:text-xl">
          Sign up today and experience hassle-free employee management.
        </p>
        <Link
          href="/register"
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-500 transition"
        >
          Create Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} EMS System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
