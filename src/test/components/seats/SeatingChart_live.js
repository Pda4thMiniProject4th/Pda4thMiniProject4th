import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SeatingRow2 from "./Row2";
import Screen2 from "./Screen2";
import axios from "axios";

const SeatingChart_live = ({ countData, userId, order }) => {
  const rows = 6; // 총 8개의 행
  const seatsPerRow = 8; // 각 행당 6개의 좌석
  const [frontCount, setFrontCount] = useState(0);
  const [backCount, setBackCount] = useState(0);
  const [seatingPlan, setSeatingPlan] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get(`/users/${order}`);
        if (response.data) {
          const { frontCount, backCount } = response.data;
          setFrontCount(frontCount);
          setBackCount(backCount);
          initializeSeating(frontCount, backCount);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch count:", error);
      }
    };

    fetchCount();
  }, [order]);

  useEffect(() => {
    initializeSeating(countData.frontCount, countData.backCount);
  }, [countData]);

  const initializeSeating = (frontCount, backCount) => {
    const newSeatingPlan = Array.from({ length: rows }, () =>
      Array.from({ length: seatsPerRow }, () => ({
        occupied: false,
        selected: false,
      }))
    );

    // Front seats
    for (let i = 0; i < frontCount; i++) {
      const row = Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row < rows) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].selected = true;
      }
    }

    // Back seats
    for (let i = 0; i < backCount; i++) {
      const row = rows - 1 - Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row >= 0) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].selected = true;
      }
    }

    setSeatingPlan(newSeatingPlan);
  };

  return (
    <Container>
      <div className="screen2style" style={{ margin: "auto" }}>
        <Screen2 />
      </div>
      {seatingPlan.map((row, rowIndex) => (
        <SeatingRow2 key={rowIndex} seats={row} />
      ))}
    </Container>
  );
};

export default SeatingChart_live;
