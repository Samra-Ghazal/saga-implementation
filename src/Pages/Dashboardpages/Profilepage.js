import React, { useEffect } from "react";
import "./dashboardpages.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getuserdataafterlogin } from "../../Store/Auth/actions";
import { useState } from "react";
import Moment from "react-moment";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";

function Profilepage() {
  const dispatch = useDispatch();
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
    console.log("api hitted");
  }, []);
  const pushpage = () => {
    history.push("/show-all-numbers-of-users");
  };
  const genderbutton = () => {
    history.push("/addgenderuser");
  };
  const adddobbutton = () => {
    history.push("/add-dob-user");
  };
  console.log("--sdsdsdsdsdsd------------<><><><><>", getdataofregistereduser);
  return (
    <>
      {getdataofregistereduser ? (
        <SideNavone>
          <div className="col-md-12  box_height_profile" id="style-2">
            <div className="col-md-12 text-center">
              <img
                className="img-fluid img_profile_shape"
                src="../images/plexar/profile.png"
              />
            </div>
            {/* Profile detail ----------------------------------------------------  */}
            <div className="col-md-12 text-center">
              <h6 className="mb-0 pt-3">
                <b>
                  {getdataofregistereduser?.firstName}{" "}
                  {getdataofregistereduser?.lastName}
                </b>
              </h6>
              <p className="mb-0 text_color_account">Personal Account</p>
              <p className="mb-0 sub_text_color_account">
                ID {getdataofregistereduser?.accountNumber}
              </p>
            </div>
            {/* Name show section ------------------------------------------------------ */}
            <div className="col-md-12 px-0 pb-2">
              <p className="mb-0 sub_text_color_account_alltext">Name</p>
            </div>
            <div className="col-md-12 background_color_showboxes">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    First Name
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.firstName}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  <i id="color_icon_right" class="fas fa-angle-right"></i>
                </div>
                <div className="col-md-12">
                  <hr className="my-3 background_color_line" />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Last Name
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.lastName}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  <i id="color_icon_right" class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
            {/* Email show section -------------------------------------------------- */}
            <div className="col-md-12 px-0 pb-2 pt-3">
              <p className="mb-0 sub_text_color_account_alltext">Email</p>
            </div>
            <div
              className="col-md-12 background_color_showboxes"
              onClick={() => history.push("/allemailsuser")}
            >
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Primary Email
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.primaryEmail}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  {getdataofregistereduser?.primaryEmailVerify === true ? (
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
                    {getdataofregistereduser?.secondaryEmail === "" ? (
                      <>Add Secondary Email</>
                    ) : getdataofregistereduser?.secondaryEmail ? (
                      <>{getdataofregistereduser?.secondaryEmail}</>
                    ) : null}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  {getdataofregistereduser?.secondaryEmailVerify === true ? (
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
            {/* Phone number show section -------------------------------------------- */}
            <div className="col-md-12 px-0 pb-2">
              <p className="mb-0 sub_text_color_account_alltext pt-3">Phone</p>
            </div>
            <div className="col-md-12 background_color_showboxes">
              <div className="row" onClick={pushpage}>
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Primary Phone Number
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.primaryMobile === "" ? (
                      <>Add Primary Phone Number</>
                    ) : getdataofregistereduser?.primaryMobile ? (
                      <>
                        {getdataofregistereduser?.primaryMobileVerify ===
                        true ? (
                          <>{getdataofregistereduser?.primaryMobile}</>
                        ) : (
                          <span className="applyonclick here">
                            {getdataofregistereduser?.primaryMobile}
                          </span>
                        )}
                      </>
                    ) : null}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  {getdataofregistereduser?.primaryMobileVerify === true ? (
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
                  {/* <i id="color_icon_right" class="fas fa-angle-right"></i> */}
                </div>
                <div className="col-md-12">
                  <hr className="my-3 background_color_line" />
                </div>
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Secondary Phone Number
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.secondaryMobile === "" ? (
                      <>Add Secondary Phone Number</>
                    ) : getdataofregistereduser?.secondaryMobile ? (
                      <>{getdataofregistereduser?.secondaryMobile}</>
                    ) : null}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  {getdataofregistereduser?.secondaryMobileVerify === true ? (
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
                  {/* <i id="color_icon_right" class="fas fa-angle-right"></i> */}
                </div>
              </div>
            </div>
            {/* Additional Info -------------------------------------------- */}
            <div className="col-md-12 px-0 pb-2">
              <p className="mb-0 sub_text_color_account_alltext pt-3">
                Additional Info
              </p>
            </div>
            <div className="col-md-12 background_color_showboxes">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Gender
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.genderName === "" ? (
                      <span onClick={genderbutton}>Add Your Gender</span>
                    ) : getdataofregistereduser?.genderName ? (
                      <>{getdataofregistereduser?.genderName}</>
                    ) : null}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  <i id="color_icon_right" class="fas fa-angle-right"></i>
                </div>
                <div className="col-md-12">
                  <hr className="my-3 background_color_line" />
                </div>
                <div className="col-md-6" onClick={adddobbutton}>
                  <p className="mb-0 sub_text_color_account_alltext_show">
                    Date of Birth
                  </p>
                  <p className="mb-0 sub_text_color_account_alltext_show_actual">
                    {getdataofregistereduser?.dob === null ? (
                      <>Add Date of Birth</>
                    ) : getdataofregistereduser?.dob ? (
                      <Moment format="YYYY/MM/DD">
                        <>{getdataofregistereduser?.dob}</>
                      </Moment>
                    ) : null}
                  </p>
                </div>
                <div className="col-md-6 text-right m-auto">
                  <i id="color_icon_right" class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </SideNavone>
      ) : (
        <>loading</>
      )}
    </>
  );
}

export default Profilepage;
