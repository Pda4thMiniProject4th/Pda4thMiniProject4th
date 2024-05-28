import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SeatingRow2 from "./Row2";
import axios from "axios";
const SeatingChart_live = () => {
  const rows = 8; // 총 8개의 행
  const seatsPerRow = 6; // 각 행당 6개의 좌석
  // const seatingPlan = [];
  const [frontCount, setFrontCount] = useState(0);
  const [backCount, setBackCount] = useState(0);
  const [seatingPlan, setSeatingPlan] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get("/users/10"); //orders 10인 예시
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

  const initializeSeating = (frontCount, backCount) => {
    const newSeatingPlan = Array.from({ length: rows }, () =>
      Array.from({ length: seatsPerRow }, () => ({
        occupied: false,
        userName: "Empty",
      }))
    );

    // Front seats
    for (let i = 0; i < frontCount; i++) {
      const row = Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row < rows) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].userName = "X";
      }
    }

    // Back seats
    for (let i = 0; i < backCount; i++) {
      const row = rows - 1 - Math.floor(i / seatsPerRow);
      const col = i % seatsPerRow;
      if (row >= 0) {
        newSeatingPlan[row][col].occupied = true;
        newSeatingPlan[row][col].userName = "X";
      }
    }

    setSeatingPlan(newSeatingPlan);
  };
  // const initializeSeating = (frontCount, backCount) => {
  //   const newSeatingPlan = [];
  //   for (let i = 0; i < rows; i++) {
  //     const rowSeats = [];
  //     for (let j = 0; j < seatsPerRow; j++) {
  //       let occupied = false;
  //       let userName = "";
  //       // Apply front count to only the first seat of the first row(s)
  //       if (i < frontCount && j === 0) {
  //         userName = "X";
  //         occupied = true;
  //       }
  //       // Apply back count to only the first seat of the last row(s)
  //       if (i === 7 && j >= rows - backCount) {
  //         userName = "X";
  //         occupied = true;
  //       }
  //       rowSeats.push({
  //         size: 1,
  //         occupied: occupied,
  //         userName: userName,
  //       });
  //     }
  //     newSeatingPlan.push(rowSeats);
  //   }
  //   setSeatingPlan(newSeatingPlan);
  // };
  // 모든 행과 좌석 초기화(우선 임의로 ui만듬) => 아래에 주석 달은 코드(get요청 받아올 예정)
  // for (let i = 0; i < rows; i++) {
  //   const rowSeats = [];
  //   for (let j = 0; j < seatsPerRow; j++) {
  //     rowSeats.push({
  //       size: 1,
  //       occupied: false,
  //     });
  //   }
  //   seatingPlan.push(rowSeats);
  // }

  return (
    <Container>
      {seatingPlan.map((row, index) => (
        <SeatingRow2
          key={index}
          seats={row}
          // startNumber={index * seatsPerRow + 1}
        />
      ))}
    </Container>
  );
};

export default SeatingChart_live;

// 나중에 api로 get요청 받아와서 좌석 띄울 예정
// const SeatingChart = () => {
//   const [seatingPlan, setSeatingPlan] = useState([]); // 좌석 데이터를 관리할 상태 변수 초기화

//   useEffect(() => {
//     // 컴포넌트 마운트 시 데이터를 가져오는 효과
//     const fetchSeats = async () => {
//       try {
//         // API 엔드포인트에서 좌석 데이터를 비동기적으로 요청
//         const response = await axios.get('API_ENDPOINT');
//         // 응답 데이터를 상태 변수에 저장
//         setSeatingPlan(response.data);
//       } catch (error) {
//         // 데이터 요청 중 에러가 발생하면 콘솔에 로그 출력
//         console.error('Error fetching seat data:', error);
//       }
//     };

//     fetchSeats(); // 함수 호출
//   }, []); // 의존성 배열을 비워서 컴포넌트 마운트 시에만 효과 실행
