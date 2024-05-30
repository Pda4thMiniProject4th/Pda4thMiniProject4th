import React, { useState } from "react";
import { Col } from "react-bootstrap";

const Seat = ({
  size,
  occupied,
  number,
  meta,
  setMeta,
  orders,
  seatNumber,
}) => {
  const prohibits = meta.filter((item) => item.orders === orders)[0]
    .prohibit_seat;
  const setProhibits = (arr) => {
    meta.map((item) => console.log(item));
    const data = meta.filter((item) => item.orders !== orders);
    setMeta([...data, { orders: Number(orders), prohibit_seat: arr }]);
  };
  const [isClicked, setIsClicked] = useState(
    prohibits.includes(seatNumber) ? true : false
  );
  const seatStyle = {
    backgroundColor: isClicked
      ? "black"
      : occupied
      ? "rgb(77, 134, 156)"
      : "silver",
    color: "white",
    borderRadius: "5px",
    height: "35px",
    width: "100px",
    margin: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Col
      style={seatStyle}
      xs={size}
      onClick={() => {
        console.log(seatNumber);
        if (!isClicked) {
          console.log(...prohibits);
          setProhibits([...prohibits, seatNumber]);
        } else {
          setProhibits(prohibits.filter((num) => num !== seatNumber));
        }
        setIsClicked(!isClicked);
      }}
    >
      {isClicked ? "X" : number}
    </Col>
  );
};

export default Seat;
