import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Row, Form } from "react-bootstrap";
import "../css/UserInfo.css";
import axios from "axios";

export default function Reason({ elem, index, setIsClicked, setMessage }) {
  const [hasIssue, setHasIssue] = useState(true);
  const [clickName, setClickName] = useState(false);
  const [name, setName] = useState(elem.name);
  const [orders, setOrders] = useState(elem.orders);
  const [seatOption, setSeatOption] = useState(elem.seat_option);

  const reasonClick = (isChecked, elem) => {
    console.log("dev");

    const load = async () => {
      const id = elem.id;
      try {
        await axios.put("/users", {
          id,
          isChecked,
        });

        if (isChecked) {
          setMessage("승인되었습니다.");
          setSeatOption(-1);
        } else {
          setMessage("거절되었습니다.");
          setSeatOption(0);
        }
        elem.reason = "-";

        setIsClicked(true);
        setHasIssue(false);
      } catch (error) {
        console.log(error);
        setMessage("서버 에러 입니다.");
      }
    };
    load();
  };

  return (
    <Row key={elem._id} className="infoRow">
      <Col className="infoCol">{index + 1}</Col>
      {!clickName ? (
        <Col
          className="infoCol"
          onClick={() => {
            setClickName(true);
          }}
          style={{
            cursor: "pointer",
          }}
        >
          {name}
        </Col>
      ) : (
        <Col className="infoCol">
          <input
            style={{ width: "5rem" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setClickName(false);
              }
            }}
          ></input>
        </Col>
      )}
      <Col className="infoCol">
        <Form.Select
          value={orders}
          onChange={(e) => {
            setOrders(Number(e.target.value));
          }}
        >
          {[3, 4].map((order) => (
            <option key={order} value={order}>
              {order}기
            </option>
          ))}
        </Form.Select>
      </Col>

      <Col className="infoCol">
        <Form.Select
          value={seatOption}
          onChange={(e) => {
            setSeatOption(Number(e.target.value));
            elem.seat_option = Number(e.target.value);
          }}
        >
          <option value={-1} style={{ color: "blue" }}>
            뒷자리
          </option>
          <option value={-2} style={{ color: "red" }}>
            승인 대기중
          </option>
          <option value={1} style={{ color: "green" }}>
            앞자리
          </option>
          <option value={0} style={{ color: "black" }}>
            랜덤
          </option>
        </Form.Select>
      </Col>
      <Col className="infoCol" xs={6}>
        {!elem.reason ? (
          <div
            style={{
              maxWidth: "90%",
              overflow: "auto",
              wordWrap: "break-word",
              whiteSpace: "nowrap",
            }}
          >
            -
          </div>
        ) : (
          elem.reason
        )}
        {elem.seat_option === -2
          ? hasIssue && (
              <div style={{ display: "flex", flexDirection: "col" }}>
                <CheckIcon
                  className="icon"
                  onClick={() => reasonClick(true, elem)}
                ></CheckIcon>
                <CloseIcon
                  className="icon"
                  onClick={() => reasonClick(false, elem)}
                ></CloseIcon>
              </div>
            )
          : ""}
      </Col>
    </Row>
  );
}
