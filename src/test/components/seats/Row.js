import React from "react";
import { Row } from "react-bootstrap";
import Seat from "./Seat"; // 경로 확인 필요 (예: "./Seat")

const SeatingRow = ({ seats }) => {
  return (
    <Row>
      {seats.map((seat, index) => (
        <Seat
          key={index}
          size={2} // Bootstrap grid 시스템에서 총 12열 중 2의 크기 (6개 좌석)
          occupied={seat.userName !== "Empty"}
          number={seat.userName} // 사용자 이름을 number prop으로 전달
        />
      ))}
    </Row>
  );
};

export default SeatingRow;
