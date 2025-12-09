const BASE_URL = "http://localhost:5000/api";

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export async function fetchEmployees() {
  const res = await fetch(`${BASE_URL}/employees`, {
    headers: { Authorization: `Bearer ${getToken()}` },
    cache: "no-store",
  });
  return res.json();
}

export async function fetchEmployee(id: string | number) {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
    cache: "no-store",
  });
  return res.json();
}

export async function createEmployee(data: Record<string, unknown>) {
  const res = await fetch(`${BASE_URL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function updateEmployee(id: string | number, data: Record<string, unknown>) {
  const res = await fetch(`${BASE_URL}/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
