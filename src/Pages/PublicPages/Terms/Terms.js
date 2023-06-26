import React from "react";
import NavbarLanding from "../Homepage/NavbarLanding/NavbarLanding";
import "./Terms.scss";
import { useHistory } from "react-router-dom";

function Terms() {
  let history = useHistory();

  return (
    <div className="col-sm-12 p-0" style={{ backgroundColor: "#F8F8FA" }}>
      <NavbarLanding />
      <div className="col-sm-12 padding-top-tc">
        <div className="row">
          <div className="col-sm-3 text-center">
            <button
              onClick={() => history.push(`/`)}
              className="btn btn-light btn-lg rounded-circle button-outline-tc"
            >
              <i class="fas fa-arrow-left"></i>
            </button>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <h3>
                  <b>Privacy Policy</b>
                </h3>
              </div>
              <div className="col-sm-6 text-right m-auto">
                <h6>
                  Last modified: <b>May 12, 2022</b>
                </h6>
              </div>
              <div className="col-sm-12 py-4 background_tc mt-4">
                <h5>
                  <b>Introduction</b>
                </h5>
                <p>
                  Nami, Inc. and its subsidiaries ("<b>Company</b>" or "
                  <b>We</b>") respect your privacy and are committed to
                  protecting it through our compliance with this policy.
                </p>
                <p>
                  This policy describes the types of information we collect from
                  you or that you may provide when you visit the website
                  https://www.microacquire.com/,
                  https://micromrr.microacquire.com/,
                  https://www.microacquirealerts.com (our "Website") and our
                  practices for collecting, using, maintaining, protecting, and
                  disclosing that information.
                </p>
                <p>
                  Nami, Inc. and its subsidiaries ("<b>Company</b>" or "
                  <b>We</b>") respect your privacy and are committed to
                  protecting it through our compliance with this policy.
                </p>
                <p>
                  This policy describes the types of information we collect from
                  you or that you may provide when you visit the website
                  https://www.microacquire.com/,
                  https://micromrr.microacquire.com/,
                  https://www.microacquirealerts.com (our "Website") and our
                  practices for collecting, using, maintaining, protecting, and
                  disclosing that information.
                </p>
                <p>
                  Nami, Inc. and its subsidiaries ("<b>Company</b>" or "
                  <b>We</b>") respect your privacy and are committed to
                  protecting it through our compliance with this policy.
                </p>
                <p>
                  This policy describes the types of information we collect from
                  you or that you may provide when you visit the website
                  https://www.microacquire.com/,
                  https://micromrr.microacquire.com/,
                  https://www.microacquirealerts.com (our "Website") and our
                  practices for collecting, using, maintaining, protecting, and
                  disclosing that information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Terms;
