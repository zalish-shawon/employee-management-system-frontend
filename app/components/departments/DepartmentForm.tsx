/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, FormEvent, ChangeEvent } from "react";

type Props = {
  initialData?: { name: string; description?: string };
  onSubmit: (data: any) => void;
  isEdit?: boolean;
};

export default function DepartmentForm({ initialData, onSubmit, isEdit = false }: Props) {
  const [form, setForm] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">{isEdit ? "Edit Department" : "Create Department"}</h2>

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
        <label className="block font-medium text-sm">Description</label>
        <textarea
          name="description"
          value={form.description}
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
