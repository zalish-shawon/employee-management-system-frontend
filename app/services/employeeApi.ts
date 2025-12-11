import { apiFetch } from "./api";
import { Employee, ApiResponse } from "../types/employee";

const BASE_URL =
  "https://employee-management-system-backend-ten.vercel.app/api/employees";

export const fetchEmployees = async (): Promise<Employee[]> => {
  const res = await apiFetch<{ items: Employee[] }>(`${BASE_URL}/allEmployees`);
  return res.items; // <-- backend returns items
};

// Get single employee
// export const fetchEmployee = async (id: string): Promise<Employee> => {
//   const res = await apiFetch<{ item: Employee }>(`${BASE_URL}/${id}`);
//   return res.item; // backend returns { item: {...} }
// };

export const fetchEmployee = async (id: string): Promise<Employee> => {
  return await apiFetch<Employee>(`${BASE_URL}/${id}`);
};

// Create employee
export const createEmployee = async (data: Employee): Promise<Employee> => {
  const res = await apiFetch<{ item: Employee }>(
    `${BASE_URL}/create-employee`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  return res.item; // backend returns { message, item }
};

// Update employee
export const updateEmployee = async (
  id: string,
  data: Employee
): Promise<Employee> => {
  const res = await apiFetch<{ item: Employee }>(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  return res.item; // backend returns { message, item }
};
