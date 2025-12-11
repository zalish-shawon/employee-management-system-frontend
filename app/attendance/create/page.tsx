/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import { createAttendance } from "@/app/services/attendanceApi";
import AuthGuard from "@/app/lib/auth-guard";
import AttendanceForm from "@/app/components/attendance/AttendanceForm";

export default function CreateAttendancePage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createAttendance(data);
    router.push("/attendance");
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <AttendanceForm onSubmit={handleSubmit} />
      </div>
    </AuthGuard>
  );
}
