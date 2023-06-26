import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
  loginUser,
  sendotopemailsuccess,
  setuserpassword,
} from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";

export default function Createpassword(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const userotp = useSelector((state) => state.Auth?.otpuser);
  const userid = useSelector((state) => state.Auth?.registersuccessId);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const toggle = () => {
    setVisible(!isVisible);
  };
  const toggle1 = () => {
    setVisible1(!isVisible1);
  };
  const handleNumberChange = (event) => {
    const valuew = event.target.value;
    setPassword(valuew);
    // setValid(validateEmail(valuew));
  };
  const handleNumberChangeNew = (event) => {
    const valuew = event.target.value;
    setConfirmpassword(valuew);
    // setValid(validateEmail(valuew));
  };
  const handleSubmit = () => {
    dispatch(
      setuserpassword({
        id: userid,
        password: password,
        otp: userotp,
        setIsLoading,
      })
    );
  };

  /////check------------------
  // const hasUppercase = /[A-Z]/;
  // const hasLowercase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasMinimumLength = /^.{8,}$/;
  const hasSymbol = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  // const checkUppercase = (password) => hasUppercase.test(password);
  // const checkLowercase = (password) => hasLowercase.test(password);
  const checkNumber = (password) => hasNumber.test(password);
  const eightcharacters = (password) => hasMinimumLength.test(password);
  const atleastonesymbol = (password) => hasSymbol.test(password);

  const renderCheck = (check) => {
    return check ? (
      <span style={{ color: "green" }}>✓</span>
    ) : (
      <span style={{ color: "red" }}>✗</span>
    );
  };
  console.log("new password---->", password);
  return (
    <div className="col-sm-12 px-0 height_page">
      <div className="col-sm-12 padding_top_bottom_equal">
        <Headerauth />
      </div>
      <div className="col-md-12 ">
        <div className="col-md-12 px-5">
          <div className="row">
            <div className="col-md-3 background_plexar text-center  d-flex align-items-center  justify-content-center">
              <img
                className="img-fluid img_plexar_width"
                src="../images/plexar/plexar.png"
              />
            </div>
            <div className="col-md-9 border_welcome_to_plexar text-center ">
              <div className="col-md-12 alignment_vertically">
                <h2>
                  <b>
                    Create <span className="plexar_font">Password</span>
                  </b>
                </h2>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <div className="input-group  mt-5">
                        <input
                          // type="password"
                          type={!isVisible ? "password" : "text"}
                          className="form-control form-control-lg background_color_gray1"
                          placeholder="Enter Password"
                          aria-label=""
                          aria-describedby="basic-addon1"
                          value={password}
                          onChange={handleNumberChange}
                        />
                        <div className="input-group-append">
                          <button
                            onClick={toggle}
                            className="btn btn-primary btn-lg background_color_gray"
                            type="button"
                          >
                            {isVisible ? (
                              <i id="eyeopen" class="fas fa-eye-slash"></i>
                            ) : (
                              <i id="eyeopen" class="far fa-eye"></i>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="input-group  mt-3">
                        <input
                          type={!isVisible1 ? "password" : "text"}
                          value={confirmpassword}
                          onChange={handleNumberChangeNew}
                          className="form-control form-control-lg background_color_gray1"
                          placeholder="Confirm Password"
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                        <div className="input-group-append">
                          <button
                            onClick={toggle1}
                            className="btn btn-primary btn-lg background_color_gray"
                            type="button"
                          >
                            {isVisible1 ? (
                              <i id="eyeopen" class="fas fa-eye-slash"></i>
                            ) : (
                              <i id="eyeopen" class="far fa-eye"></i>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="text-left">
                        {/* Uppercase: {renderCheck(checkUppercase(password))}
                        Lowercase: {renderCheck(checkLowercase(password))} */}
                        <p className="mb-0 font_size_password pt-3">
                          {renderCheck(checkNumber(password))} At least 8
                          characters
                        </p>
                        <p className="mb-0 font_size_password pt-2">
                          {renderCheck(eightcharacters(password))} At least one
                          number
                        </p>
                        <p className="mb-0 font_size_password pt-2">
                          {renderCheck(atleastonesymbol(password))} !@#$% at
                          least one symbol
                        </p>
                      </div>

                      <div className="col-md-12 px-0">
                        {password === confirmpassword && password !== "" ? (
                          <button
                            className="btn btn-primary button_width btn-lg"
                            onClick={handleSubmit}
                          >
                            {isLoading ? (
                              <div
                                class="spinner-border text-light"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <> Save & Continue</>
                            )}
                          </button>
                        ) : (
                          <button className="btn btn-primary button_width_disabled btn-lg">
                            {" "}
                            Save & Continue{" "}
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 bottom_attach ">
                <hr />
                <p className="sub_heading">
                  Terms & Conditions. Privacy Policy. Copyright. Cookies Policy.
                  Help
                </p>
                <p className="sub_heading">&copy; Selteq Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
