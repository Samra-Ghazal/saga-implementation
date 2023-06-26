import axios from "../../Routes/AxiosConfig";
import { fork, put, all, select, takeLatest } from "redux-saga/effects";
import axiosConfig from "../../Routes/AxiosConfigg";

// Login Redux States
import {
  LOGIN,
  REGISTER_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  REGISTERAPI,
  SEND_OTP_EMAIL,
  SET_USER_PASSWORD,
  ADD_USER_PROFILE,
  ADD_USER_MOBILE,
  MOBILE_OTP_VERIFY,
  GET_USER_DATA_AFTER_LOGIN,
  ADD_SECONDARY_EMAIL,
  VERIFY_SECONDARY_EMAIL,
  SEND_OTP_SECONDRY_EMAIL,
  ADD_SECONDARY_PHONE_NUMBER,
  VERIFY_SECONDARY_MOBILE,
  RESEND_OTP_MOBILE,
  GET_ALL_GENDERS,
  SEND_GENDER,
  ADD_DOB,
  SIGNIN_USER,
  RESEND_MOBILE_PRIMARY_OTP,
  RESEND_OTP_NEW_PRIMARY_EMAIL,
  RESEND_OTP_SECONDARY_EMAIL,
  NEW_OTP_RESEND_PRIMARY_MOBILE,
} from "./actionTypes";
import {
  addsecondaryemailsuccess,
  addsecondaryphonenumbersuccess,
  addusermobilesuccess,
  getallgenderssuccess,
  getuserdataafterloginsuccess,
  loginSuccess,
  registerUserSuccessful,
  registerapisuccess,
  sendgendersuccess,
  sendotopemailsuccess,
  setuserpasswordsuccess,
  verfysecondarymobilesuccess,
  verifymobileotpsuccess,
  verifysecondaryemailsuccess,
} from "./actions";
import { push } from "connected-react-router";
import { sagaErrorHandler } from "../../Shared/HelperMethods/SagaErrorHandler";
import { toast } from "react-toastify";
import { makeSelectAuthToken } from "../selector";
import { DEVICE_ID } from "../../Constants/ImgConstants";

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      email: payload.email,
      password: payload.password,
    };
    const response = yield axios.post("admin/login", data);
    if (response.data.data.role === "Admin") {
      payload.history.push("/Dashboard-Admin");
    } else {
      payload.history.push("/dashboard");
    }
    yield put(loginSuccess(response.data.data));
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* registerUser({ payload }) {
  try {
    let data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    const response = yield axios.post("auth/register", data);
    yield put(registerUserSuccessful(response.data));
    yield put(push("/dashboard"));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* forgotPasswordRequest({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      email: payload.email,
    };
    yield axios.post("admin/forgetPassword", data);
    payload.history.push("/login");
    toast.success("Please check you email");
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* resetPasswordRequest({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      token: payload.token,
      newPassword: payload.password,
    };
    yield axios.put("admin/resetPassword", data);
    toast.success("Password reset successfully");
    payload.history.push("/login");
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* changePasswordRequest({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    let data = {
      currentPassword: payload.currentPassword,
      newPassword: payload.newPassword,
    };
    const response = yield axios.put("admin/changePassword", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.history.push("/Dashboard-Admin");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

///////////////////////////////////////functions for plexar

function* registeruser({ payload }) {
  try {
    console.log(payload);
    payload.setIsLoading(true);
    let data = {
      email: payload.email,
      deviceId: payload.deviceId,
      countryId: payload.countryId,
    };
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/register",
      data
    );
    yield put(push(`/Email-verification/${payload.email}`));
    // alert("pusd");
    // console.log("response------------------------------>", response.data);
    // payload.history.push(`/password/${payload.email}`);

    if (response.data.code === 0) {
      yield put(push(`/Email-verification/${payload.email}`));
    } else if (response.data.code === 6) {
      yield put(push(`/Email-verification/${payload.email}`));
    } else if (response.data.code === 4) {
      yield put(push(`/Profile-information`));
    } else if (response.data.code === 3) {
      yield put(push(`/password/${payload.email}`));
    } else {
      alert("response code not valid contact backend");
    }
    yield put(registerapisuccess(response.data));
    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* sendotpemail({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      otpCode: payload.otpCode,
      email: payload.email,
      userId: payload.userId,
      deviceId: DEVICE_ID,
    };
    // console.log("userid in saga------------------->", data);
    yield put(sendotopemailsuccess(payload));
    const response = yield axiosConfig.post(
      "otp_generation_svc/pb/verify/otp/plexaar/",
      data
    );
    alert("verified");
    yield put(push(`/create-password`));

    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* setuserrpasswordfunc({ payload }) {
  try {
    console.log(
      "setuserpasswordpreduces-----------------------------/////",
      payload
    );
    payload.setIsLoading(true);
    let data = {
      id: payload.id,
      password: payload.password,
      otp: payload.otp,
      deviceId: DEVICE_ID,
    };

    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/addUserPassword",
      data
    );
    // console.log("Password data response------------------->", response.data.result);
    yield put(setuserpasswordsuccess(response.data.result));
    alert("verified");
    yield put(push(`/Profile-information`));
    console.log(
      "Password data responseeeeeee------------------->",
      response.data
    );

    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* adduserprofilefunc({ payload }) {
  try {
    console.log(
      "setuserpasswordpreduces-----------------------------/////",
      payload
    );
    payload.setIsLoading(true);
    let data = {
      id: payload.id,
      firstName: payload.firstName,
      lastname: payload.lastname,
      imageUrl: payload.imageUrl,
      modifiedBy: payload.modifiedBy,
    };
    console.log("Password data------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addUserProfile",
      data
    );
    // alert("verified");
    yield put(push(`/add-number`));
    console.log(
      "Password data responseeeeeee------------------->",
      response.data
    );

    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* addusermobilefunc({ payload }) {
  try {
    console.log(
      "setuserpasswordpreduces-----------------------------/////",
      payload
    );
    payload.setIsLoading(true);
    let data = {
      id: payload.id,
      mobileNumber: payload.mobileNumber,
      type: payload.type,
      modifiedBy: payload.modifiedBy,
    };
    console.log("Password data------------------->", data);

    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addUserMobiles",
      data
    );
    yield put(addusermobilesuccess(payload));
    // alert("verified");
    if (response.data.code === 0) {
      yield put(push(`/verify-number`));
    } else if (response.data.code === 1) {
      alert("same number already exist");
    } else {
      alert("api failed");
    }
    // yield put(push(`/verify-number`));
    // console.log(
    //   "Password data responseeeeeee------------------->",
    //   response.data
    // );

    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* mobileotpvrtifyy({ payload }) {
  try {
    // console.log("sendotpreduces-----------------------------/////", payload);

    let data = {
      otpCode: payload.otpCode,
      phone: payload.phone,
      userId: payload.userId,
    };
    let mobileprimaryverify = true;
    console.log("userid in saga verify mobile------------------->", data);
    payload.setIsLoading(true);
    const response = yield axiosConfig.post(
      "otp_generation_svc/pb/verify/otp/plexaar/",
      data
    );

    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.statusCode === 0) {
      yield put(push(`/Profile`));
      console.log("comein------------------------++++++++++++++++++++");
      yield put(verifymobileotpsuccess(mobileprimaryverify));
      payload.setIsLoading(false);
    } else {
      alert("wrong otp entered");
      payload.setIsLoading(false);
    }
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* getuserdetaillogin({ payload }) {
  // const token = yield select(makeSelectAuthToken());
  console.log("hiiiiiiiiiiiiiiii ---------------------->", payload);

  try {
    // payload.setIsLoading(true);
    // Reload the window
    // console.log("payload get user data ---------------------->", payload.id);
    const useridlogin = payload.id;
    const response = yield axios.get(
      `plexaar_signup_svc/pv/users/getUser/${useridlogin}`
    );
    // {
    //   headers: {
    //     Authorization: `Token  ${token}`,
    //   },
    // });
    console.log("response token", response.data.result.user);
    yield put(getuserdataafterloginsuccess(response.data.result.user));
    // payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* addsecondaryemailfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      id: payload.id,
      email: payload.email,
      modifiedBy: payload.modifiedBy,
    };

    console.log("add secondary email------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addSecondaryEmail",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.ccode === 0) {
      yield put(push(`/add-secondary-email-otp-verify`));
      yield put(addsecondaryemailsuccess(payload.email));
    } else {
      yield put(push(`/add-secondary-email`));
    }
    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* verifysecondaryemailfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      otpCode: payload.otpCode,
      email: payload.email,
      userId: payload.userId,
      deviceId: DEVICE_ID,
    };
    let emailsecondryverify = true;
    // console.log("userid in saga------------------->", data);
    yield put(sendotopemailsuccess(payload));
    const response = yield axiosConfig.post(
      "otp_generation_svc/pb/verify/otp/plexaar/",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.statusCode === 0) {
      yield put(push(`/Profile`));
      console.log("-");
      yield put(verifysecondaryemailsuccess(emailsecondryverify));
    } else {
      yield put(push(`/add-secondary-email-otp-verify`));
      alert("worng otp");
    }
    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* sendotpsecondaryfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      type: payload.type,
    };
    payload.setIsLoading(true);
    console.log("add secondary email------------------->", data);
    yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendEmailOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      yield put(push(`/add-secondary-email-otp-verify`));
      alert("code delivered");
      payload.setIsLoading(false);
    } else {
      yield put(push(`/allemailsuser`));
      alert("api failed");
      payload.setIsLoading(false);
    }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* addsecondaryphonefunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      id: payload.id,
      mobileNumber: payload.mobileNumber,
      type: payload.type,
      modifiedBy: payload.modifiedBy,
    };

    console.log("add secondary mobile------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addUserMobiles",
      data
    );
    console.log(
      "userid in saga  mobile response----------sdsdsdsd--------->",
      payload.mobileNumber
    );
    if (response.data.code === 0) {
      yield put(push(`/verify-secondary-mobile-number`));
      yield put(addsecondaryphonenumbersuccess(payload.mobileNumber));
    } else {
      yield put(push(`/add-secondary-mobile-number`));
    }
    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}
function* verifysecondarymobilefunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      otpCode: payload.otpCode,
      phone: payload.phone,
      userId: payload.userId,
      deviceId: DEVICE_ID,
    };
    let mobilesecondryverify = true;
    console.log("verifysecondarymobilefunc in saga------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axiosConfig.post(
      "otp_generation_svc/pb/verify/otp/plexaar/",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.statusCode === 0) {
      yield put(push(`/Profile`));
      console.log("-");
      yield put(verfysecondarymobilesuccess(mobilesecondryverify));
    } else {
      yield put(push(`/verify-secondary-mobile-number`));
      alert("worng otp");
      payload.setIsLoading(false);
    }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* sendotpsecondarymobilefunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      type: payload.type,
    };

    console.log("add secondary email------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    payload.setIsLoading1(true);
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendMobileOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      yield put(push(`/verify-secondary-mobile-number`));
      alert("code delivered");
      payload.setIsLoading1(false);
    } else {
      // yield put(push(`/allemailsuser`));
      alert("api failed");
      payload.setIsLoading1(false);
    }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading1(false);
  }
}

function* getallgendersfunc({ payload }) {
  // const token = yield select(makeSelectAuthToken());
  console.log("hiiiiiiiiiiiiiiii ---------------------->", payload);

  try {
    // payload.setIsLoading(true);
    // Reload the window
    // console.log("payload get user data ---------------------->", payload.id);
    // const useridlogin = payload.id;
    const response = yield axios.get(
      `plexaar_signup_svc/pv/genders/getAllGender`
    );
    // {
    //   headers: {
    //     Authorization: `Token  ${token}`,
    //   },
    // });
    console.log("response datattttt", response.data.result.genders);
    yield put(getallgenderssuccess(response.data.result.genders));
    // payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* sendgenderfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      genderId: payload.genderId,
      modifiedBy: payload.modifiedBy,
    };

    // console.log("add secondary email------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addUsergender",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    yield put(push(`/Profile`));
    // yield put(sendotopemailsuccess(sendgendersuccess));
    // if(response.data.code === 0){
    //   yield put(push(`/verify-secondary-mobile-number`));
    //   alert("code delivered")
    // }else{
    //   // yield put(push(`/allemailsuser`));
    //   alert("api failed")
    // }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* addsobfunctionfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      dob: payload.dob,
      modifiedBy: payload.modifiedBy,
    };

    // console.log("add secondary email------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pv/users/addUserDob",
      data
    );
    yield put(push(`/Profile`));
    // console.log(
    //   "userid in saga verify mobile response------------------->",
    //   response.data
    // );
    // if(response.data.ccode === 0){
    //   yield put(push(`/add-secondary-email-otp-verify`));
    //   yield put(addsecondaryemailsuccess(payload.email));
    // }else{
    //   yield put(push(`/add-secondary-email`));
    // }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    // payload.setIsLoading(false);
  }
}

function* signinuserfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    payload.setIsLoading(true);
    let data = {
      email: payload.email,
      password: payload.password,
    };
    // console.log("userid in saga------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/signIn",
      data
    );
    if (response.data.code === 1) {
      alert("wrong password entered");
    } else if (response.data.code === 0) {
      alert("correct password");
      yield put(push(`/Profile`));
    } else {
      alert("there is different response code");
    }

    console.log("new response login", response);
    payload.setIsLoading(false);
  } catch (error) {
    alert("wrong password");
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* resendprimarymobilefunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      type: payload.type,
    };
    payload.setIsLoading(true);
    console.log("add primary mobile-------------------<><><><>", data);
    // yield put(sendotopemailsuccess(payload));
    payload.setIsLoading(true);
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendMobileOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      yield put(push(`/verify-number`));
      alert("code delivered");
      payload.setIsActive(true);
      payload.setIsLoading(false);
      // payload.setIsLoading(false);
    } else {
      // yield put(push(`/allemailsuser`));
      alert("api failed");
      payload.setIsLoading(false);
      // payload.setIsLoading(false);
    }
    payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    // payload.setIsLoading(false);
    payload.setIsLoading(false);
    // payload.setIsLoading(false);
  }
}

function* resendprimaryemailnewotpfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // console.log("new><><><><><<><><><><><><><><><>",payload.setIsLoadingresend(true))

    let data = {
      id: payload.id,
      type: payload.type,
    };
    payload.setIsLoadingresend(true);
    console.log("add secondary email------------------->", data);
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendEmailOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      alert("code resent");
      payload.setIsActive(true);
      payload.setIsLoadingresend(false);
    } else {
      alert("api failed");
      payload.setIsLoadingresend(false);
    }
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoadingresend(false);
  }
}

function* resendotpsecondaryfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      type: payload.type,
    };
    payload.setIsLoadingresend(true);
    console.log("add secondary email------------------->", data);
    yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendEmailOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      yield put(push(`/add-secondary-email-otp-verify`));
      payload.setIsActive(true);
      payload.setIsLoadingresend(false);
      alert("code delivered");
    } else {
      yield put(push(`/allemailsuser`));
      payload.setIsLoadingresend(false);
      alert("api failed");
    }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* resendprimarymobilenewfunc({ payload }) {
  try {
    console.log("sendotpreduces-----------------------------/////", payload);
    // payload.setIsLoading(true);
    let data = {
      id: payload.id,
      type: payload.type,
    };
    payload.setIsLoadingresend(true);
    console.log("add secondary email------------------->", data);
    // yield put(sendotopemailsuccess(payload));
    const response = yield axios.post(
      "plexaar_signup_svc/pb/users/resendMobileOtp",
      data
    );
    console.log(
      "userid in saga verify mobile response------------------->",
      response.data
    );
    if (response.data.code === 0) {
      alert("code delivered");
      payload.setIsActive(true);
      payload.setIsLoadingresend(false);
    } else {
      // yield put(push(`/allemailsuser`));
      alert("api failed");
      payload.setIsLoadingresend(false);
    }
    // payload.setIsLoading(false);
  } catch (error) {
    // yield sagaErrorHandler(error.response.data);
    // payload.setIsLoading(false);
    payload.setIsLoadingresend(false);
  }
}

//////////////////////////////////////

export function* watchLogin() {
  yield takeLatest(LOGIN, loginUser);
}
export function* watchRegister() {
  yield takeLatest(REGISTER_USER, registerUser);
}
export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordRequest);
}
export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordRequest);
}
export function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePasswordRequest);
}

///////////////////////////////////////////////////binders for plexar
export function* registerapibinder() {
  yield takeLatest(REGISTERAPI, registeruser);
}
export function* sendotpbinder() {
  yield takeLatest(SEND_OTP_EMAIL, sendotpemail);
}
export function* setpasswordbinder() {
  yield takeLatest(SET_USER_PASSWORD, setuserrpasswordfunc);
}
export function* adduserprofilebinder() {
  yield takeLatest(ADD_USER_PROFILE, adduserprofilefunc);
}
export function* addusermobilebinder() {
  yield takeLatest(ADD_USER_MOBILE, addusermobilefunc);
}
export function* mobileotpverifyybinder() {
  yield takeLatest(MOBILE_OTP_VERIFY, mobileotpvrtifyy);
}
export function* getuserbyloginbinder() {
  yield takeLatest(GET_USER_DATA_AFTER_LOGIN, getuserdetaillogin);
}
export function* addsecondaryemailbinder() {
  yield takeLatest(ADD_SECONDARY_EMAIL, addsecondaryemailfunc);
}
export function* verifysecondarymailbinder() {
  yield takeLatest(VERIFY_SECONDARY_EMAIL, verifysecondaryemailfunc);
}
export function* sendotpsecondarybinder() {
  yield takeLatest(SEND_OTP_SECONDRY_EMAIL, sendotpsecondaryfunc);
}

export function* addsecondaryphonebinder() {
  yield takeLatest(ADD_SECONDARY_PHONE_NUMBER, addsecondaryphonefunc);
}

export function* verifysecondarymobilebinder() {
  yield takeLatest(VERIFY_SECONDARY_MOBILE, verifysecondarymobilefunc);
}
export function* resendsecondarymobilebinder() {
  yield takeLatest(RESEND_OTP_MOBILE, sendotpsecondarymobilefunc);
}

export function* getallusersgenderbinder() {
  yield takeLatest(GET_ALL_GENDERS, getallgendersfunc);
}

export function* sendgenderbinder() {
  yield takeLatest(SEND_GENDER, sendgenderfunc);
}

export function* adddobbinder() {
  yield takeLatest(ADD_DOB, addsobfunctionfunc);
}

export function* signinuserfuncbinder() {
  yield takeLatest(SIGNIN_USER, signinuserfunc);
}

export function* otpmobileprimaryfuncbinder() {
  yield takeLatest(RESEND_MOBILE_PRIMARY_OTP, resendprimarymobilefunc);
}

export function* resendprimaryemailnewotpfuncbinder() {
  yield takeLatest(RESEND_OTP_NEW_PRIMARY_EMAIL, resendprimaryemailnewotpfunc);
}

export function* resendotpsecondaryfuncbinder() {
  yield takeLatest(RESEND_OTP_SECONDARY_EMAIL, resendotpsecondaryfunc);
}

export function* resendotpsecondarymobilefuncbinder() {
  yield takeLatest(NEW_OTP_RESEND_PRIMARY_MOBILE, resendprimarymobilenewfunc);
}

///////////////////////////////

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchChangePassword),
    fork(registerapibinder),
    fork(sendotpbinder),
    fork(setpasswordbinder),
    fork(adduserprofilebinder),
    fork(addusermobilebinder),
    fork(mobileotpverifyybinder),
    fork(getuserbyloginbinder),
    fork(addsecondaryemailbinder),
    fork(verifysecondarymailbinder),
    fork(sendotpsecondarybinder),
    fork(addsecondaryphonebinder),
    fork(verifysecondarymobilebinder),
    fork(resendsecondarymobilebinder),
    fork(getallusersgenderbinder),
    fork(sendgenderbinder),
    fork(adddobbinder),
    fork(signinuserfuncbinder),
    fork(otpmobileprimaryfuncbinder),
    fork(resendprimaryemailnewotpfuncbinder),
    fork(resendotpsecondaryfuncbinder),
    fork(resendotpsecondarymobilefuncbinder),
  ]);
}
