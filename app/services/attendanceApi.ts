/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiFetch } from "./api";
import { Attendance, ApiResponse, EmployeeOption } from "../types/attendance";

const BASE_URL =
  "https://employee-management-system-backend-ten.vercel.app/api/attendance";

export const fetchAttendance = async (): Promise<ApiResponse<Attendance[]>> => {
  const res = (await apiFetch(`${BASE_URL}/allAttendance`)) as ApiResponse<
    Attendance[]
  >;
  return res;
};

export const createAttendance = async (data: Attendance) => {
  return await apiFetch(`${BASE_URL}/create-attendance`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateAttendance = async (id: string, data: Attendance) => {
  return await apiFetch(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const deleteAttendance = async (id: string) => {
  return await apiFetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
  });
};

export const fetchEmployeeOptions = async (): Promise<EmployeeOption[]> => {
  const res = (await apiFetch(
    "https://employee-management-system-backend-ten.vercel.app/api/employees/allEmployees"
  )) as ApiResponse<any[]>;
  return (res.items || []).map((e: any) => ({
    _id: e._id,
    name: e.user.name,
    employeeId: e.employeeId,
  }));
};
