import React, { useState, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Col, Container, Row } from "react-bootstrap";
import "../css/UserInfo.css";
import axios from "axios";

export default function Reason({ elem, index, setIsClicked, setMessage }) {
  const [hasIssue, setHasIssue] = useState(true);
  const reasonClick = (isChecked, elem) => {
    console.log("dev");

    const load = async () => {
      const id = elem.id;
      try {
        const setUser = await axios.put("/users", {
          id,
          isChecked,
        });

        if (isChecked) {
          setMessage("승인되었습니다.");
          elem.seat_option = -1;
        } else {
          setMessage("거절되었습니다.");
          elem.seat_option = 0;
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
      <Col className="infoCol">{elem.name}</Col>
      <Col className="infoCol">{elem.orders}</Col>

      {elem.seat_option === -1 ? (
        <Col className="infoCol" style={{ color: "blue" }}>
          뒷자리
        </Col>
      ) : elem.seat_option === -2 ? (
        <Col className="infoCol" style={{ color: "red" }}>
          승인 대기중
        </Col>
      ) : elem.seat_option === 1 ? (
        <Col className="infoCol" style={{ color: "green" }}>
          앞자리
        </Col>
      ) : (
        <Col className="infoCol" style={{ color: "black" }}>
          랜덤
        </Col>
      )}
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
