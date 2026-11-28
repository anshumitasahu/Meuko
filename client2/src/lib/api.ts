const API_BASE = "http://localhost:3000";

export const API_ROUTES = {
    USESALESMANLOGIN: {
        POST: `${API_BASE}/auth/salesman`
    },
    CUSTOMER: {
        GET: `${API_BASE}/api/customers/get`
    },
    DISTRIBUTORS: {
        GET: `${API_BASE}/api/distributors/get`
    },
    PRIMARYORDER: {
        POST: (id: number) => `${API_BASE}/api/primaryOrder/create/${id}`,
        GET: `${API_BASE}/api/primaryOrder/getMyOrders`
    },
    SECONDARYORDER: {
        POST: (id: number) => `${API_BASE}/api/secondaryOrder/create/${id}`,
        GET: `${API_BASE}/api/secondaryOrder/getMyOrders`
    }
}