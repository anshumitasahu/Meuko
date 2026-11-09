import NavBar from "./components/ui/layout/navbar";
import Customer from "./components/page/Customer";
import Dashboard from "./components/page/Dashboard";
import Distributors from "./components/page/Distributors";
import Orders from "./components/page/Orders";
import Products from "./components/page/Product";
import Salesman from "./components/page/Salesman";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex h-screen w-screen bg-[#f2efeb]">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/salesman" element={<Salesman />} />
          <Route path="/products" element={<Products />} />
          <Route path="/distributors" element={<Distributors />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App