"use client";
import { useState } from "react";

export default function EmployeeForm({ onSubmit, initialData = {}, isEdit }) {
  const [form, setForm] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    role: initialData.role || "",
    salary: initialData.salary || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={submitData}
      className="space-y-4 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Employee" : "Create Employee"}
      </h2>

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="w-full border px-3 py-2 rounded"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          className="w-full border px-3 py-2 rounded"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Role</label>
        <input
          className="w-full border px-3 py-2 rounded"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Salary</label>
        <input
          className="w-full border px-3 py-2 rounded"
          name="salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          required
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        type="submit"
      >
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
}
