import React from "react";
import { Row } from "react-bootstrap";
import Seat from "./Seat";

const SeatingRow = ({ seats, startNumber }) => {
  return (
    <Row noGutters={true}>
      {seats.map((seat, index) => (
        <Seat
          key={index}
          size={seat.size}
          occupied={seat.occupied}
          number={startNumber + index}
        />
      ))}
    </Row>
  );
};

export default SeatingRow;
