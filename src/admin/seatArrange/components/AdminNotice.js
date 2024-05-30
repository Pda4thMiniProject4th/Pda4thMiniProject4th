import React, { useState } from "react";
import "../css/AdminNotice.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { sendMessage } from "../../sendMessage";

export default function AdminNotice({
  orders,

  message,
  setMessage,
  setIsClicked,
  isClicked,
}) {
  const [year, setYear] = useState("2024년");
  const [month, setMonth] = useState("1월");
  const [date, setDate] = useState("1일");
  console.log(process.env.OUR_SITE_URI);
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
                const dDay = new Date(
                  formattedYear + "-" + formattedMonth + "-" + formattedDate
                );
                const WEEKDAY = [
                  "일요일",
                  "월요일",
                  "화요일",
                  "수요일",
                  "목요일",
                  "금요일",
                  "토요일",
                ];
                try {
                  await axios.post("/notice", {
                    orders,
                    rearrange_at:
                      formattedYear +
                      "-" +
                      formattedMonth +
                      "-" +
                      formattedDate,
                  });
                  setMessage("공지가 완료되었습니다.");
                  setIsClicked(true);
                  sendMessage({
                    text: `[:bulb: 자리 재배치 안내 :chair::chair:]
${formattedMonth}/${formattedDate} ${
                      WEEKDAY[dDay.getDay()]
                    }, 자리 재배치 예정입니다.
자리 변경 중 '앞자리/뒷자리'를 희망하는 분들은
${process.env.REACT_APP_OUR_SITE_URI} 사이트에 입력부탁드립니다.`,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              공지
            </Button>{" "}
          </Col>
        </Form>
      </Row>
    </Container>
  );
}
