import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../css/AdminSeatArrange.css";
import axios from "axios";
import AdminSeatingChart from "./AdminSeatingChart";
import { captureAdminSeatingChart } from "../../CaptureImg";
import Screen from "../../../test/components/seats/Screen";

export default function AdminSeatArrange({
  orders,
  setOrders,
  meta,
  setMeta,
  setMessage,
  message,
  setIsClicked,
  isClicked,
}) {
  const [max_seat, setMaxSeat] = useState(48);
  const [userNames, setUserNames] = useState({}); // 사용자 이름을 저장할 객체
  const [arrangeClicked, setArrangeClicked] = useState(false);

  useEffect(() => {
    localStorage.setItem("orders", orders);
  }, [orders]);
  useEffect(() => {
    let timer;
    if (arrangeClicked) {
      timer = setTimeout(() => {
        setArrangeClicked(false);
        captureAdminSeatingChart();
      }, 2000);
    }
    return () => clearTimeout(timer); // Cleanup function clears the timer
  }, [arrangeClicked]);

  return (
    <Container className="adminSeatArrange">
      <Row
        style={{
          marginBottom: "1rem",
        }}
      >
        <Col className="title">
          <h3 style={{ marginRight: "1rem" }}>자리 배치 하기</h3>
          <Button
            variant="secondary"
            onClick={async () => {
              const prohibit_seat = meta.filter(
                (item) => item.orders === orders
              )[0].prohibit_seat;
              try {
                console.log(prohibit_seat);
                const answer = await axios.post(`/seats/start`, {
                  orders,
                  prohibit_seat,
                  max_seat,
                });
                let newName = answer.data.body.user_seat.reduce((acc, e) => {
                  acc[e.seatNumber] = e.userName;
                  return acc;
                }, {});
                setUserNames(newName);
                setMessage("자리 배치가 완료되었습니다");
                setIsClicked(true);
                setArrangeClicked(true);
                console.log(answer);
              } catch (err) {
                console.log(err);
                alert("모든 사람이 앉을 수 없습니다. 자리를 확장해주세요.");
              }
            }}
          >
            시작
          </Button>
        </Col>
      </Row>

      <Row
        style={{
          backgroundColor: "#cde8e5",
          padding: "1rem",
        }}
      >
        <Col className="d-flex justify-content-center">
          <div className="adminSeatingChart">
            <div
              style={{
                margin: "auto",
                width: "842px",
              }}
            >
              <Screen></Screen>
            </div>
            <AdminSeatingChart
              key={orders}
              meta={meta}
              setMeta={setMeta}
              orders={orders}
              setOrders={setOrders}
              userNames={userNames}
              setUserNames={setUserNames}
              maxSeat={max_seat}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
