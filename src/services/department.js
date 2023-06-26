import { DEPARTMENT_API_ENDPOINTS } from "../configs/config";
import makeRequest from "./requestCall";

async function addDepartment(data) {
  return makeRequest(DEPARTMENT_API_ENDPOINTS.ADD_DEPARTMENT, "post", data);
}

async function getDepartment(data) {
  return makeRequest(DEPARTMENT_API_ENDPOINTS.GET_DEPARTMENT, "get", data);
}

async function editDepartment(data, id) {
  return makeRequest(
    `${DEPARTMENT_API_ENDPOINTS.EDIT_DEPARTMENT}${id}/`,
    "patch",
    data
  );
}
async function deleteDepartment(id) {
  return makeRequest(
    `${DEPARTMENT_API_ENDPOINTS.DELETE_DEPARTMENT}${id}`,
    "delete"
  );
}

export { addDepartment, getDepartment, editDepartment, deleteDepartment };
