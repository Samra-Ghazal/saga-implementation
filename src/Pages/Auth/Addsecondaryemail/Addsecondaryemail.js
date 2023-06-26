import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addsecondaryemail, loginUser, registerapi } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";
import { DEVICE_ID } from "../../../Constants/ImgConstants";

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  // registered user id --------------------------------
  const registersuccessId = useSelector(
    (state) => state.Auth?.registersuccessId
  );

  /////for demo
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleNumberChange = (event) => {
    const valuew = event.target.value;
    setEmail(valuew);
    setValid(validateEmail(valuew));
  };
  const handleSubmit = () => {
    console.log("button clicked");
    dispatch(
      addsecondaryemail({
        id: registersuccessId,
        email: email,
        modifiedBy: registersuccessId,
        // history: history,
        setIsLoading,
      })
    );
    // history.push(`/password/${email}`);
  };
  return (
    <div className="col-sm-12 px-0 height_page">
      {/* <div className="col-sm-12 padding_top_bottom_equal">
        <Headerauth />
      </div> */}
      <div className="col-md-12  pt-5 mt-3">
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
                    Enter Secondary<span className="plexar_font"> Email</span>
                  </b>
                </h2>
                <p className="sub_heading"></p>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <input
                        className="form-control form-control-lg mt-5 background_color_gray"
                        placeholder="Secondary Email Address"
                        value={email}
                        onChange={handleNumberChange}
                        type="email"
                      />
                      {isValid ? (
                        <span className="text_valid pt-3">
                          ✔️ Email is Valid
                        </span>
                      ) : (
                        <span className="text_invalid">
                          ❌ Email is invalid{" "}
                        </span>
                      )}

                      <div className="col-md-12 px-0">
                        {isValid ? (
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
                              <>Next</>
                            )}
                          </button>
                        ) : (
                          <button
                            disabled
                            className="btn btn-primary button_width_disabled btn-lg"
                          >
                            {" "}
                            Next{" "}
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
