import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/home/home";




function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgot" element={<Forgot/>}/>
    <Route path="/restpasword/:resetToken" element={<Reset/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
