import NavBar from "./components/ui/layout/navbar";
import Customer from "./components/page/Customer";
import Dashboard from "./components/page/Dashboard";
import Distributors from "./components/page/Distributors";
import Orders from "./components/page/Orders";
import Products from "./components/page/Product";
import Salesman from "./components/page/Salesman";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authPages/login";
import Auth from "./components/authPages/Auth";

function App() {
  return (
    <div className="flex h-screen w-screen bg-[#f2efeb]">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Auth><Dashboard /></Auth>} />
          <Route path="/customers" element={<Auth><Customer /></Auth>} />
          <Route path="/salesman" element={<Auth><Salesman /></Auth>} />
          <Route path="/products" element={<Products />} />
          <Route path="/distributors" element={<Distributors />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App