import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/home";
import Sidebar from "./components/sidebar/Sidebar";





function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgot" element={<Forgot/>}/>
    <Route path="/restpasword/:resetToken" element={<Reset/>}/>


    <Route path="/dashboard" element={
    <Sidebar>
      <Layout>
        <Dashboard/>
      </Layout>
    </Sidebar>
      
    }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
