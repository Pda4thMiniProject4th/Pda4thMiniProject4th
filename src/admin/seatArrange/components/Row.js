import React from "react";
import { Row } from "react-bootstrap";
import Seat from "./Seat";

export default function SeatingRow({ seats, meta, setMeta, orders }) {
  return (
    <Row>
      {seats.map((seat, index) => (
        <Seat
          key={index}
          size={2}
          occupied={seat.userName !== "Empty"}
          setMeta={setMeta}
          number={seat.userName}
          seatNumber={seat.seatNumber}
          meta={meta}
          orders={orders}
        />
      ))}
    </Row>
  );
}
