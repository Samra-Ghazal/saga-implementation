import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { adduserprofile, loginUser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";

export default function Profileinformation(props) {
  const [isLoading, setIsLoading] = useState(false);
  const userid = useSelector((state) => state.Auth?.registersuccessId);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  let history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  console.log(isChecked);
  const firstnamefunc = (event) => {
    const valuew = event.target.value;
    setFirstname(valuew);
  };
  const lastnamefunc = (event) => {
    const valuew = event.target.value;
    setLastname(valuew);
  };

  const submitprofile = () => {
    dispatch(
      adduserprofile({
        id: userid,
        firstName: firstname,
        lastname: lastname,
        imageUrl: "empty",
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
                    Profile <span className="plexar_font">Information</span>
                  </b>
                </h2>

                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <input
                        className="form-control form-control-lg mt-5 background_color_gray"
                        placeholder="First Name"
                        type="email"
                        onChange={firstnamefunc}
                        value={firstname}
                      />
                      <input
                        className="form-control form-control-lg mt-3 background_color_gray"
                        placeholder="Last Name"
                        type="email"
                        onChange={lastnamefunc}
                        value={lastname}
                      />
                      <div className="col-md-12 px-0">
                        <div className="text-left pt-3">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck1"
                              onChange={(e) => setIsChecked(e.target.checked)}
                              checked={isChecked}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1"
                            >
                              <span className="font_label">
                                I agree to the Expert Terms of Services and
                                Privacy Policy
                              </span>
                            </label>
                          </div>

                          {/* <div className="form-group">
                            <input
                              type="checkbox"
                              className=""
                              id="customCheck1"
                              onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck1 "
                            >
                              <span className="font_label">
                                I agree to the Expert Terms of Services and
                                Privacy Policy mmm
                              </span>
                            </label>
                          </div> */}
                        </div>
                        {firstname === "" ||
                        lastname === "" ||
                        isChecked === false ? (
                          <button
                            className="btn btn-primary button_width_disabled btn-lg"
                            disabled
                            // onClick={() => history.push(`/add-number`)}
                          >
                            {" "}
                            Confirm{" "}
                          </button>
                        ) : (
                          <button
                            className="btn btn-primary button_width btn-lg"
                            onClick={submitprofile}
                            // onClick={() => history.push(`/add-number`)}
                          >
                            {isLoading ? (
                              <div
                                class="spinner-border text-light"
                                role="status"
                              >
                                <span class="sr-only">Loading...</span>
                              </div>
                            ) : (
                              <>Confirm</>
                            )}
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
