import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SeatingChart_current from "./SeatingChart_current";
import SeatingChart_live from "./SeatingChart_live";

export default function Root() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <div>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;현재 자리</h3>
            <SeatingChart_current />
          </div>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <div>
            <h3>실시간 자리 현황</h3>
            <SeatingChart_live />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
