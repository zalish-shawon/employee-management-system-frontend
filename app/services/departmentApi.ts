/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiFetch } from "./api";

const BASE_URL = "http://localhost:5000/api/departments";

export const fetchDepartments = async () => {
  const res = await apiFetch(`${BASE_URL}/allDepartments`) as any;
  return res.items; // assuming backend returns { total, items }
};

export const fetchDepartment = async (id: string) => {
  return await apiFetch(`${BASE_URL}/${id}`);
};

export const createDepartment = async (data: any) => {
  const res = await apiFetch(`${BASE_URL}/create-department`, {
    method: "POST",
    body: JSON.stringify(data),
  }) as any;
  return res.item;
};

export const updateDepartment = async (id: string, data: any) => {
  const res = await apiFetch(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  }) as any;
  return res.item;
};

export const deleteDepartment = async (id: string) => {
  return await apiFetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
