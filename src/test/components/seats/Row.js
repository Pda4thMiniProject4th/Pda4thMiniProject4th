import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Seat from "./Seat";

const SeatingRow = ({ seats, userId, order }) => {
  const [loggedInUserId, setLoggedInUserId] = useState("");
  useEffect(() => {
    const fetchUserIds = async () => {
      if (!order) {
        return;
      }
      try {
        const response = await axios.get(`/seats/${order}`);
        setLoggedInUserId(response.data);
      } catch (error) {
        console.error("Failed to fetch user names:", error);
      }
    };
    fetchUserIds();
  }, [order]);

  return (
    <Row>
      {seats.map((seat, index) => {
        return (
          <Seat
            key={index}
            size={2}
            occupied={seat.userName !== "Empty"}
            name={seat.userName}
            isCurrentUser={loggedInUserId[userId] === seat.seatNumber}
          />
        );
      })}
    </Row>
  );
};

export default SeatingRow;
