import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/AdminNavbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function AdminNavbar({ orders, setOrders }) {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Nav.Link
              className="navLink"
              onClick={() => navigate("/seatarrangepage")}
            >
              자리 배치
            </Nav.Link>
            <Nav.Link
              className="navLink"
              onClick={() => navigate("/usermanagepage")}
            >
              유저 관리
            </Nav.Link>
          </Nav>
          <Row className="align-items-center">
            <Col className="navLink">관리자님 안녕하세요.</Col>
            <Col xs="auto">
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
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}
