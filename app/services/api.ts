export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("accessToken");
  }
  return null;
};

export async function apiFetch<T>(url: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
//   console.log("🔹 Sending Request URL:", url);
//   console.log("🔹 Sending Token:", token);

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...(options.headers || {}),
    },
  });

  const text = await res.text();
//   console.log("🔹 RAW API Response:", text);

  try {
    const data = JSON.parse(text);
    return data as T;
  } catch (err) {
    throw new Error(text);
  }
}
