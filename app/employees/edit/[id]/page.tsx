"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Employee } from "@/app/types/employee";
import { fetchEmployee, updateEmployee } from "@/app/services/employeeApi";
import AuthGuard from "@/app/lib/auth-guard";
import EmployeeForm from "@/app/components/employees/EmployeeForm";

export default function EditEmployeePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const router = useRouter();
  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetchEmployee(id).then((data) => {
      setEmployee(data);
    }).catch(err => {
      console.error("Fetch employee failed:", err);
    });
  }, [id]);

  const handleSubmit = async (data: Partial<Employee>) => {
    if (!employee) return;
    const updatedEmployee: Employee = { ...employee, ...data };
    await updateEmployee(id, updatedEmployee);
    router.push("/employees");
  };

  if (!employee) return <p className="p-6">Loading...</p>;

  return (
    <AuthGuard>
      <div className="p-6">
        <EmployeeForm 
          onSubmit={handleSubmit} 
          initialData={employee}
          isEdit 
        />
      </div>
    </AuthGuard>
  );
}
