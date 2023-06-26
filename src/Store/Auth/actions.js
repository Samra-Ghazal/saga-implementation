import {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  LOGOUT,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  REGISTERAPI,
  REGISTERAPI_SUCCESS,
  SEND_OTP_EMAIL,
  SEND_OTP_SUCCESS_EMAIL,
  SET_USER_PASSWORD,
  ADD_USER_PROFILE,
  SET_USER_PASSWORD_SUCCESS,
  ADD_USER_MOBILE,
  ADD_USER_MOBILE_SUCCESS,
  MOBILE_OTP_VERIFY,
  MOBILE_OTP_VERIFY_SUCCESS,
  GET_USER_DATA_AFTER_LOGIN_SUCCESS,
  GET_USER_DATA_AFTER_LOGIN,
  ADD_SECONDARY_EMAIL,
  ADD_SECONDARY_EMAIL_SUCCESS,
  VERIFY_SECONDARY_EMAIL,
  VERIFY_SECONDARY_EMAIL_SUCCESS,
  SEND_OTP_SECONDRY_EMAIL,
  ADD_SECONDARY_PHONE_NUMBER,
  ADD_SECONDARY_PHONE_NUMBER_SUCCESS,
  VERIFY_SECONDARY_MOBILE,
  VERIFY_SECONDARY_MOBILE_SUCCESS,
  RESEND_OTP_MOBILE,
  GET_ALL_GENDERS,
  GET_ALL_GENDERS_SUCCESS,
  SEND_GENDER,
  SEND_GENDER_SUCCESS,
  ADD_DOB,
  ADD_DOB_SUCCESS,
  SIGNIN_USER,
  RESEND_MOBILE_PRIMARY_OTP,
  RESEND_OTP_NEW_PRIMARY_EMAIL,
  RESEND_OTP_SECONDARY_EMAIL,
  NEW_OTP_RESEND_PRIMARY_MOBILE,
} from "./actionTypes";

export const loginUser = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};

export const registerUserSuccessful = (data) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: data,
  };
};

export const forgotPassword = (data) => {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
};

export const resetPassword = (data) => {
  return {
    type: RESET_PASSWORD,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const changePassword = (data) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
};

/////////////////////////////////////////////////////////plexar api

export const registerapi = (data) => {
  return {
    type: REGISTERAPI,
    payload: data,
  };
};

export const registerapisuccess = (data) => {
  return {
    type: REGISTERAPI_SUCCESS,
    payload: data,
  };
};

export const sendotopemail = (data) => {
  return {
    type: SEND_OTP_EMAIL,
    payload: data,
  };
};

export const sendotopemailsuccess = (data) => {
  return {
    type: SEND_OTP_SUCCESS_EMAIL,
    payload: data,
  };
};

export const setuserpassword = (data) => {
  console.log("data from actions setuserpassword", data);
  return {
    type: SET_USER_PASSWORD,
    payload: data,
  };
};


export const setuserpasswordsuccess = (data) => {
  console.log("data from actions setuserpassword", data);
  return {
    type: SET_USER_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const addusermobile = (data) => {
  console.log("data from actions setuserpassword", data);
  return {
    type: ADD_USER_MOBILE,
    payload: data,
  };
};

export const addusermobilesuccess = (data) => {
  console.log("data from actions setuserpassword", data);
  return {
    type: ADD_USER_MOBILE_SUCCESS,
    payload: data,
  };
};

export const verifymobileotp = (data) => {
  console.log("data from actions setuserpassword", data);
  return {
    type: MOBILE_OTP_VERIFY,
    payload: data,
  };
};

export const verifymobileotpsuccess = (data) => {
  return {
    type: MOBILE_OTP_VERIFY_SUCCESS,
    payload: data,
  };
};

export const adduserprofile = (data) => {
  return {
    type: ADD_USER_PROFILE,
    payload: data,
  };
};

export const getuserdataafterlogin = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: GET_USER_DATA_AFTER_LOGIN,
    payload: data,
  };
};

export const getuserdataafterloginsuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: GET_USER_DATA_AFTER_LOGIN_SUCCESS,
    payload: data,
  };
};

export const addsecondaryemail = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_SECONDARY_EMAIL,
    payload: data,
  };
};

export const addsecondaryemailsuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_SECONDARY_EMAIL_SUCCESS,
    payload: data,
  };
};

export const verifysecondaryemail = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: VERIFY_SECONDARY_EMAIL,
    payload: data,
  };
};

export const verifysecondaryemailsuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: VERIFY_SECONDARY_EMAIL_SUCCESS,
    payload: data,
  };
};

export const sendotpsecondary = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: SEND_OTP_SECONDRY_EMAIL,
    payload: data,
  };
};

export const addsecondaryphonenumber = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_SECONDARY_PHONE_NUMBER,
    payload: data,
  };
};

export const addsecondaryphonenumbersuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_SECONDARY_PHONE_NUMBER_SUCCESS,
    payload: data,
  };
};

export const verfysecondarymobile = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: VERIFY_SECONDARY_MOBILE,
    payload: data,
  };
};

export const verfysecondarymobilesuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: VERIFY_SECONDARY_MOBILE_SUCCESS,
    payload: data,
  };
};

export const resendotpmobile = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: RESEND_OTP_MOBILE,
    payload: data,
  };
};
export const getallgenders = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: GET_ALL_GENDERS,
    payload: data,
  };
};

export const getallgenderssuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: GET_ALL_GENDERS_SUCCESS,
    payload: data,
  };
};

export const sendgender = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: SEND_GENDER,
    payload: data,
  };
};

export const sendgendersuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: SEND_GENDER_SUCCESS,
    payload: data,
  };
};

export const adddob = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_DOB,
    payload: data,
  };
};

export const adddobsuccess = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: ADD_DOB_SUCCESS,
    payload: data,
  };
};

export const signinuser = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: SIGNIN_USER,
    payload: data,
  };
};

export const resendprimaryotpmobile = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: RESEND_MOBILE_PRIMARY_OTP,
    payload: data,
  };
};

export const resendnewprimaryemailotp = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: RESEND_OTP_NEW_PRIMARY_EMAIL,
    payload: data,
  };
};

export const resendnewsecondaryemailotp = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: RESEND_OTP_SECONDARY_EMAIL,
    payload: data,
  };
};

export const resendnewsecondarymobileotp = (data) => {
  console.log("data from actions setuserpassword ------------>", data);
  return {
    type: NEW_OTP_RESEND_PRIMARY_MOBILE,
    payload: data,
  };
};
