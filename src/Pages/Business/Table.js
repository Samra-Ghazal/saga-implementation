import React, { useState, useCallback, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { businessMange } from "./helper";
import TableHeader from "../TableHeader";
import TableRows from "./TableRow";
import Skeleton from "@mui/material/Skeleton";
import ClipLoader from "react-spinners/ClipLoader";
import { deleteBusiness } from "../../services/business";
import { error, success } from "../../utils";
import { businessList } from "../../utils/constant";
import DialogBox from "../DialogBox";

const TableData = (props) => {
  const { data, loading, record, setRecord } = props;
  console.log(data, loading, record, setRecord,"jhkjhjkkjhkjj")
  const [rowData, setRowData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("CreatedAt");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [dialog, setDialog] = useState({ visible: false });
  const action = "edit";
  useEffect(() => {
    setRowData(data);
    // searchBinding(setSearchBar, setRowData, blogs);
  }, [data]);
  //Use Effect To set RowData on searching
  useEffect(() => {
    setPage(0);
  }, [data]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);
    setPage(0);
  };
  const [drawerToggle, setDrawerToggle] = useState(false);
  const toggleDrawerHandler = useCallback(() => {
    setDrawerToggle(!drawerToggle);
  }, [drawerToggle]);
  const handleHeaderCheckboxChange = (event) => {
    if (event.target.checked) {
      const newSelectedCheckboxes = data.map((item) => item.name);
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else {
      setSelectedCheckboxes([]);
    }
  };

  const handleRowCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedCheckboxes((prevSelectedCheckboxes) => [
        ...prevSelectedCheckboxes,
        id,
      ]);
    } else {
      setSelectedCheckboxes((prevSelectedCheckboxes) =>
        prevSelectedCheckboxes.filter((checkboxId) => checkboxId !== id)
      );
    }
  };
  const handleRequestSort = useCallback(
    (event, property) => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    },
    [order, orderBy]
  );

  const removeBusiness = (id) => {
    deleteBusiness(id).then((res) => {
      if (res.statusCode === 0) {
        success(businessList.BUSINESS_DELETE);
        setRecord(rowData.filter((item) => item.id !== id));
      } else {
        error(res.message);
      }
    });
  };
  //Delete busienss Confirmation Dialouge Box handler
  const handleBusinessDeleteConfirmation = (id) => {
    setDialog({
      visible: true,
      key: Math.random().toString(36).substring(7),
      ok: () => removeBusiness(id),
    });
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <>
        <DialogBox
          {...dialog}
          header={businessList.DELETE_BUSINESS}
          message={businessList.WANT_TO_DELETE_BUSINESS}
        />
        <TableContainer sx={{ maxHeight: 1000 }}>
          <Table size="small" stickyHeader aria-label="sticky table">
            {loading ? (
              <Skeleton
                animation="wave"
                height={66}
                width="100%"
                style={{ marginTop: "-7px" }}
              />
            ) : (
              <TableHeader
                column={businessMange}
                onRequestSort={handleRequestSort}
                orderBy={orderBy}
                order={order}
                selectedCheckboxes={selectedCheckboxes}
                handleHeaderCheckboxChange={handleHeaderCheckboxChange}
                rowCount={data.length}
              />
            )}
            {loading ? (
              <Skeleton
                animation="wave"
                height={100}
                width="100%"
                style={{ marginTop: "-7px" }}
              />
            ) : (
              <TableBody>
                {loading ? (
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="100%"
                    style={{ marginTop: "-7px" }}
                  />
                ) : (
                  <TableRows
                    rowData={rowData}
                    action={action}
                    record={record}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    loading={loading}
                    selectedCheckboxes={selectedCheckboxes}
                    handleRowCheckboxChange={handleRowCheckboxChange}
                    toggleDrawerHandler={toggleDrawerHandler}
                    deleteBusiness={handleBusinessDeleteConfirmation}
                  />
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rowData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    </Paper>
  );
};
export default TableData;
