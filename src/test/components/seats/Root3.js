import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SeatingChart_current from "./SeatingChart_current";
import SeatingChart_live from "./SeatingChart_live";
import SelectButton from "./SelectButton";

export default function Root3() {
  const [countData, setCountData] = useState([]);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h3>현재 자리</h3>
        <SeatingChart_current />
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <h3>실시간 자리 현황</h3>
          <SelectButton onDataFetched={setCountData} />
        </div>
        <SeatingChart_live countData={countData} />
      </div>
    </div>
  );
}
