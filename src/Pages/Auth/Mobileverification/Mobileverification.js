import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginUser, resendprimaryotpmobile, verifymobileotp } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";
import OtpInput from "react-otp-input";
import { useEffect } from "react";

export default function Mobilrverfication(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [usernumber, setUsernumber] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoadingresend, setIsLoadingresend] = useState(false);
  const [time, setTime] = useState(110); // Initial time in seconds
  const userphone = useSelector(
    (state) => state.Auth?.mobilenumberreducer?.mobileNumber
  );
  const userid = useSelector((state) => state.Auth?.registersuccessId);
  console.log("user-------->>>>>>", userphone);
  useEffect(() => {
    setUsernumber(userphone);
  }, []);

  const dispatch = useDispatch();
  let history = useHistory();
  let { number } = useParams();
  console.log("search params", number);
  const toggle = () => {
    setVisible(!isVisible);
  };

  //////////////////////

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            setIsActive(false);
            return 110; // Reset the time to 1 minute 50 seconds
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [isActive]);


  
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  /////////////////////
  const handleSubmit = () => {
    dispatch(
      verifymobileotp({
        otpCode: otp,
        phone: userphone,
        userId: userid,
        setIsLoading,
      })
    );
  };
  const resendotponcallprimarymobile = () =>{
    console.log("function ====?>")
    dispatch(
      resendprimaryotpmobile({
        id: userid,
        type: 1,
        setIsActive,
        setIsLoadingresend,
      })
    );
  }



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
                    Mobile <span className="plexar_font">Verification</span>
                  </b>
                </h2>

                <p className="sub_heading mb-0">
                  Entered the code that was sent to
                </p>
                <p className="sub_heading mb-0">
                  <b>{usernumber}</b>{" "}
                </p>
                <p className="sub_heading1">{number}</p>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 pt-3">
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        className="input_style"
                        numInputs={6}
                        renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                        renderInput={(props) => <input {...props} />}
                      />
                      <div className="col-md-12 text-center">
                        <p className="mb-1 pt-3 having_problrm">
                          Having problem?
                        </p>
                        {isActive?  <p className="mb-0 resend_button_disabled"  >Resend Codee</p> :  <p className="mb-0 resend_button" onClick={resendotponcallprimarymobile} >Resend -Code</p> }
                        {isLoadingresend ? (
                              <div
                                class="spinner-border spinner-sm text-primary"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                             null
                            )}
                       
                       <p className=" having_problrm"> {isActive ? <div>{formatTime()}</div> : null } </p>
                      </div>
                      <div className="col-md-12 px-0 ">
                        <button
                          onClick={handleSubmit}
                          className="btn btn-primary button_width btn-lg"
                        >
                        {isLoading ? (
                              <div
                                class="spinner-border text-light"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <>Verify Now</>
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
