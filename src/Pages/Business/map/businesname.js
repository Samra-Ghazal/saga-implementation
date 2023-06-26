import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

const BusinessName = ({ result }) => {
  const businessImage = result && result.imageUrl;
  return (
    <>
      <div className="card px-3 py-2 mb-3 min-h-[250px] card-cont">
        <div className="d-flex align-items-center">
          {result && result.imageUrl ? (
            <div className="text-white d-flex align-items-center justify-content-center rounded-pill mr-3 text-purple">
              <Avatar
                src={businessImage}
                alt={"not-found"}
                variant="rounded"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: 10,
                }}
              />
            </div>
          ) : (
            <div className="text-white d-flex align-items-center justify-content-center rounded-pill mr-3 text-purple">
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: "40px",
                  height: "40px",
                  marginRight: 2,
                }}
              >
                OP
              </Avatar>
            </div>
          )}
          <div
            style={{ textAlign: "left", textTransform: "capitalize" }}
            className="d-flex flex-column justify-content-start"
          >
            <span className="businessName">{result.name}</span>
            <span className="businessId">ID: {result.id}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessName;
