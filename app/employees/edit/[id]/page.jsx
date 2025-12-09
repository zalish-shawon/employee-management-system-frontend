"use client";

import { useEffect, useState } from "react";
// import { fetchEmployee, updateEmployee } from "@/services/employeeApi";
// import EmployeeForm from "@/components/employees/EmployeeForm";
import { useRouter } from "next/navigation";
import { fetchEmployee, updateEmployee } from "../../../services/employeeApi";
import EmployeeForm from "../../../components/employees/EmployeeForm";

export default function EditEmployee({ params }) {
  const { id } = params;
  const router = useRouter();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    fetchEmployee(id).then((res) => setEmp(res.data));
  }, [id]);

  const handleSubmit = async (formData) => {
    await updateEmployee(id, formData);
    router.push("/employees");
  };

  if (!emp) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <EmployeeForm
        onSubmit={handleSubmit}
        initialData={emp}
        isEdit={true}
      />
    </div>
  );
}
