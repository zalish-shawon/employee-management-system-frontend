/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, FormEvent, useEffect } from "react";
import { Attendance } from "@/app/types/attendance";

type Props = {
  initialData?: Attendance;
  onSubmit: (data: Attendance) => void;
  isEdit?: boolean;
};

export default function AttendanceForm({ initialData, onSubmit, isEdit = false }: Props) {
  const [form, setForm] = useState<Attendance>({
    employeeId: "",
    date: new Date().toISOString().slice(0, 10),
    status: "Present",
    checkIn: "",
    checkOut: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <div>
        <label className="block font-medium text-sm">Employee ID</label>
        <input
          type="text"
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium text-sm">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium text-sm">Status</label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Leave">Leave</option>
        </select>
      </div>
      <div>
        <label className="block font-medium text-sm">Check-In</label>
        <input
          type="time"
          name="checkIn"
          value={form.checkIn || ""}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <div>
        <label className="block font-medium text-sm">Check-Out</label>
        <input
          type="time"
          name="checkOut"
          value={form.checkOut || ""}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {isEdit ? "Update" : "Mark Attendance"}
      </button>
    </form>
  );
}
