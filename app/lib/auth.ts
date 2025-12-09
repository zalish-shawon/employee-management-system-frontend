/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/auth.ts
import api from "./axios";
import { jwtDecode } from "jwt-decode";

export type LoginPayload = { email: string; password: string };
export type RegisterPayload = { name: string; email: string; password: string };

export async function loginService(payload: LoginPayload) {
  const res = await api.post("/auth/login", payload);
  return res.data; // { message, user, accessToken, refreshToken }
}

export async function registerService(payload: RegisterPayload) {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

export function setAuthTokens(accessToken: string, refreshToken?: string) {
  localStorage.setItem("accessToken", accessToken);
  if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
}

export function clearAuth() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export function getUserFromToken() {
  try {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
    if (!token) return null;
    const decoded: any = jwtDecode(token);
    // decoded may contain id, role, name etc. Adjust based on backend payload.
    return decoded;
  } catch (err) {
    return null;
  }
}
