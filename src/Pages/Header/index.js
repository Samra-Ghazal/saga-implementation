import * as React from "react";
import Box from "@mui/material/Box";
import InputTextField from "../TextField";
import { FiSearch, FiFilter } from "react-icons/fi";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Header = ({
  data,
  OnSearch,
  rowData,
  setRowData,
  heading,
  buttonText,
  link,
  flag,
  record,
}) => {
  const history = useHistory();
  return (
    <div className="d-flex">
      <Box
        sx={{
          flex: 1,
          width: "100%",
          border: "1px solid #ededed",
          bgcolor: "background.paper",
        }}
      >
        {" "}
        <div className="d-flex flex-wrap justify-content-between ps-4 pe-4 pt-2 align-items-center">
          <h4 className="mb-3">{heading}</h4>
          {!flag && (
            <div className="d-flex flex-wrap">
              {/* Search Input Field */}
              <div className="d-flex align-items-center me-2 mb-2">
                <InputTextField
                  id="input-with-icon-textfield-search"
                  placeholder="Search Here.."
                  onChange={(e) => OnSearch(e.target.value, data, setRowData)}
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                      backgroundColor: "#fff",
                      height: "30px",
                      border: "1px solid #E0E3E7",
                      transition: "border-color, background-color, box-shadow",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    },
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <FiSearch
                        style={{ color: "#b2b2b2", fontSize: "20px" }}
                      />
                    </InputAdornment>
                  }
                />
              </div>
              <div className="d-flex align-items-center me-2 mb-2">
                <IconButton
                  style={{
                    boxShadow: "#1e1d1d",
                    width: "30px",
                    height: "30px",
                    borderRadius: "4px",
                    border: "1px solid #b2b2b2",
                  }}
                >
                  <FiFilter style={{ color: "#b2b2b2", fontSize: "20px" }} />
                </IconButton>
              </div>
              {/* Create Button */}
              <div>
                {/* <NavLink to={"/add-business"} className=""> */}
                <Button
                  sx={{
                    backgroundColor: "#538dff",
                    height: "30px",
                    borderRadius: "4px",
                    textTransform: "capitalize",
                  }}
                  variant="contained"
                  onClick={() => {
                    const data = {
                      data: record,
                      actionState: "new",
                    }; // handleClick(record);
                    history.push(link, { data });
                  }}
                >
                  {buttonText}
                </Button>
                {/* </NavLink> */}
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Header;
