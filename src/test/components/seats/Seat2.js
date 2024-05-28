import React from "react";
//import "./Seat.css";

const Seat2 = ({ size, occupied, isSelected }) => {
  const seatStyle = {
    backgroundColor: occupied ? "gray" : "silver",
    border: "1px solid black",
    height: "35px",
    width: "60px",
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={seatStyle} xs={size}>
      {isSelected}
    </div>
  );
};

export default Seat2;
