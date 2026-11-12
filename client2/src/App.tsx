import { BrowserRouter, Route, Routes } from "react-router-dom"
import Customer from "./components/pages/Customer"
import Distributor from "./components/pages/Distributor"
import Orders from "./components/pages/Order"
import NavBar from "./components/ui/layout/NavBar"
import Login from "./components/authPages/Login"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/distributors" element={<Distributor />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
