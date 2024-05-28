import React from "react";
import "./Seat.css";

const Seat2 = ({ size, occupied, number }) => {
  const seatStyle = {
    backgroundColor: occupied ? "gray" : "silver",
    border: "1px solid black",
    height: "35px",
    width: "100px",
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={seatStyle} xs={size}>
      {number}
    </div>
  );
};

export default Seat2;
