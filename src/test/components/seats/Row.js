import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Seat from "./Seat"; // 경로 확인 필요 (예: "./Seat")

const SeatingRow = ({ seats }) => {
  console.log(seats);
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    // 서버에서 사용자 이름을 가져오는 함수
    const fetchUserIds = async () => {
      try {
        const response = await axios.get("/seats/10"); // API 경로 수정 필요
        console.log(response);
        setLoggedInUserId(response.data.userId);
        // setLoggedInUserId("2");
      } catch (error) {
        console.error("Failed to fetch user names:", error); // 에러 처리
      }
    };

    fetchUserIds(); // 함수 실행
  }, []);

  // 2번 유저인 친구가 필요해요. (현재는 없음.)
  // console.log(loggedInUserId);
  return (
    <Row>
      {seats.map((seat, index) => (
        <Seat
          key={index}
          size={2} // Bootstrap grid 시스템에서 총 12열 중 2의 크기 (6개 좌석)
          occupied={seat.userName !== "Empty"}
          number={seat.userName} // 사용자 이름을 number prop으로 전달,
          userId={seat.userId}
          //아이디 일치 여부의 조건문
          // isCurrentUser={}

          isCurrentUser={seat.userId === loggedInUserId} // 현재 로그인한 사용자 ID와 비교
        />
      ))}
    </Row>
  );
};

export default SeatingRow;
