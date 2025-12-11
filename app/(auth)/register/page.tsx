/* eslint-disable @typescript-eslint/no-explicit-any */
// app/(auth)/register/page.tsx
"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { registerService } from "@/app/lib/auth";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const { register, handleSubmit } = useForm<FormValues>();
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await registerService(data);
      alert(res.message || "Registration successful");
      router.push("/(auth)/login");
    } catch (err: any) {
      alert(err?.response?.data?.message || err?.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 px-4">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>

    <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
    <input
      {...register("name")}
      type="text"
      required
      placeholder="John Doe"
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    />

    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
    <input
      {...register("email")}
      type="email"
      required
      placeholder="you@example.com"
      className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    />

    <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
    <input
      {...register("password")}
      type="password"
      required
      placeholder="********"
      className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    />

    <button
      type="submit"
      className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold rounded-lg transition-all duration-300"
    >
      Register
    </button>

    <div className="mt-5 text-center text-gray-600">
      Already registered?{" "}
      <a href="/(auth)/login" className="text-blue-500 font-medium hover:underline">
        Login
      </a>
    </div>
  </form>
</div>

  );
}
