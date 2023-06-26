import { toast } from "react-toastify";
import dayjs from "dayjs";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";

const DATE = "YYYY-MM-DD";
const TIME = "HH:mm:ss";
const TIMES = "HH:mm:ss";
export const FormateDate = (str) => {
  return str ? dayjs(str).format(DATE) : "";
};
export const FormateTimes = (str) => {
  return str ? dayjs(str).format(TIMES) : "";
};

export const FormateTime = (str) => {
  return str ? dayjs(str).format(TIME) : "";
};
export const DataNotFound = () => {
  return (
    <div className="text-center w-100">
      <img
        className="mw-100 object-fit-contain"
        src="images/not-found.png"
        alt="Data Not Found!"
      />
    </div>
  );
};
const CustomTextField = styled(TextField)({
  "& .MuiFilledInput-root": {
    borderRadius: 1,
    backgroundColor: "#fff",
    border: "1px solid #E0E3E7",

    transition: "border-color, background-color, box-shadow",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.25)",
      borderColor: "#007BFF",
    },
    "& .MuiFilledInput-underline": {
      border: "2px solid red",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "2px solid red", // Remove the underline
    },
    "& .MuiInputBase-root": {
      "& input": {
        borderBottom: "none", // Remove the underline
      },
    },
  },
});
const businessList = [
  {
    tab: "business-list",
    name: "Business List",
    status: "business",
    id: "business-list-tab",
    type: "businessList",
    url: "/",
  },
];

const addBussiness = [
  ...businessList,
  {
    tab: "new-business",
    name: "New Business",
    status: "new-business",
    id: "new-business-tab",
    type: "addBussiness",
    url: "/add-business",
  },
];

const departmentList = [
  ...businessList,
  {
    tab: "department-list",
    name: "Department List",
    status: "department",
    id: "department-list-tab",
    type: "departmentList",
    url: "/department",
  },
];

const addDepartment = [
  ...departmentList,
  {
    tab: "new-department",
    name: "New Department",
    status: "new-department",
    id: "new-department-tab",
    type: "addDepartment",
    url: "/add-department",
  },
];

const teamList = [
  ...departmentList,
  {
    tab: "team-list",
    name: "Team List",
    status: "team",
    id: "team-list-tab",
    type: "teamList",
    url: "/team",
  },
];

const addTeam = [
  ...teamList,
  {
    tab: "new-team",
    name: "New Team",
    status: "new-team",
    id: "new-team-tab",
    type: "addTeam",
    url: "/add-team",
  },
];

const userList = [
  ...teamList,
  {
    tab: "user-list",
    name: "User List",
    status: "user",
    id: "user-list-tab",
    type: "userList",
    url: "/users",
  },
];

const addUser = [
  ...userList,
  {
    tab: "new-user",
    name: "New User",
    status: "new-user",
    id: "new-user-tab",
    type: "addUser",
    url: "/add-user",
  },
];
const servicesArray = [
  { id: 1, service: "Plumbing" },
  { id: 2, service: "Electrical" },
  { id: 3, service: "Manicure Pedicure" },
  { id: 4, service: "Barber" },
  { id: 5, service: "Baby Sitter" },
  { id: 6, service: "Plumbing" },
  { id: 7, service: "Electrical" },
  { id: 8, service: "Manicure Pedicure" },
  { id: 9, service: "Barber" },
  { id: 10, service: "Baby Sitter" },
];
export const tabsList = {
  businessList: businessList,
  addBussiness: addBussiness,
  departmentList: departmentList,
  addDepartment: addDepartment,
  teamList: teamList,
  addTeam: addTeam,
  userList: userList,
  addUser: addUser,
};
export { servicesArray, CustomTextField };
export const success = (value, option = {}) => toast.success(value, option);
export const error = (value, option = {}) => toast.error(value, option);
