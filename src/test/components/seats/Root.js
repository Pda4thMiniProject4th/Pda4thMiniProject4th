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
            <SeatingChart_current />
          </div>
        </Col>
        <Col xs={12} sm={6} className="d-flex justify-content-center">
          <div>
            <SeatingChart_live />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
