import React, { useEffect } from "react";
import "./dashboardpages.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  getuserdataafterlogin,
  resendotpmobile,
  resendprimaryotpmobile,
  sendotpsecondary,
} from "../../Store/Auth/actions";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";

function Showmobilenumbers() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
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

  const resendotponcallprimarymobile = () => {
    dispatch(
      resendprimaryotpmobile({
        id: registersuccessId,
        type: 1,
        setIsLoading,
      })
    );
  };

  const resendotponcallmobile = () => {
    dispatch(
      resendotpmobile({
        id: registersuccessId,
        type: 2,
        // history: history,
        setIsLoading1,
      })
    );

    console.log("function hit");
  };

  // console.log("--secondary email------------>", user.secondaryEmail);
  return (
    <>
      <SideNavone>
        <div className="col-md-12  box_height_profile1" id="style-2">
          <h2>Edit Mobile Numbers</h2>

          <div className="col-md-12 px-0 pb-2 pt-3">
            <p className="mb-0 sub_text_color_account_alltext">Phone</p>
          </div>
          <div className="col-md-12 background_color_showboxes">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0 sub_text_color_account_alltext_show">
                  Primary Phone
                </p>
                <p className="mb-0 sub_text_color_account_alltext_show_actual">
                  {getdataofregistereduser?.primaryMobile === "" ? (
                    <>Add Primary Phone Number</>
                  ) : getdataofregistereduser?.primaryMobile ? (
                    <>
                      {getdataofregistereduser?.primaryMobileVerify === true ? (
                        <>{getdataofregistereduser?.primaryMobile}</>
                      ) : (
                        <span onClick={resendotponcallprimarymobile}>
                          {getdataofregistereduser?.primaryMobile}
                        </span>
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
                {getdataofregistereduser.primaryMobileVerify === true ? (
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
                  Secondary Mobile
                </p>
                <p className="mb-0 sub_text_color_account_alltext_show_actual">
                  {getdataofregistereduser.secondaryMobile === "" ? (
                    <span
                      onClick={() =>
                        history.push("/add-secondary-mobile-number")
                      }
                    >
                      Add Secondary Mobile Number
                    </span>
                  ) : getdataofregistereduser.secondaryMobile ? (
                    <>
                      {getdataofregistereduser.primaryEmailVerify === true ? (
                        <span onClick={resendotponcallmobile}>
                          {getdataofregistereduser.secondaryMobile}
                        </span>
                      ) : (
                        <span>{getdataofregistereduser.secondaryMobile}</span>
                      )}
                    </>
                  ) : null}
                  &nbsp;&nbsp;
                  {isLoading1 ? (
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
                {getdataofregistereduser.secondaryMobileVerify === true ? (
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

export default Showmobilenumbers;
