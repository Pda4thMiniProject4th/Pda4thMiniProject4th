import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import SeatingRow from "./Row";

export default function AdminSeatingChart({
  meta,
  setMeta,
  orders,
  setOrders,
  maxSeat,
  setUserNames,
  userNames,
}) {
  const seatsPerRow = 8;

  useEffect(() => {
    const fetchUserNames = async () => {
      try {
        const response = await axios.get(`/seats/current/${orders}`);
        setUserNames(response.data);
      } catch (error) {
        console.error("Failed to fetch user names:", error);
      }
    };

    fetchUserNames();
  }, [orders]);

  const seats = Array.from({ length: 48 }, (_, index) => ({
    seatNumber: index + 1,
    userName: userNames[index + 1] || "",
  }));

  const seatingPlan = [];
  for (let i = 0; i < seats.length; i += seatsPerRow) {
    seatingPlan.push(seats.slice(i, i + seatsPerRow));
  }
  console.log("row", seatingPlan);

  return (
    <Container>
      {seatingPlan.map((row, index) => (
        <SeatingRow
          key={index}
          seats={row}
          meta={meta}
          setMeta={setMeta}
          orders={orders}
        />
      ))}
    </Container>
  );
}
