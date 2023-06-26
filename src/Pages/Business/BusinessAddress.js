import React, { useEffect } from "react";
import InputTextField from "../TextField";
import "../GlobleStyle/style.css";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";

const BusinessAddress = (props) => {
  const { address, values, errors, touched, handleChange, setFieldValue } =
    props;

  useEffect(() => {
    setFieldValue("businessAddress.addressName", address);
  }, [address, setFieldValue]);
  return (
    <>
      <div className="p-1 min-h-[250px] form-container">
        <div className="w-100">
          <div>
            <div className="w-100 d-sm-flex !m-n2">
              <div className="p-2 w-100">
                <InputTextField
                  id="business-address"
                  label=" Address"
                  name="businessAddress.addressName"
                  // value={values.businessAddress.addressName}                  placeholder="Enter Business Address"
                  size={20}
                  // value={address}
                  setFieldValue={() => {
                    setFieldValue("businessAddress.addressName", address);
                  }}
                  value={values.businessAddress.addressName}
                  // onChange={(e) => setAddress(e.target.value)}

                  // onChange={handleChange}
                  errors={touched.address && errors.address}
                  variant="filled"
                  autoFocused
                  sx={{
                    // maxWidth: "300px",
                    backgroundColor: "#fff", // marginRight: "20px",
                  }}
                />
              </div>
            </div>
            <div className="p-2 w-100">
              <InputTextField
                id="address-home"
                label=" Address Home"
                name="businessAddress.addressHome"
                value={values.businessAddress.addressHome}
                placeholder="Enter Home Address"
                size={20}
                variant="filled"
                autoFocused
                sx={{
                  // maxWidth: "300px",
                  backgroundColor: "#fff", // marginRight: "20px",
                }}
              />
            </div>
            <div className="w-100 d-sm-flex !m-n2">
              <div className="p-2 w-100">
                <InputTextField
                  id="flat-building"
                  label="Flat & Building Number"
                  name="businessAddress.flat"
                  value={values.businessAddress.flat}
                  placeholder="Enter Flat & Building Number"
                  size={20}
                  variant="filled"
                  autoFocused
                  sx={{
                    // maxWidth: "300px",
                    backgroundColor: "#fff", // marginRight: "20px",
                  }}
                />
              </div>
              <div className="p-2 w-100 ">
                <InputTextField
                  id="street"
                  label="Street Address"
                  name="businessAddress.streetAddresss"
                  value={values.businessAddress.streetAddress}
                  placeholder="Enter Street Address"
                  size={20}
                  onChange={handleChange}
                  variant="filled"
                  autoFocused
                  sx={{
                    // maxWidth: "300px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </div>
            <div className="w-100 d-sm-flex !m-n2">
              <div className="p-2 w-100">
                <InputTextField
                  id="city"
                  label="City"
                  placeholder="Enter Your City"
                  size={20}
                  name="businessAddress.city"
                  value={values.businessAddress.city}
                  onChange={handleChange}
                  variant="filled"
                  autoFocused
                  sx={{
                    // maxWidth: "300px",
                    backgroundColor: "#fff", // marginRight: "20px",
                  }}
                />
              </div>
              <div className="p-2 w-100 ">
                <InputTextField
                  id="code"
                  label="Postal Code"
                  name="businessAddress.code"
                  value={values.businessAddress.code}
                  placeholder="Enter Postal Code"
                  size={20}
                  variant="filled"
                  autoFocused
                  sx={{
                    // maxWidth: "300px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </div>

            <div className="p-2 w-100">
              <InputTextField
                id="note"
                label="Address Note"
                name="businessAddress.note"
                value={values.businessAddress.note}
                placeholder="Type Address Note Here..."
                size={20}
                variant="filled"
                autoFocused
                multiline={2}
                rows={5}
                sx={{
                  // maxWidth: "300px",
                  // height: "300px",
                  backgroundColor: "#fff", // marginRight: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAddress;
