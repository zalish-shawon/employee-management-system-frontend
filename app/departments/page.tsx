/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import { fetchDepartments, deleteDepartment } from "@/app/services/departmentApi";
import Link from "next/link";

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<any[]>([]);

  const loadDepartments = async () => {
    const data = await fetchDepartments();
    setDepartments(data);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this department?")) return;
    await deleteDepartment(id);
    loadDepartments();
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <Link href="/departments/create" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Create Department
      </Link>

      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Description</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dep) => (
            <tr key={dep._id}>
              <td className="border px-3 py-2">{dep.name}</td>
              <td className="border px-3 py-2">{dep.description}</td>
              <td className="border px-3 py-2 space-x-2">
                <Link
                  href={`/departments/${dep._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(dep._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
