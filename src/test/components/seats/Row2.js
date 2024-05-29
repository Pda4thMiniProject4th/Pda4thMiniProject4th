import React from "react";
import { Row } from "react-bootstrap";
import Seat2 from "./Seat2";
const SeatingRow2 = ({ seats }) => {
  const rows = [];
  for (let i = 0; i < seats.length; i += 8) {
    const rowSeats = seats.slice(i, i + 8);
    rows.push(rowSeats);
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", marginRight: "20px" }}>
            {row.slice(0, 4).map((seat, index) => (
              <Seat2
                key={index}
                size={2} // Bootstrap grid 시스템에서 총 12열 중 2의 크기 (6개 좌석)
                occupied={seat.selected !== ""} // ""선택된게 아니라면 gray
                isSelected={seat.selected} // 자리의 선택 여부
              />
            ))}
          </div>
          <div style={{ display: "flex", marginLeft: "20px" }}>
            {row.slice(4).map((seat, index) => (
              <Seat2
                key={index}
                size={2} // Bootstrap grid 시스템에서 총 12열 중 2의 크기 (6개 좌석)
                occupied={seat.selected !== ""} // ""선택된게 아니라면 gray
                isSelected={seat.selected} // 자리의 선택 여부
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatingRow2;
