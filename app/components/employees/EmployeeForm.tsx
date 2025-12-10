/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Employee } from "@/app/types/employee";
import { useState, FormEvent, ChangeEvent } from "react";

type EmployeeFormProps = {
  initialData?: Employee;
  onSubmit: (data: Partial<Employee>) => void;
  isEdit?: boolean;
};

export default function EmployeeForm({
  initialData,
  onSubmit,
  isEdit = false,
}: EmployeeFormProps) {
  const [form, setForm] = useState<Partial<Employee>>({
    name: initialData?.user?.name || "",
    email: initialData?.user?.email || "",
    role: initialData?.user?.role || "employee",
    salary: initialData?.salary || 0,
    employeeId: initialData?.employeeId || "",
    department: initialData?.department || "",
    position: initialData?.position || "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "salary" ? Number(value) : value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {isEdit ? "Edit Employee" : "Create Employee"}
      </h2>

      <div>
        <label className="block font-medium text-sm">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
        </select>
      </div>

      <div>
        <label className="block font-medium text-sm">Salary</label>
        <input
          type="number"
          name="salary"
          value={form.salary}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Position</label>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Department ID</label>
        <input
          type="text"
          name="department"
          value={form.department}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
}
