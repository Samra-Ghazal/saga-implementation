import { TEAM_API_ENDPOINTS } from "../configs/config";
import makeRequest from "./requestCall";

async function addTeam(data) {
  return makeRequest(TEAM_API_ENDPOINTS.ADD_TEAM, "post", data);
}

async function getTeam(data) {
  return makeRequest(TEAM_API_ENDPOINTS.GET_TEAM, "get", data);
}

async function editTeam(data, id) {
  return makeRequest(`${TEAM_API_ENDPOINTS.EDIT_TEAM}${id}/`, "patch", data);
}
async function deleteTeam(id) {
  return makeRequest(`${TEAM_API_ENDPOINTS.DELETE_TEAM}${id}`, "delete");
}

export { addTeam, getTeam, editTeam, deleteTeam };
