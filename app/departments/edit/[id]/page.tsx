/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchDepartment, updateDepartment } from "@/app/services/departmentApi";
import DepartmentForm from "@/app/components/departments/DepartmentForm";
import AuthGuard from "@/app/lib/auth-guard";

export default function EditDepartmentPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const router = useRouter();
  const [department, setDepartment] = useState<any>(null);

  useEffect(() => {
    fetchDepartment(id).then((data) => {
      setDepartment(data);
    });
  }, [id]);

  const handleSubmit = async (data: any) => {
    await updateDepartment(id, data);
    router.push("/departments");
  };

  if (!department) return <p className="p-6">Loading...</p>;

  return (
    <AuthGuard>
      <div className="p-6">
        <DepartmentForm initialData={department} onSubmit={handleSubmit} isEdit />
      </div>
    </AuthGuard>
  );
}
