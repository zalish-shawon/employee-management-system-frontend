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
    <div className="flex items-center justify-center min-h-[70vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>

        <label className="block mb-2 text-sm">Email</label>
        <input {...register("email")} type="email" required className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Password</label>
        <input {...register("password")} type="password" required className="w-full p-2 border rounded mb-4" />

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Login</button>

        <div className="mt-4 text-center">
          <a href="/register" className="text-sm text-blue-500">Don't have an account? Register</a>
        </div>
      </form>
    </div>
  );
}
