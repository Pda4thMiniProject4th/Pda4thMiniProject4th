import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/UserInfo.css";
import axios from "axios";
import Reason from "./Reason";

export default function UserInfo({ orders, setIsClicked, setMessage }) {
  const [users, setUsers] = useState([]);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const load = async () => {
      const getUser = await axios.get(`users/orders/${orders}`);
      setUsers(getUser.data);
      console.log(users);
    };
    load();
  }, [orders, reRender]);

  return (
    <Container className="info">
      <Row className="containerRow">
        <Row className="infoRow">
          <Col className="infoCol">번호</Col>
          <Col className="infoCol">이름</Col>
          <Col className="infoCol">기수</Col>
          <Col className="infoCol">앞/뒤</Col>
          <Col className="infoCol" xs={6}>
            사유
          </Col>
        </Row>
        {users.map((elem, index) => {
          return (
            <Reason
              key={elem.id + index * 100}
              elem={elem}
              index={index}
              setIsClicked={setIsClicked}
              setMessage={setMessage}
              reRender={reRender}
              setReRender={setReRender}
            ></Reason>
          );
        })}
      </Row>
    </Container>
  );
}
