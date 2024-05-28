import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SeatingRow2 from "./Row2";
import axios from "axios";
const SeatingChart_live = ({ countData }) => {
  const rows = 8; // 총 8개의 행
  const seatsPerRow = 6; // 각 행당 6개의 좌석
  // const seatingPlan = [];
  const [frontCount, setFrontCount] = useState(0);
  const [backCount, setBackCount] = useState(0);
  const [seatingPlan, setSeatingPlan] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/users/3"); //orders 3인 예시
        if (response.data) {
          const { frontCount, backCount } = response.data;
          setFrontCount(frontCount);
          setBackCount(backCount);
          initializeSeating(frontCount, backCount);
        }
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch count:", error); // 에러 처리
      }
    };

    fetchCount(); // 함수 실행
  }, []);

  useEffect(() => {
    initializeSeating(countData.frontCount, countData.backCount);
  }, [countData]);

  const initializeSeating = (frontCount, backCount) => {
    const newSeatingPlan = Array.from({ length: rows }, () =>
      // 8*6
      Array.from({ length: seatsPerRow }, () => ({
        occupied: false, //silver
        selected: "", //빈좌석
      }))
    );

    // Front seats
    for (let i = 0; i < frontCount; i++) {
      const row = Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row < rows) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].selected = "X";
      }
    }

    // Back seats
    for (let i = 0; i < backCount; i++) {
      const row = rows - 1 - Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row >= 0) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].selected = "X";
      }
    }

    setSeatingPlan(newSeatingPlan);
  };

  return (
    <Container>
      {seatingPlan.map((row, index) => (
        <SeatingRow2 key={index} seats={row} />
      ))}
    </Container>
  );
};

export default SeatingChart_live;
