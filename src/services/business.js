import { BUSINESS_API_ENDPOINTS } from "../configs/config";
import makeRequest from "./requestCall";

async function addBusiness(data) {
  return makeRequest(BUSINESS_API_ENDPOINTS.ADD_BUSINESS, "post", data);
}

async function getBusiness() {
  return makeRequest(BUSINESS_API_ENDPOINTS.GET_BUSINESS, "get");
}

async function editBusiness(data, id) {
  return makeRequest(
    `${BUSINESS_API_ENDPOINTS.EDIT_BUSINESS}${id}/`,
    "patch",
    data
  );
}
async function deleteBusiness(id) {
  return makeRequest(
    `${BUSINESS_API_ENDPOINTS.DELETE_BUSINESS}${id}`,
    "delete"
  );
}

export { addBusiness, getBusiness, editBusiness, deleteBusiness };
