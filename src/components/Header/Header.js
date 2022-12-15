import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { name, SET_LOGIN } from "../../Redux/feature/auth/authSlice";
import { logoutUser } from "../../Redux/feature/auth/services/authServices";




const Header = () => {
  const despatch = useDispatch()
  const navigate = useNavigate()
  const logout = async ()=>{
    
    await logoutUser()
    await despatch(SET_LOGIN(false))
    navigate("/login")
  }
  

  return (
    <div className="--pad header">
      <div className="--flex-between">
        <h3>
          <span className="--fw-thin">Welcome, </span>
          <span className="--color-danger">{name}</span>
        </h3>
        <button  className="--btn --btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;