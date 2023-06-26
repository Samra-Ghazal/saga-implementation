import React, { useState } from "react";
import "../GlobleStyle/style.css";
import Map from "./map";
import BusinessAddress from "./BusinessAddress";
import Header from "../Header";
import { businessList } from "../../utils/constant";
import { Formik, Form } from "formik";
import { addBusiness, editBusiness } from "../../services/business";
import {
  businessInitialValue,
  formateData,
  formateUpdateData,
  validationSchema,
} from "./helper";
import { error, success } from "../../utils";
import BusinessInfo from "./businessInfo";
import Stepper from "./stepperButton";
import { useLocation } from "react-router-dom";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";
import { useDispatch } from "react-redux";
// import { addBusinessRequest } from "../../Store/Business/actions";

const AddBusiness = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const action = location && location.action;
  const editData = location && location.data;
  const [activeStep, setActiveStep] = useState(0);
  const [address, setAddress] = useState("");
  const [result, setResult] = useState([]);
  const [actionState, setActionState] = useState("new");
  const [loading, setLoading] = useState(false);
  const flag = true;
  const id = result.id;
  const steps = ["Step 1", "Step 2", "Step 3"];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const postBusiness = (values, handles) => {
    setLoading(true);
    const data = formateData(values);
    const jsonData = JSON.stringify(data);
    addBusiness(jsonData).then((res) => {
      setLoading(false);
      if (res.statusCode === 0) {
        success(businessList.BUSINESS_CREATE);
        setResult(res.result);
        handleNext();
        setActionState("edit");
        // setState([...states, values]);
        // window.location = "/";
        // handles.resetForm();
      } else {
        error(res.message);
      }
    });
  };

  // const postBusiness = (values, handles) => {
  //   setLoading(true);
  //   const data = formateData(values);
  //   dispatch(addBusinessRequest(data)); // Dispatch the addBusinessRequest action
  // };

  const updateBusiness = (values, handle) => {
    setLoading(true);
    const data = formateUpdateData(values);
    const jsonData = JSON.stringify(data);
    editBusiness(jsonData, id).then((res) => {
      setLoading(false);
      if (res.statusCode === 0) {
        success(businessList.BUSINESS_UPDATED);
        window.location = "/business";
        // handle.resetForm();
      } else {
        error(res.message);
        // handles.setValues(initialValuesofSlot());
      }
    });
  };
  const handleSubmit = (values, handles, result) => {
    if (actionState === "edit") {
      updateBusiness(values, handles, result);
    } else {
      postBusiness(values, handles);
    }
  };

  return (
    <>
      <SideNavone>
        <div>
          <Header flag={flag} heading={businessList.CREATE_BUSINESS} />
        </div>
        <div className="p-1 pt-4 min-h-[250px] form-container">
          <div className="w-100">
            <Formik
              initialValues={businessInitialValue(editData, action)}
              validationSchema={validationSchema}
              onSubmit={(values, handles) => {
                handleSubmit(values, handles);
              }}
            >
              {(options) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    {activeStep === 0 && (
                      <div>
                        <BusinessInfo
                          loading={loading}
                          onSubmit={handleSubmit}
                          action={action}
                          {...options}
                        />
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div>
                        <Map
                          loading={loading}
                          onSubmit={handleSubmit}
                          address={address}
                          action={actionState}
                          result={result}
                          setAddress={handleAddressChange}
                          {...options}
                        />
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div>
                        <BusinessAddress
                          loading={loading}
                          action={actionState}
                          onSubmit={handleSubmit}
                          address={address}
                          {...options}
                        />
                      </div>
                    )}
                    <div>
                      <Stepper
                        loading={loading}
                        activeStep={activeStep}
                        steps={steps}
                        action={actionState}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        {...options}
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </SideNavone>{" "}
    </>
  );
};

export default AddBusiness;
