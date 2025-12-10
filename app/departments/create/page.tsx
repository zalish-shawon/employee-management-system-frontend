/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import DepartmentForm from "@/app/components/departments/DepartmentForm";
import { createDepartment } from "@/app/services/departmentApi";
import AuthGuard from "@/app/lib/auth-guard";

export default function CreateDepartmentPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createDepartment(data);
    router.push("/departments");
  };

  return (
    <AuthGuard>
      <div className="p-6">
        <DepartmentForm onSubmit={handleSubmit} />
      </div>
    </AuthGuard>
  );
}
