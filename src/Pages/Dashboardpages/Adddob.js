import React, { useEffect } from "react";
import "./dashboardpages.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  adddob,
  getallgenders,
  getuserdataafterlogin,
  resendotpmobile,
  sendgender,
  sendotpsecondary,
} from "../../Store/Auth/actions";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";

function Adddob() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [alluserdata, setAlluserdata] = useState("");
  const [selectedOption, setSelectedOption] = useState("1");
  const [dateofbirth, setDateofbirth] = useState("");
  const registersuccessId = useSelector(
    (state) => state.Auth?.registersuccessId
  );
  //   const getallgendersreducer = useSelector(
  //     (state) => state.Auth?.allgenders
  //   );
  const handleNumberChange = (event) => {
    const valuew = event.target.value;
    setDateofbirth(valuew);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };
  //   useEffect(() => {
  //     dispatch(
  //         getallgenders()
  //     );
  //     console.log("userrrrrr");
  //   }, []);

  const adddobdunc = () => {
    dispatch(
      adddob({
        id: registersuccessId,
        dob: dateofbirth,
        modifiedBy: registersuccessId,
        // history: history,
        // setIsLoading,
      })
    );
    console.log("function hit");
  };
  // console.log("--secondary email------------>", selectedOption);
  return (
    <>
      <SideNavone>
        <div className="col-md-12  box_height_profile1" id="style-2">
          <h2>Add Date of birth</h2>

          <div className="col-md-12 px-0 pb-2 pt-3">
            <p className="mb-0 sub_text_color_account_alltext">Date of Birth</p>
          </div>
          <input
            className="form-control form-control mt-2 background_color_gray"
            placeholder="Email Address"
            value={dateofbirth}
            onChange={handleNumberChange}
            type="date"
          />
          <button className="btn btn-primary mt-4 px-5" onClick={adddobdunc}>
            {" "}
            Save{" "}
          </button>
        </div>
      </SideNavone>
    </>
  );
}

export default Adddob;
