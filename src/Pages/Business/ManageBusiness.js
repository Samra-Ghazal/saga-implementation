import React, { useState, useEffect } from "react";
import "../GlobleStyle/style.css";
import Table from "./Table";
import { OnSearch } from "./helper";
import Header from "../Header";
import { businessList } from "../../utils/constant";
import { getBusiness } from "../../services/business";
import { error, success } from "../../utils";
import SkeltonTable from "../SkeltonTableSimple";
import { useDispatch, useSelector } from "react-redux";
import SideNavone from "../Dashboard/MainComponent/SideNavone/SideNavone";
import { fetchBusinessBinder } from "../../Store/Business/saga";
import { fetchBusinessFailure, fetchBusinessRequest, fetchBusinessSuccess } from "../../Store/Business/actions";
const ManageBusines = ({ setActiveTab }) => {
  const flag = false;
  const [rowData, setRowData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch =useDispatch()
  const rowDatax = useSelector((state) => state.Business?.rowData);
const datas=useSelector((state)=>state.Business?.data)
// const loading=useSelector((state)=>state.Business?.loading)
const error=useSelector((state)=>state.Business?.error)

  // console.log("REDOCR",rowData, data, loading, error)
  const fetchAllBusiness = () => {
    setLoading(true);
    getBusiness().then((res) => {
      setLoading(false);
      if (res.statusCode === 0) {
        success(businessList.BUSINESS_FETCH);
        setRowData(res.result);
        setData(res.result);
      } else {
        error(res.message);
      }
    });
  };
  useEffect(() => {
    fetchAllBusiness();
    dispatch(fetchBusinessRequest())
    if(error)      
     { 
      dispatch(fetchBusinessFailure(error));
    }
    console.log("ERROO")
    }, []);

  return (
    <>
      {/* <MenuTabList type="businessList" /> */}
      <SideNavone>
      <div>
        <Header
          data={data}
          OnSearch={OnSearch}
          flag={flag}
          rowData={rowData}
          setRowData={fetchBusinessSuccess} // Not sure where you want to update setRowData, please update accordingly
          heading={businessList.BUSINESS}
          buttonText={businessList.ADD_BUSINESS}
          link="./add-business"
        />
      </div>
      <div className="p-2 pt-5 min-h-[250px] table-container">
        {loading ? (
          <SkeltonTable />
        ) : (
          <Table
            loading={loading}
            record={data}
            setRecord={fetchBusinessSuccess}
            data={rowData}
          />
        )}
      </div>
      </SideNavone>
    </>
  );
};

export default ManageBusines;
