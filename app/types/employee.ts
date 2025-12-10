/* eslint-disable @typescript-eslint/no-explicit-any */
export type Employee = {
  user: any;
  _id?: string;
  name: string;
  email: string;
  role: string;
  department?: string;
  employeeId: string;
  position?: string;
  salary: number | string;
};

export type ApiResponse<T> = {
  message: string;
  data: T;
};
