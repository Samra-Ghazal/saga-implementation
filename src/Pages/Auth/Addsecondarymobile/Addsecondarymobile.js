import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addsecondaryemail, addsecondaryphonenumber, loginUser, registerapi } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";
import { DEVICE_ID } from "../../../Constants/ImgConstants";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Addsecondaymobile(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setValid] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  const [value, setValue] = useState();

  const addphonenumber = (event) => {
    const valuew = event.target.value;
    setValue(valuew);
  };
  // registered user id --------------------------------
  const registersuccessId = useSelector(
    (state) => state.Auth?.registersuccessId
  );

 
  const handleSubmit = () => {
    console.log("button clicked");
    dispatch(
        addsecondaryphonenumber({
        id: registersuccessId,
        mobileNumber: value,
        type: 2,
        modifiedBy: registersuccessId,
        setIsLoading,
      })
    );
    // history.push(`/password/${email}`);
  };
  return (
    <div className="col-sm-12 px-0 height_page">
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
                    Enter Secondary<span className="plexar_font"> Mobile Number</span>
                  </b>
                </h2>
                <p className="sub_heading"></p>
                <div className="col-md-12 pt-5">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                      />
                       <div className="col-md-12 px-0">
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
