import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addusermobile, loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Addnumber(props) {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const userid = useSelector((state) => state.Auth?.registersuccessId);
  const dispatch = useDispatch();
  let history = useHistory();
  const addphonenumber = (event) => {
    const valuew = event.target.value;
    setValue(valuew);
  };
  const addnumber = () => {
    dispatch(
      addusermobile({
        id: userid,
        mobileNumber: value,
        type: 1,
        modifiedBy: userid,
        setIsLoading,
      })
    );
  };

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
                    Add Mobile<span className="plexar_font">Number</span>
                  </b>
                </h2>
                <p className="sub_heading mb-0">
                  Please Enter Your Mobile Number
                </p>

                <div className="col-md-12 pt-5 pb-3">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}
                      />
                      <div className="col-md-12 px-0 pt-5">
                        <button
                          className="btn btn-primary button_width btn-lg"
                          onClick={addnumber}
                          // onClick={() =>
                          //   history.push(`/verify-number/${value}`)
                          // }
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
