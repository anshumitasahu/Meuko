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
    }
};