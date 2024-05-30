import React, { useState } from "react";
import ManageUser from "./ManageUser";
import SeatArrangePage from "./SeatArrange";

export default function AdminPage() {
  const [orders, setOrders] = useState(
    Number(localStorage.getItem("orders")) || 3
  );
  return (
    <>
      {/* <SeatArrangePage orders={orders} setOrders={setOrders}></SeatArrangePage> */}
      <ManageUser orders={orders} setOrders={setOrders}></ManageUser>
    </>
  );
}
