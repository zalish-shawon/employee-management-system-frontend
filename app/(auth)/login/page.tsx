/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(auth)/login/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUserFromToken, loginService, setAuthTokens } from "@/app/lib/auth";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  useEffect(() => {
    const u = getUserFromToken();
    if (u) router.push("/dashboard"); // already logged in
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await loginService(data);
      // res should contain accessToken and refreshToken
      setAuthTokens(res.accessToken, res.refreshToken);
      alert(res.message || "Login successful");
      router.push("/dashboard");
    } catch (err: any) {
      alert(err?.response?.data?.message || err?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>

    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
    <input
      {...register("email")}
      type="email"
      required
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="you@example.com"
    />

    <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
    <input
      {...register("password")}
      type="password"
      required
      className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="********"
    />

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300"
    >
      Login
    </button>

    <div className="mt-5 text-center text-gray-600">
      Dont have an account?{" "}
      <a href="/register" className="text-blue-500 font-medium hover:underline">
        Register
      </a>
    </div>
  </form>
</div>

  );
}
