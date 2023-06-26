import React, { useState } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser, signinuser } from "../../../Store/Auth/actions";
import Button from "../../../Shared/Button/Button";
import InputField from "../../../Shared/InputField";
import Headerauth from "../Headerauth/Headerauth";
import "../Login/Login.scss";

export default function Password(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [password, setpassword] = useState("")
  const dispatch = useDispatch();
  let history = useHistory();
  let { email } = useParams();
  console.log("search params", email);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const handleNumberChange = (event) => {
    const valuew = event.target.value;
    setpassword(valuew);
  };
  const handleSubmit = () => {
    console.log("button clicked");
    dispatch(
      signinuser({
        email: email,
        password: password,
        setIsLoading,
      })
    );
    // history.push(`/password/${email}`);
  };
  // const loginUserSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Please enter valid email address")
  //     .required("Please enter email address"),
  //   password: Yup.string().required("Please enter password"),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   enableReinitialize: true,
  //   validationSchema: loginUserSchema,
  //   onSubmit: async (values) => {
  //     await dispatch(
  //       loginUser({
  //         email: values.email,
  //         password: values.password,
  //         resetForm: formik.resetForm,
  //         history: history,
  //         setIsLoading,
  //       })
  //     );
  //   },
  // });
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
                  <b>{email}</b>
                </h2>
                <p className="sub_heading">Is already registered</p>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                      <div className="input-group  mt-5">
                        <input
                          type={!isVisible ? "password" : "text"}
                          className="form-control form-control-lg background_color_gray1"
                          placeholder="Enter Password"
                          aria-label=""
                          aria-describedby="basic-addon1"
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

                      <div className="col-md-12 px-0">
                        <button
                          className="btn btn-primary button_width btn-lg"
                          onClick={handleSubmit}
                          
                        >
                          {" "}
                          Login{" "}
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
