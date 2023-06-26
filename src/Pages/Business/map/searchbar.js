import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({
  searchTerm,
  handleInputChange,
  searchResults,
  handleResultClick,
}) => {
  return (
    <>
      <div
        className="position-absoulte"
        style={{
          top: "1rem",
          left: "1rem",
          zIndex: "1000",
          width: "100%",
        }}
      >
        <div
          className="d-flex align-items-center "
          style={{
            backgroundColor: "white",
            border: "1px solid lightgrey",
            padding: "0.5rem 1rem",
            width: "100%",
            flex: 1,
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            className="border border-0"
            style={{
              marginLeft: "0.5rem",
              outline: "none",
              width: "100%",
            }}
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search to find  business address"
          />
          <BiSearch onClick={() => {}} />
        </div>
        {searchResults.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              backgroundColor: "white",
              color: "black",
              width: "92%",
              marginLeft: "1.4rem",
              textAlign: "left",
              maxHeight: "25vh",
              overflowY: "auto",
              borderBottomLeftRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          >
            {searchResults.map((result, index) => (
              <React.Fragment key={index}>
                <li onClick={() => handleResultClick(result)}>
                  {result.formatted}
                </li>
                <hr />
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
