import React from "react";
import "./Sidenavcontent.scss";
import { logout } from "../../../../../Store/Auth/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Sidenavcontent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutdone = () =>{
    dispatch(logout())
    history.push("/login")
  } 
  return (
    <div className="col-md-12">
      <div className="col-md-12">
        <button className="btn btn-primary w-100 text-left background_color_active">
          <b>Profile</b>
        </button>
        <button className="btn btn-primary w-100 text-left background_color_nonactive mt-3">
          <b>Addresses</b>
        </button>
        <button className="btn btn-primary w-100 text-left background_color_nonactive mt-3">
          <b>User</b>
        </button>
        <button className="btn btn-primary w-100 text-left background_color_nonactive mt-3">
          <b>Bookings</b>
        </button>
        <button className="btn btn-primary w-100 text-left background_color_nonactive mt-3">
          <b>Setting</b>
        </button>
        <button onClick={logoutdone} className="btn btn-primary w-100 text-left background_color_nonactive mt-3">
          <b>Logout</b>
        </button>
      </div>
    </div>
  );
}

export default Sidenavcontent;
