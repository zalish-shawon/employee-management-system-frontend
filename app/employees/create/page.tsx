/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import EmployeeForm from "@/app/components/employees/EmployeeForm";
import AuthGuard from "@/app/lib/auth-guard";
import { createEmployee } from "@/app/services/employeeApi";
import { useRouter } from "next/navigation";

export default function CreateEmployeePage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createEmployee(data);
    router.push("/employees");
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <EmployeeForm onSubmit={handleSubmit} />
      </div>
    </AuthGuard>
  );
}
