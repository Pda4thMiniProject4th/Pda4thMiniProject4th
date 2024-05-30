import React from "react";
import { Row } from "react-bootstrap";
import Seat from "./Seat";

export default function SeatingRow({ seats, meta, setMeta, orders }) {
  console.log(seats);

  const rows = [];
  for (let i = 0; i < seats.length; i += 8) {
    const rowSeats = seats.slice(i, i + 8);
    rows.push(rowSeats);
  }
  return (
    <Row>
      {rows.map((seat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", marginRight: "30px" }}>
            {seat.slice(0, 4).map((se, index) => (
              <Seat
                key={index}
                size={2}
                occupied={se.userName !== "Empty"}
                setMeta={setMeta}
                number={se.userName}
                seatNumber={se.seatNumber}
                meta={meta}
                orders={orders}
              />
            ))}
          </div>
          <div style={{ display: "flex", marginLeft: "30px" }}>
            {seat.slice(4).map((se, index) => (
              <Seat
                key={index}
                size={2}
                occupied={se.userName !== "Empty"}
                setMeta={setMeta}
                number={se.userName}
                seatNumber={se.seatNumber}
                meta={meta}
                orders={orders}
              />
            ))}
          </div>
        </div>
      ))}
    </Row>
  );
}
