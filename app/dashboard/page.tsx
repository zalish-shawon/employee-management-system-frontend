/* eslint-disable @typescript-eslint/no-explicit-any */
// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import api from "../lib/axios";
import AuthGuard from "../lib/auth-guard";
import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await api.get("/auth/me");
        setProfile(res.data.user);
      } catch (error) {
        console.log("Profile fetch error", error);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  if (loading) return <p className="text-center mt-20 text-gray-600">Loading...</p>;

  return (
    <AuthGuard>
      <div>
        <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

        {/* Welcome section */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold">
            Welcome, <span className="text-blue-600">{profile?.name}</span>
          </h2>
          <p className="text-gray-600 mt-1">Role: {profile?.role}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard title="Total Employees" value="24" color="bg-green-500" />
          <StatsCard title="Active Departments" value="6" color="bg-purple-500" />
          <StatsCard title="Pending Leaves" value="3" color="bg-amber-500" />
        </div>

        {/* More sections can be added later */}
      </div>
    </AuthGuard>
  );
}
