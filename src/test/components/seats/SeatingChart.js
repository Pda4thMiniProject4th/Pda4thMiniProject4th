import React from "react";
import { Container } from "react-bootstrap";
import SeatingRow from "./Row";

const SeatingChart = () => {
  const seatingPlan = [
    [
      { size: 1, occupied: false },
      { size: 1, occupied: false },
    ],
    [
      { size: 1, occupied: false },
      { size: 1, occupied: true },
      { size: 1, occupied: false },
      { size: 1, occupied: false },
    ],
    // Add more rows as per your design...
  ];

  return (
    <Container>
      {seatingPlan.map((row, index) => {
        const startNumber = index * 10 + 1; // 각 행마다 시작 번호를 조정합니다. (예: 1, 11, 21, ...)
        return <SeatingRow key={index} seats={row} startNumber={startNumber} />;
      })}
    </Container>
  );
};

export default SeatingChart;
