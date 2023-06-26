import React, { useEffect } from "react";
import "./dashboardpages.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getuserdataafterlogin,
  sendotpsecondary,
} from "../../Store/Auth/actions";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";

function Editprofilemail() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();
  const [alluserdata, setAlluserdata] = useState("");
  const registersuccessId = useSelector(
    (state) => state.Auth?.registersuccessId
  );
  const getdataofregistereduser = useSelector(
    (state) => state.Auth?.alluserdataafterlogin
  );
  useEffect(() => {
    dispatch(
      getuserdataafterlogin({
        id: registersuccessId,
      })
    );
    console.log("userrrrrr");
  }, []);

  const resendotponcall = () => {
    dispatch(
      sendotpsecondary({
        id: registersuccessId,
        type: 2,
        // history: history,
        setIsLoading,
      })
    );
    console.log("function hit");
  };
  // console.log("--secondary email------------>", user.secondaryEmail);
  return (
    <>
      <SideNavone>
        <div className="col-md-12  box_height_profile1" id="style-2">
          <h2>Edit Profile</h2>

          <div className="col-md-12 px-0 pb-2 pt-3">
            <p className="mb-0 sub_text_color_account_alltext">Email</p>
          </div>
          <div className="col-md-12 background_color_showboxes">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0 sub_text_color_account_alltext_show">
                  Primary Email
                </p>
                <p className="mb-0 sub_text_color_account_alltext_show_actual">
                  {getdataofregistereduser.primaryEmail}
                </p>
              </div>
              <div className="col-md-6 text-right m-auto">
                {getdataofregistereduser.primaryEmailVerify === true ? (
                  <img
                    className="img-fluid img_verified_size"
                    src="../images/plexar/verified.gif"
                  />
                ) : (
                  <img
                    className="img-fluid img_verified_size"
                    src="../images/plexar/unverified.gif"
                  />
                )}
              </div>
              <div className="col-md-12">
                <hr className="my-3 background_color_line" />
              </div>
              <div className="col-md-6">
                <p className="mb-0 sub_text_color_account_alltext_show">
                  Secondary Email
                </p>
                <p className="mb-0 sub_text_color_account_alltext_show_actual">
                  {getdataofregistereduser.secondaryEmail === "" ? (
                    <span onClick={() => history.push("/add-secondary-email")}>
                      Add Secondary Email
                    </span>
                  ) : getdataofregistereduser.secondaryEmail ? (
                    <>
                      {getdataofregistereduser.primaryEmailVerify === true ? (
                        <span onClick={resendotponcall}>
                          {getdataofregistereduser.secondaryEmail}
                        </span>
                      ) : (
                        <span>{getdataofregistereduser.secondaryEmail}</span>
                      )}
                    </>
                  ) : null}
                  &nbsp;&nbsp;
                  {isLoading ? (
                    <div
                      class="spinner-border spinner-border-sm text-primary"
                      role="status"
                    >
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : null}
                </p>
              </div>
              <div className="col-md-6 text-right m-auto">
                {getdataofregistereduser.secondaryEmailVerify === true ? (
                  <img
                    className="img-fluid img_verified_size"
                    src="../images/plexar/verified.gif"
                  />
                ) : (
                  <img
                    className="img-fluid img_verified_size"
                    src="../images/plexar/unverified.gif"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </SideNavone>
    </>
  );
}

export default Editprofilemail;
