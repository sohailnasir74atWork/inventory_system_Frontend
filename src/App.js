import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/home";
import Sidebar from "./components/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getLoginStatus } from "./Redux/feature/auth/services/authServices";
import { useEffect } from "react";
import { SET_LOGIN } from "./Redux/feature/auth/authSlice";
axios.defaults.withCredentials = true



function App() {
  const dispatch = useDispatch();

  // Check if user is logged in
  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
  return (
    <BrowserRouter> 
    <ToastContainer/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgot" element={<Forgot/>}/>
    <Route path="/resetpassword/:resetToken" element={<Reset/>}/>


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
