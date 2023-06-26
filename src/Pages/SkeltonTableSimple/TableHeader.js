import { Skeleton } from "@mui/material";
import React from "react";
const Columns = [
  {
    id: "Name",
    label: "Currency",
    class: "text-left px-4 bg-white border-0 border-bottom-amotius",
  },
  {
    id: "type",
    label: "Chain",
    class: "text-left bg-white  border-0 border-bottom-amotius",
  },
  {
    id: "price",
    label: "Price",
    class: "text-left bg-white border-0 border-bottom-amotius ",
  },
  {
    id: "liquidityInPool",
    label: "Liquidity In Pool",
    class: "text-left bg-white border-0 border-bottom-amotius ",
  },
  {
    id: "risk",
    label: "Risk",
    class: "text-left bg-white  border-0 border-bottom-amotius",
  },
  {
    id: "status",
    label: "Status",
    class: "text-left bg-white  border-0 border-bottom-amotius",
  },
  {
    id: "actions",
    label: "actions",
    class: "text-center bg-white  border-0 border-bottom-amotius",
  },
];
const TableHeader = () => {
  return (
    <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
      <tr>
        {Columns.map((headCell) => (
          <th key={headCell.label} className={headCell.class}>
            <Skeleton
              animation="wave"
              height={66}
              width="100%"
              style={{ marginTop: "-7px" }}
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;
