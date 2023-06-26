import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useField } from "formik";
import { useDropzone } from "react-dropzone";
import { FaFileUpload } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";

const Dropzone = ({
  actionState,
  upload,
  setUpload,
  icon,
  name,
  setFieldValue,
  touched,
  errors,
  validationSchema,
}) => {
  const [files, setFiles] = useState([]);
  const [fileLargeError, setFileLargeError] = useState(false);

  useEffect(() => {
    if (upload && upload.preview) {
      setFiles([upload]);
    } else {
      if (actionState === "edit" && upload) {
        setFiles([{ name: upload, path: upload, preview: upload }]);
      } else setFiles([]);
    }
  }, [upload]);

  // const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
  //   accept: "image/jpg, image/jpeg, image/png",
  //   maxSize: 1000 * 350,
  //   onDrop: (acceptedFiles) => {
  //     const file = acceptedFiles[0];
  //     setFiles([{ name: file.name, preview: URL.createObjectURL(file) }]);
  //     setFieldValue(name, file);
  //   },
  // });

  const { isDragActive, open, getRootProps, getInputProps, rejectedFiles } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      multiple: false,
      accept: "image/jpg, image/jpeg,image/png",
      minSize: 0,
      maxSize: 200 * 200,
      onDrop: (acceptedFiles, rejectedFiles) => {
        if (rejectedFiles) {
          setFiles(rejectedFiles);
        }
        setFileLargeError(
          rejectedFiles &&
            rejectedFiles[0] &&
            rejectedFiles[0].errors &&
            rejectedFiles[0].errors[0].code
        );

        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        if (setUpload)
          setUpload(
            acceptedFiles && acceptedFiles.length > 0 ? acceptedFiles[0] : icon
          );
        if (setFieldValue) {
          setFieldValue(name, acceptedFiles[0]);
        }
      },
    });
  const thumbs = files.map((file) => (
    <div key={file.name} className="rounded overflow-hidden mb-3 mt-4">
      <img
        style={{ width: "150px" }}
        className="img-fluid img-fit-container rounded-sm text-white"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  return (
    <>
      <div className="mt-lg-n1 mb-lg-n2 align-items-center">
        <div className="dropzone rounded">
          <div {...getRootProps({ className: "dropzone-upload-wrapper" })}>
            <input {...getInputProps()} />
            <div className="dropzone-inner-wrapper rounded dropzone-avatar mx-0">
              <div>
                <Button
                  onClick={open}
                  id="file-submit"
                  className=" mt-1 h1 text-black"
                >
                  {!isDragActive && thumbs.length === 0 && (
                    <div className="p-4">
                      <FaFileUpload size={25} className="text-black-50" />
                      <div className="d-flex flex-column">
                        <span className="mb-2  text-capitalize text-black">
                          Upload Image{" "}
                        </span>
                        <span
                          style={{ fontSize: "12px" }}
                          className="text-capitalize text-black-50"
                        >
                          200px By 200px
                        </span>
                      </div>
                    </div>
                  )}
                  {thumbs.length > 0 && <div>{thumbs}</div>}
                </Button>
                <div>
                  {files.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setFieldValue(name, "");
                        setFiles([]);
                      }}
                    >
                      {" "}
                      <i
                        icon={["fas", "times"]}
                        className="font-size-sm"
                        style={{
                          position: "relative",
                          bottom: 60,
                          left: 130,
                          cursor: "pointer",
                        }}
                      />
                    </span>
                  ))}
                </div>
                {fileLargeError && (
                  <div
                    style={{
                      color: "#ff4d4d",
                      fontSize: "12px",
                      marginLeft: "15px",
                    }}
                  >
                    {fileLargeError === "file-too-large"
                      ? "Image is too large"
                      : fileLargeError === "file-invalid-type"
                      ? "Invalid file type. Only jpg, jpeg and png files are allowed"
                      : "File not Uploaded"}
                  </div>
                )}{" "}
                {validationSchema ? (
                  <div>
                    {errors && touched && (
                      <p
                        style={{
                          color: "#ff4d4d",
                          fontSize: "12px",
                          marginLeft: "15px",
                        }}
                      >
                        {errors}
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropzone;
