import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import { fetchBusinessSuccess, fetchBusinessFailure } from "./actions";
import { ADD_BUSINESS_FAILURE, ADD_BUSINESS_REQUEST, FETCH_BUSINESS_REQUEST } from "./actionType";

import { addBusiness, getBusiness } from "../../services/business";
import axiosConfig from "../../Routes/AxiosConfig";
import { error, success } from "../../utils";
import { businessList } from "../../utils/constant";

function* fetchBusiness() {
  try {
    const response = yield axiosConfig.get("b1/business");
    console.log("response token doctor portal", response.data);
    if (response.data.statusCode === 0) {
      success(businessList.BUSINESS_FETCH);
      yield put(fetchBusinessSuccess(response.data.result));
    } else {
      yield put(fetchBusinessFailure(response.data.message));
    }
  } catch (error) {
    yield put(fetchBusinessFailure(error.message));
  }
}
function* addBusinessSaga(action) {
  console.log("DATA",action)
  try {
    const { data } = action.payload;
    const jsonData = JSON.stringify(data);
    const response = yield axiosConfig.post("b1/business",jsonData);
    if (response.statusCode === 0) {
      success(businessList.BUSINESS_CREATE);
      yield put({ type: ADD_BUSINESS_REQUEST, payload: response.result });
    } else {
      error(response.message);
      yield put({ type: ADD_BUSINESS_FAILURE, payload: response.message });
    }
  } catch (error) {
    error('An error occurred while adding the business');
    yield put({ type: ADD_BUSINESS_FAILURE, payload: error.message });
  }
}
export function* fetchBusinessBinder() {
  yield takeLatest(FETCH_BUSINESS_REQUEST, fetchBusiness);
}
export function* addBusinessWatcher(){
  yield takeLatest(ADD_BUSINESS_REQUEST, addBusinessSaga)
}


export default function* businessSaga() {
  yield all([fork(fetchBusinessBinder)]);
  yield all([fork(addBusinessWatcher)])
  yield all([fork()])
}
