export type Attendance = {
  _id?: string;
  employeeId: string;
  date: string;
  status: "Present" | "Absent" | "Leave";
  checkIn?: string;
  checkOut?: string;
};

export type ApiResponse<T> = {
  total?: number;
  items?: T[];
};
export type EmployeeOption = {
  _id: string;
  name: string;
  employeeId: string;
};
