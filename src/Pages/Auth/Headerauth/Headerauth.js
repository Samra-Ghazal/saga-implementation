import React from "react";
import "./Headerauth.scss";
import { useHistory } from "react-router-dom";

function Headerauth() {
  let history = useHistory();
  return (
    <div className="col-sm-12 px-md-5 ">
      <div className="row">
        <div className="col-md-6">
          <img
            src="../images/plexar/plexaarlogo.png"
            className="img-fluid plexar_logo"
          />
        </div>
        <div className="col-md-6 text-right m-auto">
          <span className="color_font_one">Already have account?</span>
          <button className="btn btn-primary rounded-pill login_button_style">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Headerauth;
