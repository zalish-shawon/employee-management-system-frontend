"use client";
import { Attendance } from "@/app/types/attendance";
import Link from "next/link";

type Props = {
  data: Attendance[];
  onDelete?: (id: string) => void;
};

export default function AttendanceTable({ data, onDelete }: Props) {
    // console.log(data);
  return (
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">Employee ID</th>
          <th className="px-4 py-2 border">Date</th>
          <th className="px-4 py-2 border">Check-In</th>
          <th className="px-4 py-2 border">Check-Out</th>
          <th className="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((att) => (
          <tr key={att._id} className="text-center">
            <td className="border px-4 py-2">{att.employeeId}</td>
            <td className="border px-4 py-2">{new Date(att.date).toLocaleDateString()}</td>
            <td className="border px-4 py-2">{att.checkIn || "-"}</td>
            <td className="border px-4 py-2">{att.checkOut || "-"}</td>
            <td className="border px-4 py-2 space-x-2">
              <Link href={`/attendance/edit/${att._id}`} className="text-blue-600 hover:underline">
                Edit
              </Link>
              {onDelete && (
                <button
                  onClick={() => onDelete(att._id!)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
