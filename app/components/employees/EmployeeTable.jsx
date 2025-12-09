import Link from "next/link";

export default function EmployeeTable({ data }) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Role</th>
            <th className="p-2">Salary</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((emp) => (
            <tr key={emp._id} className="border-b">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.role}</td>
              <td className="p-2">${emp.salary}</td>
              <td className="p-2">
                <Link
                  href={`/employees/edit/${emp._id}`}
                  className="text-blue-600 hover:underline"
                >
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
