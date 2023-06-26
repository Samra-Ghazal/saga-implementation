import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@mui/material";

const DialogBox = (props) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(props.visible);
  }, [props.visible, props.message, props.header]);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        id="dialog-component"
        open={open}
        onClose={handleClose}
        classes={{ paper: "shadow-sm-dark rounded-lg" }}
      >
        <div className="text-center p-5" id="dbox">
          {/* <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-neutral-first text-first m-0 d-130">
              <FontAwesomeIcon
                icon={['far', 'question-circle']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div> */}
          <h4 className="font-weight-bold mt-2 font-family-roobert">
            {props.header}
          </h4>
          <p className="mb-0 text-black-50 font-family-roobert">
            {props.message}
          </p>
          <div className="pt-4">
            <Button
              onClick={handleClose}
              className="btn-primary-normal mx-1"
              id="dbox-cancel"
            >
              <span className="btn-wrapper--label">No</span>
            </Button>
            <Button
              onClick={() => {
                props.ok();
                handleClose();
              }}
              className="btn-primary-fill mx-1"
              id="dbox-ok"
            >
              <span className="btn-wrapper--label">Yes</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
export default DialogBox;
