const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1"

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(error.error || `HTTP ${res.status}`)
  }

  return res.json()
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: "POST", body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: "PUT", body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: "DELETE" }),
}

export const endpoints = {
  health: () => api.get("/health"),
  search: (q: string) => api.get(`/search?q=${encodeURIComponent(q)}`),
  products: {
    list: (params?: Record<string, string>) => {
      const qs = params ? "?" + new URLSearchParams(params).toString() : ""
      return api.get(`/products${qs}`)
    },
    get: (id: string) => api.get(`/products/${id}`),
    prices: (id: string) => api.get(`/products/${id}/prices`),
  },
  compare: (ids: string[]) => api.get(`/compare?ids=${ids.join(",")}`),
  auth: {
    login: (email: string, password: string) =>
      api.post("/auth/login", { email, password }),
    register: (email: string, password: string, name: string) =>
      api.post("/auth/register", { email, password, name }),
  },
  agents: {
    execute: (query: string, agentType?: string) =>
      api.post("/agents/execute", { query, agent_type: agentType }),
  },
  suppliers: {
    search: (params?: Record<string, string>) => {
      const qs = params ? "?" + new URLSearchParams(params).toString() : ""
      return api.get(`/suppliers${qs}`)
    },
  },
}
