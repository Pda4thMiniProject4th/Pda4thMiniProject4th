import React from "react";
import { Row } from "react-bootstrap";
import Seat2 from "./Seat2";
const SeatingRow2 = ({ seats }) => {
  return (
    <Row>
      {seats.map((seat, index) => (
        <Seat2
          key={index}
          size={2} // Bootstrap grid 시스템에서 총 12열 중 2의 크기 (6개 좌석)
          occupied={seat.selected !== ""} // ""선택된게 아니라면 gray
          isSelected={seat.selected} // 자리의 선택 여부
        />
      ))}
    </Row>
  );
};

export default SeatingRow2;
