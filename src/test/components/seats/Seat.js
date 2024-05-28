import React from "react";
import "./Seat.css";

const Seat = ({ size, occupied, name, isCurrentUser = false }) => {
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
    <div
      style={seatStyle}
      xs={size}
      className={`seat ${isCurrentUser && "active"}`}
    >
      {name}
    </div>
  );
};

export default Seat;
