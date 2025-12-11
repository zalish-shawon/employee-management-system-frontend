/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Attendance } from "@/app/types/attendance";
import { fetchAttendance, fetchEmployeeOptions, updateAttendance } from "@/app/services/attendanceApi";
import AuthGuard from "@/app/lib/auth-guard";
import AttendanceForm from "@/app/components/attendance/AttendanceForm";

type Props = {
  params: { id: string };
};

export default function EditAttendancePage({ params }: Props) {
  const { id } = params;
  const router = useRouter();
  const [attendance, setAttendance] = useState<Attendance | null>(null);
  const [employees, setEmployees] = useState<{ _id: string; name: string; employeeId: string }[]>([]);

  // Load attendance record
  useEffect(() => {
    if (!id) return;
    fetchAttendance().then((res: any) => {
      const record = res.items.find((att: Attendance) => att._id === id);
      setAttendance(record);
    });

    // Load employees for dropdown
    fetchEmployeeOptions().then(setEmployees);
  }, [id]);

  const handleSubmit = async (data: Attendance) => {
    await updateAttendance(id, data);
    router.push("/attendance");
  };

  if (!attendance) return <p className="p-6">Loading...</p>;

  return (
    <AuthGuard>
      <div className="p-6">
        <AttendanceForm initialData={attendance} onSubmit={handleSubmit} isEdit />
      </div>
    </AuthGuard>
  );
}
