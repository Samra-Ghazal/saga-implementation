import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "../GlobleStyle/style.css";
import { Button } from "@mui/material";

const Stepper = (props) => {
  const {
    activeStep,
    steps,
    handleBack,
    handleNext,
    handleSubmit,
    validateForm,
    loading,
    action,
  } = props;
  const handleNextForm = () => {
    if (activeStep === 0) {
      // check validation of the form
      validateForm().then((res) => {
        if (res && Object.keys(res).length === 0) {
          handleNext();
        } else {
          handleSubmit();
        }
      });
    } else handleNext();
  };
  return (
    <>
      <div
        style={
          {
            // position: "absolute",
            // right: "90px",
            // bottom: "30px",
          }
        }
        className="w-100 d-flex flex-wrap justify-content-end pt-3 !m-n2"
      >
        <div className="p-2">
          <Button
            sx={{
              width: "150px",
              backgroundColor: "#edf0f5",
              height: "40px",
              color: "#b6bec8",
              borderRadius: "10px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#c0c0c0",
                color: "#ffffff",
              },
            }}
            onClick={() => {
              if (activeStep > 0) {
                handleBack();
              } else {
                window.location = "/";
              }
            }}
            variant="contained"
          >
            {activeStep > 0 ? "Back" : "Cancel"}
          </Button>
        </div>

        {activeStep < steps.length - 1 && (
          <div className="p-2">
            <Button
              sx={{
                width: "150px",
                backgroundColor: "#538dff",
                height: "40px",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
              onClick={
                action === "new" && activeStep === 0 ? handleSubmit : handleNext
              }
              variant="contained"
            >
              {loading ? (
                <ClipLoader color="#fffff" size={30} />
              ) : (
                <span>
                  {action === "new" && activeStep === 0 ? "Create" : "Next"}
                </span>
              )}
            </Button>
          </div>
        )}

        {activeStep === steps.length - 1 && (
          <div className="p-2">
            <Button
              sx={{
                width: "150px",
                backgroundColor: "#538dff",
                height: "40px",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
              onClick={
                activeStep === 2 && action === "edit"
                  ? handleSubmit
                  : (window.location = "/")
              }
              variant="contained"
            >
              {loading ? (
                <ClipLoader color="#fffff" size={30} />
              ) : action === "edit" ? (
                "Update"
              ) : (
                "Create"
              )}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Stepper;
