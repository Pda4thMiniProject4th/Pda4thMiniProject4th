import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminNotice from "./AdminNotice";
import AdminSeatArrange from "./AdminSeatArrange";
import axios from "axios";

export default function SeatArrangePage() {
  const [orders, setOrders] = useState(
    Number(localStorage.getItem("orders")) || 3
  );
  const [meta, setMeta] = useState(
    JSON.parse(localStorage.getItem("meta")) || [
      { orders: 3, prohibit_seat: [] },
      { orders: 4, prohibit_seat: [] },
    ]
  );
  const [dates, setDates] = useState("");

  useEffect(() => {
    const getDate = async () => {
      const dateJson = await axios.get(`notice/mainpage/${orders}`);
      setDates(dateJson.rearrange_at);
    };
    getDate();
  }, []);

  useEffect(() => {
    localStorage.setItem("meta", JSON.stringify(meta));
  }, [meta]);

  useEffect(() => {
    localStorage.setItem("orders", orders);
  }, [orders]);

  return (
    <>
      <AdminNavbar orders={orders} setOrders={setOrders}></AdminNavbar>
      <AdminNotice orders={orders} dates={dates}></AdminNotice>
      <AdminSeatArrange
        orders={orders}
        setOrders={setOrders}
        meta={meta}
        setMeta={setMeta}
      ></AdminSeatArrange>
    </>
  );
}
