import Link from "next/link";
import EmployeeTable from "../components/employees/EmployeeTable";
import { fetchEmployees } from "../services/employeeApi";

export default async function EmployeesPage() {
  const employees = await fetchEmployees();

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Employees</h1>
        <Link
          href="/employees/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Employee
        </Link>
      </div>

      <EmployeeTable data={employees.data || []} />
    </div>
  );
}
