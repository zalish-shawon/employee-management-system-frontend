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
    <div className="flex items-center justify-center min-h-[70vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        <label className="block mb-2 text-sm">Name</label>
        <input {...register("name")} type="text" required className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Email</label>
        <input {...register("email")} type="email" required className="w-full p-2 border rounded mb-3" />

        <label className="block mb-2 text-sm">Password</label>
        <input {...register("password")} type="password" required className="w-full p-2 border rounded mb-4" />

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Register</button>

        <div className="mt-4 text-center">
          <a href="/(auth)/login" className="text-sm text-blue-500">Already registered? Login</a>
        </div>
      </form>
    </div>
  );
}
