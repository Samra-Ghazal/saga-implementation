import React from "react";
import PropTypes from "prop-types";
import TableSortLabel from "@mui/material/TableSortLabel";
import { TableRow, TableCell, TableHead } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const TableHeader = (props) => {
  const {
    order,
    orderBy,
    onRequestSort,
    column,
    selectedCheckboxes,
    handleHeaderCheckboxChange,
    rowCount,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead className="thead-light text-capitalize font-size-sm font-weight-bold">
      <TableRow>
        <TableCell
          style={{
            border: "1px solid #ededed",
            borderTop: " 4px solid #548dff",
          }}
          padding="checkbox"
        >
          <Checkbox
            color="primary"
            indeterminate={
              selectedCheckboxes.length > 0 &&
              selectedCheckboxes.length < rowCount
            }
            checked={selectedCheckboxes.length === rowCount}
            onChange={handleHeaderCheckboxChange}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {column.map((headCell, index) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            style={{
              minWidth: headCell.minWidth,
              color: headCell.color,
              border: headCell.border,
              borderTop: index === 0 ? "4px solid #548dff" : headCell.borderTop,
            }}
            className={headCell.class}
            // sortdirection={orderBy === headCell.id ? order : "false"}
          >
            {headCell.sort ? (
              <TableSortLabel
                id={"sort-table" + index}
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
TableHeader.propTypes = {
  onRequestSort: PropTypes.func,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
export default TableHeader;
