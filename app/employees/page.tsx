"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Employee } from "../types/employee";
import { fetchEmployees } from "../services/employeeApi";
import AuthGuard from "../lib/auth-guard";
import EmployeeTable from "../components/employees/EmployeeTable";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchEmployees().then((res) => {
    setEmployees(res);
  }).finally(() => setLoading(false));
}, []);

  return (
    <AuthGuard>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Employees</h1>
          <Link
            href="/employees/create"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Employee
          </Link>
        </div>

        {loading ? <p>Loading...</p> : <EmployeeTable data={employees} />}
      </div>
    </AuthGuard>
  );
}
