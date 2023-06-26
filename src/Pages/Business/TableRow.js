import React from "react";
import Actions from "./Actions";
import Avatar from "@mui/material/Avatar";
import { DataNotFound } from "../../utils";
import TableCell from "@mui/material/TableCell";
import { deepPurple } from "@mui/material/colors";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "@mui/material";
import { useHistory } from "react-router-dom";

const TableRows = (props) => {
  const {
    rowData,
    action,
    toggleDrawerHandler,
    selectedCheckboxes,
    handleRowCheckboxChange,
    deleteBusiness,
    rowsPerPage,
    page,
  } = props;
  const history = useHistory();
  const tableData = rowData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  const handleClick = (row) => {
    history("/department", { row });
  };
  return (
    <>
      {tableData.length > 0 ? (
        tableData.map((row, index) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
              <TableCell
                style={{ border: "1px solid #ededed" }}
                padding="checkbox"
              >
                <Checkbox
                  checked={selectedCheckboxes.includes(row.name)}
                  onChange={(event) => handleRowCheckboxChange(event, row.name)}
                />
              </TableCell>{" "}
              <TableCell style={{ border: "1px solid #ededed" }}>
                <Link
                  underline="none"
                  onClick={() => {
                    handleClick(row);
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{ cursor: "pointer" }}
                      className="text-white d-flex align-items-center justify-content-center rounded-pill mr-3 text-purple"
                    >
                      {row && row.imageUrl ? (
                        <Avatar
                          src={row.imageUrl}
                          alt={"not-found"}
                          variant="rounded"
                          className=""
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: 10,
                          }}
                        />
                      ) : (
                        <div
                          style={{ cursor: "pointer" }}
                          className="d-flex align-items-center"
                        >
                          <div className="text-white d-flex align-items-center justify-content-center rounded-pill mr-3 text-purple">
                            <Avatar
                              sx={{
                                bgcolor: deepPurple[500],
                                width: "30px",
                                height: "30px",
                                marginRight: 2,
                              }}
                            >
                              <span>NP</span>
                            </Avatar>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      {row.name ? (
                        <div
                          style={{ cursor: "pointer" }}
                          className="font-size-sm text-capitalize text-primary"
                        >
                          <span className="bolds">{row.name}</span>
                        </div>
                      ) : (
                        "UserName"
                      )}
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell
                style={{ border: "1px solid #ededed" }}
                className="text-center"
              >
                <span className="bolds">{row.designation}</span>
              </TableCell>
              <TableCell
                style={{ border: "1px solid #ededed" }}
                className="text-center"
              >
                <span style={{ textTransform: "capitalize" }} className="bolds">
                  {row.businessAddress.addressName}
                </span>
              </TableCell>
              <TableCell
                style={{
                  backgroundColor:
                    row.status &&
                    (row.status.toLowerCase() === "pending"
                      ? "#e9b67a"
                      : row.status.toLowerCase() === "active"
                      ? "#b8d693"
                      : row.status.toLowerCase() === "suspended"
                      ? "#cc7474"
                      : "transparent"),

                  border: "1px solid #ededed",
                }}
                className="text-center"
              >
                <span className="statusText">{row.status}</span>
              </TableCell>
              <TableCell
                style={{ border: "1px solid #ededed" }}
                className="text-center"
                id={"action-" + index}
              >
                <Actions
                  row={row}
                  index={index}
                  action={action}
                  toggleDrawerHandler={toggleDrawerHandler}
                  deleteBusiness={deleteBusiness}
                />
              </TableCell>
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={7} align="center">
            <DataNotFound />{" "}
          </TableCell>
        </TableRow>
      )}
    </>
  );
};
export default TableRows;
