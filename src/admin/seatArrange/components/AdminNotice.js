import React, { useState } from "react";
import "../css/AdminNotice.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function AdminNotice({ orders }) {
  const [year, setYear] = useState("2024년");
  const [month, setMonth] = useState("1월");
  const [date, setDate] = useState("1일");
  return (
    <Container className="adminNotice">
      <Row>
        <h3 className="title">자리를 바꿀 날짜를 선택해 주세요</h3>

        <Form
          className="form"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Row>
            <Form.Select
              className="formSelect"
              aria-label="Year"
              defaultValue={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {Array.from(
                { length: 100 },
                (_, index) => new Date().getFullYear() - index
              ).map((year) => (
                <option key={year}>{year}년</option>
              ))}
            </Form.Select>
            <Form.Select
              className="formSelect"
              aria-label="Month"
              onChange={(e) => setMonth(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, index) => index + 1).map(
                (month) => (
                  <option key={month}>{month}월</option>
                )
              )}
            </Form.Select>
            <Form.Select
              className="formSelect"
              aria-label="Day"
              defaultValue={date}
              onChange={(e) => setDate(e.target.value)}
            >
              {Array.from({ length: 31 }, (_, index) => index + 1).map(
                (day) => (
                  <option key={day}>{day}일</option>
                )
              )}
            </Form.Select>
          </Row>
          <Col style={{ textAlign: "end", paddingTop: "2rem" }}>
            <Button
              variant="secondary"
              onClick={async () => {
                const formattedYear = year.replace("년", "");
                const formattedMonth = month.replace("월", "").padStart(2, "0");
                const formattedDate = date.replace("일", "").padStart(2, "0");
                try {
                  axios.post("/notice", {
                    orders,
                    rearrange_at:
                      formattedYear +
                      "-" +
                      formattedMonth +
                      "-" +
                      formattedDate,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              변경
            </Button>{" "}
          </Col>
        </Form>
      </Row>
    </Container>
  );
}
