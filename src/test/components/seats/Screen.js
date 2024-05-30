import React from "react";
// import "./Seat.css";

const Screen = ({}) => {
  const screenStyle = {
    backgroundColor: "gray",
    // border: "1px solid black",
    height: "8px",
    width: "842px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    borderRadius: "2px",
  };

  return (
    <div
      style={screenStyle}
      //   xs={size}
      //   className={`seat ${isCurrentUser && "active"}`}
    >
      {/* {name} */}
    </div>
  );
};

export default Screen;
