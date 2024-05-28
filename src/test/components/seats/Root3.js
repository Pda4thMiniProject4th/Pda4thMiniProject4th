import React, { useState } from "react";
import SeatingChart_current from "./SeatingChart_current";
import SeatingChart_live from "./SeatingChart_live";
import SelectButton from "./SelectButton";
import "./Root3.css";

export default function Root3() {
  const [countData, setCountData] = useState([]);
  return (
    <div className="seat-current-live" style={{ display: "flex" }}>
      <div>
        <h3>현재 자리</h3>
        <SeatingChart_current />
      </div>
      <div className="live-set">
        <div style={{ display: "flex" }} className="live-title">
          <h4>실시간 자리 현황</h4>
          <SelectButton onDataFetched={setCountData} /> {/*id, 기수*/}
        </div>
        <div className="live-seat">
          <SeatingChart_live countData={countData} /> {/*id, 기수*/}
        </div>
      </div>
    </div>
  );
}
