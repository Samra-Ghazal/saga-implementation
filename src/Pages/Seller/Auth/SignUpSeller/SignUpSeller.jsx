import React from "react";
// import { Link } from "react-router-dom";
// import { Form, FormikProvider } from "formik";
// import { loginUser } from "../../../Store/Auth/actions";
// import { useDispatch } from "react-redux";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import Button from "../../../../Shared/Button/Button";
import InputField from "../../../../Shared/InputField";
import "./SignUpSeller.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  withRouter,
  Switch,
} from "react-router-dom";
import Headerauth from "../Headerauth/Headerauth";

export default function SignUpSeller() {
  return (
    <div className="col-sm-12 login_height">
      <div className="col-sm-12">
        <Headerauth />
      </div>

      <div className="row">
        <div className="col-sm-3  ">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10"></div>
            <div className="col-sm-1"></div>
          </div>
        </div>
        <div className="col-sm-6  border-scss">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="col-sm-12 px-4">
                <h1 className="heading4_login m-0">
                  Sign up now to enter the marketplace
                </h1>
              </div>
              <div className="col-sm-12 px-4 pt-4">
                <span className="join_signup  ">
                  What do you want to do on MicroAcquire?
                </span>
                <div className="pt-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input radio_signup"
                      type="radio"
                      id="inlineCheckbox1"
                      name="option1"
                    />
                    <label
                      className="form-check-label label_color"
                      htmlFor="inlineCheckbox1"
                    >
                      <b>I want to sell a startup</b>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input radio_signup"
                      type="radio"
                      id="inlineCheckbox2"
                      name="option1"
                    />
                    <label
                      className="form-check-label label_color"
                      htmlFor="inlineCheckbox2"
                    >
                      <b>I want to buy a startup</b>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 py-3 px-4">
                <Button size={"sm"} className="button_login" variant="outline">
                  <span className="button_linkedin">
                    <i className="fab fa-linkedin-in"></i>
                    <span className="text_color_line px-1">|</span>
                  </span>
                  Sign in with LinkedIn
                </Button>
              </div>
              <div className="col-sm-12 py-4 px-4">
                <img
                  src="../images/or.png"
                  className="img-fluid img_width_login"
                />
              </div>
              <div className="col-sm-12 px-4">
                <label className="label_login m-0">Email</label>
                <InputField placeholder="Samantha_Nader@hotmail.com" />
                <span className="join_login  ">
                  <span>
                    <img
                      src="../images/bulb.png"
                      className="img-fluid img_bulb_width"
                    />
                  </span>
                  <span className="pt-2">
                    This should be an email you can access post-acquisition
                  </span>
                </span>
              </div>
              <div className="col-sm-12 px-4 pt-4">
                <label className="label_login m-0">Password</label>
                <InputField placeholder="..........." type="password" />
                <span className="join_login">
                  Must include at least 8 characters
                </span>
                <br />
              </div>
              <div className="col-sm-12 px-4">
                <Link to="/confirm-mail" className="link_decoration">
                  <Button
                    size={"sm"}
                    className=" button_style_signup"
                    variant="outline"
                  >
                    Sign up &nbsp;
                    <span className="right_arrow_login">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Button>
                </Link>
              </div>
              <div className="col-sm-12 mobile_padding_bottom px-4 py-2">
                <span className="join_login">
                  Already have an account?
                  <span className="join2_login">
                    <Link to="/" className="link_decoration">
                      <b> Log in</b>
                    </Link>
                  </span>
                </span>
              </div>
              <div className="col-sm-12 mobile_padding_bottom px-4 py-2">
                <span className="join_login">
                  By continuing, you agree to our
                  <span className="join2_login">
                    <Link to="/signup" className="link_decoration1">
                      <b> Terms of Use </b>
                    </Link>
                  </span>
                  and have read and understood our
                  <span className="join2_login">
                    <Link to="/signup" className="link_decoration1">
                      <b> Privacy Polic </b>
                    </Link>
                  </span>
                </span>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
        <div className="col-sm-3  ">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10"></div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
