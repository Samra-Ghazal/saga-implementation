import React from "react";
import InputTextField from "../TextField";
import "../GlobleStyle/style.css";
import Dropzone from "../Uploader";
import { validationSchema } from "./helper";

const BusinessInfo = (props) => {
  const {
    values,
    onSubmit,
    errors,
    touched,
    setFieldValue,
    handleChange,
    action,
  } = props;
  // const url = URL.createObjectURL(values.image);

  return (
    <>
      <div>
        <div className="d-flex justify-content-center border bg-white me-2 rounded-3 p-2 ms-2">
          <Dropzone
            name="image"
            upload={values.image}
            setFieldValue={setFieldValue}
            actionState={action}
            touched={touched.image}
            errors={errors.image}
            validationSchema={validationSchema}
          />
        </div>
        <div className="w-100 d-sm-flex !m-n2">
          <div className="p-2 w-100">
            <InputTextField
              id="business-name"
              label="Business Name"
              name="businessName"
              value={values.businessName}
              // onChange={(newValue) => {
              //   setFieldValue("businessName", newValue);
              // }}
              onChange={handleChange}
              placeholder="Enter Business Name"
              error={touched.businessName && errors.businessName}
              size={20}
              variant="filled"
              autoFocused
              sx={{
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
        <div className="w-100 d-sm-flex !m-n2">
          <div className="p-2 w-100">
            <InputTextField
              id="business-type"
              label="Business Type"
              name="businessType"
              placeholder="Enter Business Type"
              onChange={handleChange}
              value={values.businessType}
              error={touched.businessType && errors.businessType}
              size={20}
              variant="filled"
              autoFocused
              sx={{
                backgroundColor: "#fff",
              }}
            />
          </div>
          <div className="p-2 w-100">
            <InputTextField
              id="industry"
              label="Industry"
              name="industry"
              placeholder="Enter Industry"
              onChange={handleChange}
              value={values.industry}
              size={20}
              variant="filled"
              error={touched.industry && errors.industry}
              autoFocused
              sx={{
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
        <div className="p-2 w-100">
          <InputTextField
            id="website"
            label="Website"
            name="website"
            value={values.website}
            onChange={handleChange}
            placeholder="Enter URL"
            size={20}
            error={touched.website && errors.website}
            variant="filled"
            autoFocused
            sx={{
              backgroundColor: "#fff",
            }}
          />
        </div>
        <div className="p-2 w-100">
          <InputTextField
            id="description"
            label="Description"
            name="description"
            onChange={handleChange}
            placeholder="Type Description Here..."
            size={20}
            value={values.description}
            error={touched.description && errors.description}
            variant="filled"
            autoFocused
            multiline={2}
            rows={5}
            sx={{
              backgroundColor: "#fff",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default BusinessInfo;
