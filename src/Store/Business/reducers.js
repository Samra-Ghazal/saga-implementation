import {
  FETCH_BUSINESS_REQUEST,
  FETCH_BUSINESS_SUCCESS,
  FETCH_BUSINESS_FAILURE,
  ADD_BUSINESS_REQUEST,
} from './actionType';

const initialState = {
  rowData: [],
  data: [],
  record:null,
  loading: false,
  error: null,
};

const Business = (state = initialState, action) => {
  console.log(action,"ACTION")
  switch (action.type) {
    case FETCH_BUSINESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_BUSINESS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        rowData: action.payload,
      };
    case FETCH_BUSINESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      // case ADD_BUSINESS_REQUEST:
      //   return{
      //     ...state,
      //     record:action.payload
      //   }
    default:
      return state;
  }
};

export default Business;
