import React from "react";
import "./Seat.css";

const Seat = ({ size, occupied, name, isCurrentUser = false }) => {
  const seatStyle = {
    backgroundColor: occupied ? "#4D869C" : "silver",
    // border: "1px solid black",
    height: "35px",
    width: "100px",
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  };
  const nameStyle = {
    color: "#ffff",
  };
  return (
    <div
      style={seatStyle}
      xs={size}
      className={`seat ${isCurrentUser && "active"}`}
    >
      <span style={nameStyle}>{name}</span>
    </div>
  );
};

export default Seat;
