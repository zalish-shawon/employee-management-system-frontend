"use client";

// import { createEmployee } from "@/services/employeeApi";
// import EmployeeForm from "@/components/employees/EmployeeForm";
import { useRouter } from "next/navigation";
import EmployeeForm from "../../components/employees/EmployeeForm";
import { createEmployee } from "../../services/employeeApi";

export default function CreateEmployee() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    await createEmployee(formData);
    router.push("/employees");
  };

  return (
    <div className="p-6">
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
}
