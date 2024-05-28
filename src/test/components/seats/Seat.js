import React from "react";
import "./Seat.css";

const Seat = ({ size, occupied, number, isCurrentUser = false }) => {
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

  console.log(isCurrentUser);

  return (
    <div
      style={seatStyle}
      xs={size}
      className={`seat ${isCurrentUser && "active"}`}
    >
      {number}
    </div>
  );
};

export default Seat;
