import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHeader from "./TableHeader";
import { ClimbingBoxLoader } from "react-spinners";
import { Card, Skeleton } from "@mui/material";
const SkeletonTable = (props) => {
  const length = ["0", "1", "2", "3"];
  return (
    <Card>
      <div className="card-header d-flex align-items-center justify-content-between card-header-alt px-4 ">
        {/* <Skeleton
          animation="wave"
          height={30}
          width="100%"
          style={{ marginTop: "-7px" }}
        /> */}
      </div>
      {props.loading ? (
        <div className="m-0 w-100 h-100 pb-5 d-flex justify-content-center align-items-center">
          <ClimbingBoxLoader color={"var(--first)"} />
        </div>
      ) : (
        <TableContainer>
          <Table className="table text-nowrap m-0">
            <TableHeader />
            <tbody>
              {length.map((row, index) => {
                return (
                  <tr key={index}>
                    <td
                      className="px-4 text-center font-size-xs w-100"
                      colSpan="6"
                    >
                      <div className="card-header d-flex align-items-center justify-content-between card-header-alt px-4 ">
                        <Skeleton
                          animation="wave"
                          height={30}
                          width="100%"
                          style={{ marginTop: "-7px" }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      )}
      <div className="divider" />
      <div className="card-footer px-4 py-0 d-flex justify-content-center">
        <Skeleton
          animation="wave"
          height={30}
          width="30%"
          style={{ marginTop: "-7px" }}
        />
      </div>
    </Card>
  );
};
export default SkeletonTable;
