import * as Yup from "yup";

const businessMange = [
  {
    id: "businessName",
    label: " Name",
    sort: true,
    minWidth: 200,
    border: "1px solid #ededed",
    align: "center",
    color: "#7b7d84",
    selector: (row) => row.name,

    // class: "px-1 text-left  upper-case table-header-item font-size-xs",
  },
  {
    id: "designation",
    label: "Designation",
    // class: "text-left  upper-case table-header-item font-size-xs",
    minWidth: 170,
    align: "center",
    border: "1px solid #ededed",
    selector: (row) => row.designation,
    color: "#7b7d84",
  },
  {
    id: "address",
    label: "Business Address",
    // class: "text-left  upper-case table-header-item font-size-xs",
    border: "1px solid #ededed",
    color: "#7b7d84",
    align: "center",
    selector: (row) => row.address,
    minWidth: 170,
  },

  {
    id: "status",
    label: "Status",
    // class: "text-left  upper-case table-header-item font-size-xs",
    border: "1px solid #ededed",
    color: "#7b7d84",
    align: "center",
    selector: (row) => row.status,
    minWidth: 170,
  },
  {
    id: "actions",
    label: "Actions",
    // class: "text-center  upper-case table-header-item font-size-xs",
    border: "1px solid #ededed",
    color: "#7b7d84",
    align: "center",
    selector: (row) => row.actions,
    minWidth: 170,
  },
];

export const OnSearch = (searchedVal, data, setRowData) => {
  console.log(data,setRowData)
  if (searchedVal.length > 0) {
    const filteredRows = data.filter((row) => {
      let match = false;
      if (!match) {
        match = row.name
          ? row.name.toLowerCase().includes(searchedVal.toLowerCase())
          : "";
      }

      return match;
    });
    setRowData(filteredRows);
  } else {
    setRowData(data);
  }
};
export const DataNotFound = () => {
  return (
    <div className="text-center w-100">
      <img
        className="mw-100 object-fit-contain"
        src="images/user.jpg"
        alt="Data Not Found!"
      />
    </div>
  );
};
const defaultLocation = {
  annotations: {
    DMS: {
      lat: "31° 33' 56.45592'' N",
      lng: "74° 18' 51.05844'' E",
    },
    MGRS: "43RDQ3491692500",
    Maidenhead: "MM71dn75qs",
    Mercator: {
      x: 8272616.999,
      y: 3684068.846,
    },
    OSM: {
      edit_url:
        "https://www.openstreetmap.org/edit?node=1886594378#map=16/31.56568/74.31418",
      note_url:
        "https://www.openstreetmap.org/note/new#map=16/31.56568/74.31418&layers=N",
      url: "https://www.openstreetmap.org/?mlat=31.56568&mlon=74.31418#map=16/31.56568/74.31418",
    },
    UN_M49: {
      regions: {
        ASIA: "142",
        PK: "586",
        SOUTHERN_ASIA: "034",
        WORLD: "001",
      },
      statistical_groupings: ["LEDC"],
    },
    callingcode: 92,
    currency: {
      alternate_symbols: ["Rs"],
      decimal_mark: ".",
      disambiguate_symbol: "PKR",
      html_entity: "&#x20A8;",
      iso_code: "PKR",
      iso_numeric: "586",
      name: "Pakistani Rupee",
      smallest_denomination: 100,
      subunit: "Paisa",
      subunit_to_unit: 100,
      symbol: "₨",
      symbol_first: 1,
      thousands_separator: ",",
    },
    flag: "🇵🇰",
    geohash: "ttsge43gmvxhc1pgkyw1",
    qibla: 260.26,
    roadinfo: {
      drive_on: "left",
      speed_in: "km/h",
    },
    sun: {
      rise: {
        apparent: 1686009540,
        astronomical: 1686003660,
        civil: 1686007860,
        nautical: 1686005880,
      },
      set: {
        apparent: 1685973840,
        astronomical: 1685979660,
        civil: 1685975460,
        nautical: 1685977500,
      },
    },
    timezone: {
      name: "Asia/Karachi",
      now_in_dst: 0,
      offset_sec: 18000,
      offset_string: "+0500",
      short_name: "PKT",
    },
    what3words: {
      words: "mailings.recitals.plugs",
    },
    wikidata: "Q11739",
  },
  bounds: {
    northeast: {
      lat: 31.7256822,
      lng: 74.4741829,
    },
    southwest: {
      lat: 31.4056822,
      lng: 74.1541829,
    },
  },
  components: {
    "ISO_3166-1_alpha-2": "PK",
    "ISO_3166-1_alpha-3": "PAK",
    "ISO_3166-2": ["PK-PB"],
    _category: "place",
    _type: "neighbourhood",
    city: "Lahore",
    continent: "Asia",
    country: "Pakistan",
    country_code: "pk",
    postcode: "54010",
    state: "Punjab",
    state_code: "PB",
    subdistrict: "Lahore Cantonment Tehsil",
  },
  confidence: 3,
  formatted: "Lahore Cantonment Tehsil, Lahore 54010, Pakistan",
  geometry: {
    lat: 31.5656822,
    lng: 74.3141829,
  },
};

export const formateData = (values) => {
  const imageName = values && values.image && values.image.name;
  const imageUrl = values && values.image && values.image.preview;
  return {
    name: values.businessName,
    description: values.description,
    imageName: imageName,
    imageUrl: imageUrl,
    parentBusiness: "",
    businessType: values.businessType,
    industry: values.industry,
    websiteUrl: values.website,
  };
};

export const formateUpdateData = (values) => {
  const imageName = values && values.image && values.image.name;
  const imageUrl = values && values.image && values.image.preview;
  const editData = {
    busienssAddress: {
      userId: 0,
      addressName: values.businessAddress.addressName,
      line1: values.businessAddress.addressHome,
      line2: values.businessAddress.flat,
      townCity: values.businessAddress.city,
      postalCode: values.businessAddress.code,
      state: "State",
      countryId: 1,
      latitude: 0,
      longitude: 0,
      addressNote: values.businessAddress.note,
      isResidentialAddress: true,
      radius: 10,
      addressTypeValue: 2,
      createdBy: 0,
    },
  };
  return {
    name: values.businessName,
    description: values.description,
    imageName: imageName,
    imageUrl: imageUrl,
    parentBusiness: "",
    businessType: values.businessType,
    industry: values.industry,
    websiteUrl: values.website,
    businessAddress: {
      ...editData.busienssAddress,
    },
  };
};
export const validationSchema = Yup.object({
  businessName: Yup.string().required("Enter the Business Name"),
  website: Yup.string().url("Invalid URL").required("Enter the URL"),

  businessType: Yup.string().required("Enter Business Type"),
  industry: Yup.string().required("Enter industry"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed().required("A Image is required"),
});

export const businessInitialValue = (editData, action) => {
  const initialValues = {
    businessName: action === "edit" ? editData.name : "",
    businessType: action === "edit" ? editData.businessType : "",
    industry: action === "edit" ? editData.industry : "",
    website: action === "edit" ? editData.websiteUrl : "",
    description: action === "edit" ? editData.description : "",
    image: action === "edit" ? editData.imageUrl : "",
    businessAddress:
      action === "edit"
        ? {
            userId: editData.businessAddress.userId || 0,
            addressName: editData.businessAddress.addressName || "",
            line1: editData.businessAddress.line1 || "",
            line2: editData.businessAddress.line2 || "",
            townCity: editData.businessAddress.townCity || "",
            postalCode: editData.businessAddress.postalCode || "",
            state: editData.businessAddress.state || "",
            countryId: editData.businessAddress.countryId || 0,
            latitude: editData.businessAddress.latitude || 0,
            longitude: editData.businessAddress.longitude || 0,
            addressNote: editData.businessAddress.addressNote || "",
            isResidentialAddress:
              editData.businessAddress.isResidentialAddress || true,
            radius: editData.businessAddress.radius || 0,
            addressTypeValue: editData.businessAddress.addressTypeValue || 0,
            createdBy: editData.businessAddress.createdBy || 0,
          }
        : {},
  };
  return initialValues;
};

export { businessMange, defaultLocation };
