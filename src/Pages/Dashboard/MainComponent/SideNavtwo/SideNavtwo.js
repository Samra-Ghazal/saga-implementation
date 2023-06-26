import React from "react";
import Sidenavcontent from "./Sidenavcontent/Sidenavcontent";
import "../dashboard.scss";
import Profilepage from "../../../Dashboardpages/Profilepage";
import Editprofilemail from "../../../Dashboardpages/editprofileemail";
import Showmobilenumbers from "../../../Dashboardpages/Showmobilenumbers";
import Addgender from "../../../Dashboardpages/addgender";
import Adddob from "../../../Dashboardpages/Adddob";

function SideNavtwo() {
  return (
    <div className="col-md-12 ">
      <div className="row">
        {/* <div className="col-md-3">
          <div className="col-md-12 background_sidenav_two">
            <Sidenavcontent />
          </div>
        </div> */}
        <div className="col-md-12 background_sidenav_two_t">
          {window.location.href.indexOf("/Dashboard") >= 0 ? (
            <Profilepage />
          ) : window.location.href.indexOf("/allemailsuser") >= 0 ? (
            <Editprofilemail />
          ) : window.location.href.indexOf("/show-all-numbers-of-users") >=
            0 ? (
            <Showmobilenumbers />
          ) : window.location.href.indexOf("/addgenderuser") >= 0 ? (
            <Addgender />
          ) : window.location.href.indexOf("/add-dob-user") >= 0 ? (
            <Adddob />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideNavtwo;
