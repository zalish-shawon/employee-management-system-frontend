// lib/auth-guard.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserFromToken } from "./auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const user = getUserFromToken();
    if (!user) {
      router.replace("/login");
    }
  }, []);

  return <>{children}</>;
}
