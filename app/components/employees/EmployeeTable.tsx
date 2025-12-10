"use client";
import Link from "next/link";
import { Employee } from "../../types/employee";

type EmployeeTableProps = {
  data: Employee[];
};

export default function EmployeeTable({ data }: EmployeeTableProps) {
    console.log(data);
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            {["Name", "Email", "Role", "Salary", "Actions"].map((th) => (
              <th key={th} className="p-2">{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((emp) => (
            <tr key={emp._id} className="border-b">
              <td className="p-2">{emp.user.name}</td>
              <td className="p-2">{emp.user.email}</td>
              <td className="p-2">{emp.user.role}</td>
              <td className="p-2">${emp.salary}</td>
              <td className="p-2">
                <Link href={`/employees/edit/${emp._id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
