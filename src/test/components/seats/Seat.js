import React from "react";
import { Col } from "react-bootstrap";

const Seat = ({ size, occupied, number }) => {
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
    <Col style={seatStyle} xs={size}>
      {number}
    </Col>
  );
};

export default Seat;
