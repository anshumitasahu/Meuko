const API_BASE = "http://localhost:3000";

export const API_ROUTES = {
    USEADMINLOGIN: {
        POST: `${API_BASE}/auth/login`
    },
    ME: {
        GET: `${API_BASE}/auth/me`
    },
    PRODUCT: {
        GET: `${API_BASE}/api/products/getProducts`,
        POST: `${API_BASE}/api/products/createProducts`
    },
    CUSTOMER: {
        GET: `${API_BASE}/api/customers/get`,
        POST: `${API_BASE}/api/customers/create`
    },
    SALESMAN: {
        GET: `${API_BASE}/api/salesman/get`,
        POST: `${API_BASE}/api/salesman/create`
    },
    DISTRIBUTORS: {
        GET: `${API_BASE}/api/distributors/get`,
        POST: `${API_BASE}/api/distributors/create`
    },
    PRIMARYORDERS: {
        GET: `${API_BASE}/api/primaryOrder/get`
    },
    SECONDARYORDERS: {
        GET: `${API_BASE}/api/secondaryOrder/get`
    }
};