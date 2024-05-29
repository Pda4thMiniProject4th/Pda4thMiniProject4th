import React, { useState, useEffect } from "react";
import axios from "axios";
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
          <div style={{ display: "flex", marginRight: "30px" }}>
            {row.slice(0, 4).map((seat, index) => (
              <Seat
                key={index}
                size={2}
                occupied={seat.userName !== "Empty"}
                name={seat.userName}
                isCurrentUser={loggedInUserId[userId] === seat.seatNumber}
              />
            ))}
          </div>
          <div style={{ display: "flex", marginLeft: "30px" }}>
            {row.slice(4).map((seat, index) => (
              <Seat
                key={index}
                size={2}
                occupied={seat.userName !== "Empty"}
                name={seat.userName}
                isCurrentUser={loggedInUserId[userId] === seat.seatNumber}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatingRow;
