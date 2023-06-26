import produce from "immer";
import {
  REGISTER_USER_SUCCESSFUL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTERAPI_SUCCESS,
  SEND_OTP_SUCCESS_EMAIL,
  SET_USER_PASSWORD_SUCCESS,
  ADD_USER_MOBILE_SUCCESS,
  GET_USER_DATA_AFTER_LOGIN_SUCCESS,
  ADD_SECONDARY_EMAIL_SUCCESS,
  VERIFY_SECONDARY_EMAIL_SUCCESS,
  VERIFY_SECONDARY_MOBILE_SUCCESS,
  GET_ALL_GENDERS_SUCCESS,
  ADD_SECONDARY_PHONE_NUMBER_SUCCESS,
  MOBILE_OTP_VERIFY_SUCCESS,
} from "./actionTypes";

const initialState = {
  user: null,
  role: null,
  token: null,
  registersuccess: null,
  registersuccessId: null,
  otpuser: null,
  alluserdata: null,
  mobilenumberreducer: null,
  alluserdataafterlogin: null,
  secondaryemailsuccess: null,
  allgenders: null,
  secondaryMobile: null,
  primaryEmailVerify: null,
};

const Auth = produce((state, action) => {
  switch (action.type) {
    case LOGOUT:
      // console.log("logoutttttttt");
      // state.user = null;
      // state.token = null;
      // state.role = null;
      state.registersuccessId = null;
      state.alluserdataafterlogin = null;
      break;
    case LOGIN_SUCCESS:
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.token = action.payload.token;
      break;
    case REGISTER_USER_SUCCESSFUL:
      state.user = action.payload.user;
      state.token = action.payload.accesToken;
      break;
    case REGISTERAPI_SUCCESS:
      state.registersuccess = action.payload;
      state.registersuccessId = action.payload.result.id;
      console.log("reducer success register", action.payload.result.id);
      break;
    case SEND_OTP_SUCCESS_EMAIL:
      state.otpuser = action.payload.otpCode;
      console.log("reducer success register", action.payload.otpCode);
      break;
    case SET_USER_PASSWORD_SUCCESS:
      state.alluserdata = action.payload;
      console.log("reducer success register", action.payload);
      break;
    case ADD_USER_MOBILE_SUCCESS:
      state.mobilenumberreducer = action.payload;
      console.log("+++++++++++++++++++++++++++++++++++++++++", action.payload);
      break;
    case GET_USER_DATA_AFTER_LOGIN_SUCCESS:
      state.alluserdataafterlogin = action.payload;
      console.log(
        "reducer success register----> payload from mobile verification<_+_+_+_+_+_+_+_+_+_+_----",
        action.payload
      );
      break;
    case ADD_SECONDARY_EMAIL_SUCCESS:
      return {
        ...state,
        secondaryEmail: action.payload,
        alluserdataafterlogin: [
          { ...state.alluserdataafterlogin[0], secondaryEmail: action.payload },
        ],
      };
      break;
    case VERIFY_SECONDARY_EMAIL_SUCCESS:
      // console.log("-----><><><---------",action.payload)
      return {
        ...state,
        secondaryEmailVerify: action.payload,
        alluserdataafterlogin: [
          {
            ...state.alluserdataafterlogin[0],
            secondaryEmailVerify: action.payload,
          },
        ],
      };
      break;
    case ADD_SECONDARY_EMAIL_SUCCESS:
      // console.log("-----><><><---------",action.payload)
      return {
        ...state,
        secondaryMobile: action.payload,
        alluserdataafterlogin: [
          {
            ...state.alluserdataafterlogin[0],
            secondaryMobile: action.payload,
          },
        ],
      };
      break;
    case VERIFY_SECONDARY_MOBILE_SUCCESS:
      // console.log("-----><><><---------",action.payload)
      return {
        ...state,
        secondaryMobileVerify: action.payload,
        alluserdataafterlogin: [
          {
            ...state.alluserdataafterlogin[0],
            secondaryMobileVerify: action.payload,
          },
        ],
      };
      break;
    case ADD_SECONDARY_PHONE_NUMBER_SUCCESS:
      // console.log("-----><><><---------",action.payload)
      return {
        ...state,
        secondaryMobile: action.payload,
        alluserdataafterlogin: [
          {
            ...state.alluserdataafterlogin[0],
            secondaryMobile: action.payload,
          },
        ],
      };
      break;

    case GET_ALL_GENDERS_SUCCESS:
      state.allgenders = action.payload;
      console.log(
        "reducer success register----> payload from mobile verification<----",
        action.payload
      );
      break;
    case MOBILE_OTP_VERIFY_SUCCESS:
      console.log(
        "-----><><><><><><><><><><><><><><><><><><><><><><><><---------",
        action.payload
      );
      return {
        ...state,
        primaryEmailVerify: action.payload,
        alluserdataafterlogin: [
          {
            ...state.alluserdataafterlogin[0],
            primaryEmailVerify: action.payload,
          },
        ],
      };
      break;

    default:
      break;
  }
}, initialState);

export default Auth;
