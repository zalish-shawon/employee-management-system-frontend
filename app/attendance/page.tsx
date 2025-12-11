/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { fetchAttendance, deleteAttendance } from "@/app/services/attendanceApi";
import Link from "next/link";
import AuthGuard from "@/app/lib/auth-guard";
import AttendanceTable from "../components/attendance/AttendanceTable";

export default function AttendancePage() {
  const [data, setData] = useState<any[]>([]);

  const loadAttendance = async () => {
    const res = await fetchAttendance();
    setData(res.items || []);
    // console.log(res);
  };

  useEffect(() => {
    loadAttendance();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure to delete this record?")) return;
    await deleteAttendance(id);
    loadAttendance();
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Attendance</h1>
          <Link
            href="/attendance/create"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Mark Attendance
          </Link>
        </div>
        <AttendanceTable data={data} onDelete={handleDelete} />
      </div>
    </AuthGuard>
  );
}
