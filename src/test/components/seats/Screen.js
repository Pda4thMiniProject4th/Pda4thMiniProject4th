import React from "react";
// import "./Seat.css";

const Screen = ({}) => {
  const screenStyle = {
    backgroundColor: "#6d7679",
    // border: "1px solid black",
    height: "20px",
    width: "842px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    borderRadius: "6px",
    padding: "4px",
  };
  const screenTextStyle = {
    color: "#ffff",
  };

  return (
    <div
      style={screenStyle}
      //   xs={size}
      //   className={`seat ${isCurrentUser && "active"}`}
    >
      {/* {name} */}
      <span style={screenTextStyle}>스크린</span>
    </div>
  );
};

export default Screen;
