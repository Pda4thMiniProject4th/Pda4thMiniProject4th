import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Select from "./Select";
import SelectButton from "./SelectButton";

export default function Root2() {
  return (
    <Container fluid>
      <Row>
        <Col xs={8} sm={6} className="d-flex justify-content-center">
          <div>
            <h3>현재 자리</h3>
          </div>
        </Col>
        <Col xs={8} sm={6} className="d-flex justify-content-center">
          <div style={{ display: "flex" }}>
            <h3>실시간 자리 현황</h3>
            <Select />
            <SelectButton />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
