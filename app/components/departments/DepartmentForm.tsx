/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";

type Props = {
  initialData?: { name: string; code?: string; head?: string };
  onSubmit: (data: any) => void;
  isEdit?: boolean;
};

export default function DepartmentForm({ initialData, onSubmit, isEdit = false }: Props) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    head: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        code: initialData.code || "",
        head: initialData.head || "",
      });
    }
  }, [initialData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Code</label>
        <input
          type="text"
          name="code"
          value={form.code}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <div>
        <label className="block font-medium text-sm">Head</label>
        <input
          type="text"
          name="head"
          value={form.head}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {isEdit ? "Update" : "Create"}
      </button>
    </form>
  );
}
