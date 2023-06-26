import React from "react";
import { useHistory } from "react-router-dom";
import NavbarLanding from "../Homepage/NavbarLanding/NavbarLanding";
import "./Faq.scss";

function Faq() {
  let history = useHistory();
  return (
    <div className="col-sm-12 p-0" style={{ backgroundColor: "#F8F8FA" }}>
      <NavbarLanding />
      <div className="col-sm-12 padding-top-tc">
        <div className="row">
          <div className="col-sm-6">
            <div className="col-sm-12">
              <h3 style={{ color: "gray" }}>
                <b>Frequently Asked Questions (FAQ's)</b>
              </h3>
            </div>
            <div className="col-sm-12 mt-4 text-left">
              <p>
                <button
                  class="btn btn-outline-primary text-left"
                  style={{
                    width: "100%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  The Question Related To Nami Listed Here!
                </button>
              </p>
              <div class="collapse" id="collapseExample">
                <div class="card card-body">
                  The Question Related To Nami Listed Here!
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4 text-left">
              <p>
                <button
                  class="btn btn-outline-primary text-left"
                  style={{
                    width: "100%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  The Question Related To Nami Listed Here!
                </button>
              </p>
              <div class="collapse" id="collapseExample1">
                <div class="card card-body">
                  The Question Related To Nami Listed Here!
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4 text-left">
              <p>
                <button
                  class="btn btn-outline-primary text-left"
                  style={{
                    width: "100%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample2"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  The Question Related To Nami Listed Here!
                </button>
              </p>
              <div class="collapse" id="collapseExample2">
                <div class="card card-body">
                  The Question Related To Nami Listed Here!
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4 text-left">
              <p>
                <button
                  class="btn btn-outline-primary text-left"
                  style={{
                    width: "100%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample3"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  The Question Related To Nami Listed Here!
                </button>
              </p>
              <div class="collapse" id="collapseExample3">
                <div class="card card-body">
                  The Question Related To Nami Listed Here!
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4 text-left">
              <p>
                <button
                  class="btn btn-outline-primary text-left"
                  style={{
                    width: "100%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample4"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  The Question Related To Nami Listed Here!
                </button>
              </p>
              <div class="collapse" id="collapseExample4">
                <div class="card card-body">
                  The Question Related To Nami Listed Here!
                </div>
              </div>
            </div>
            {/* <div className='row'>
                        <div className='col-sm-6'>
                            <h3><b>Privacy Policy</b></h3>
                        </div>
                        <div className='col-sm-6 text-right m-auto'>
                            <h6>
                            Last modified: <b>May 12, 2022</b>
                            </h6>
                        </div>
                        <div className='col-sm-12 py-4 background_tc mt-4'>
                            <h5><b>Introduction</b></h5>
                            <p>
                            Nami, Inc. and its subsidiaries ("<b>Company</b>" or "<b>We</b>") respect your privacy and are committed to protecting it through our compliance with this policy.
                            </p>
                            <p>
                            This policy describes the types of information we collect from you or that you may provide when you visit the website https://www.microacquire.com/, https://micromrr.microacquire.com/, https://www.microacquirealerts.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                            <p>
                            Nami, Inc. and its subsidiaries ("<b>Company</b>" or "<b>We</b>") respect your privacy and are committed to protecting it through our compliance with this policy.
                            </p>
                            <p>
                            This policy describes the types of information we collect from you or that you may provide when you visit the website https://www.microacquire.com/, https://micromrr.microacquire.com/, https://www.microacquirealerts.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                            <p>
                            Nami, Inc. and its subsidiaries ("<b>Company</b>" or "<b>We</b>") respect your privacy and are committed to protecting it through our compliance with this policy.
                            </p>
                            <p>
                            This policy describes the types of information we collect from you or that you may provide when you visit the website https://www.microacquire.com/, https://micromrr.microacquire.com/, https://www.microacquirealerts.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                            </p>
                        </div>

                    </div> */}
          </div>
          <div className="col-sm-6">
            <div className="col-sm-12 text-center">
              <img src="../images/faq.gif" className="img-fluid giff_width" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
