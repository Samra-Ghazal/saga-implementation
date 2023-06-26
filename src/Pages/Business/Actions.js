import React, { useCallback, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Actions = (props) => {
  const history = useHistory();
  const { index, row, actionLoading, deleteBusiness, action } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [anchorEl]
  );
  const handleEditClick = (row) => {
    const data = {
      data: row,
      action: action,
    };
    history.push("/add-business", { data });
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [anchorEl]);

  return (
    <>
      <Button
        disabled={actionLoading}
        id={"action-button-" + index}
        size={"small"}
        onClick={handleClick}
        className="d-30 btn-pill p-0 btn-icon"
      >
        <BsThreeDotsVertical
          style={{ color: "#9a9999", fontSize: 20, marginLeft: "10px" }}
        />
      </Button>

      <Menu
        id={"action-menu-" + index}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!row.verified && (
          <>
            <MenuItem
              id={"email-verification-" + index}
              className="pr-5 px-3 text-success"
              onClose={handleClose}
              onClick={() => {
                handleEditClick(row);
                handleClose();
              }}
            >
              {"Edit"}

              {/* <div className="">
              <GrPowerReset
                style={{ color: "#b2b2b2", fontSize: 20, marginLeft: "10px" }}
              />
            </div> */}
            </MenuItem>
            <MenuItem
              id={"delete-business-" + index}
              className="pr-5 px-3 text-danger"
              onClose={handleClose}
              onClick={() => {
                deleteBusiness(row.id);
                handleClose();
              }}
            >
              {"Delete"}

              {/* <div className="">
            <GrPowerReset
              style={{ color: "#b2b2b2", fontSize: 20, marginLeft: "10px" }}
            />
          </div> */}
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};
export default Actions;
