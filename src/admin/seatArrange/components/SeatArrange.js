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

  const [isClicked, setIsClicked] = useState(false);

  const [message, setMessage] = useState("");
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
  useEffect(() => {
    let timer;
    console.log(isClicked);
    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false);
      }, 2000);
    }
    return () => clearTimeout(timer); // Cleanup function clears the timer
  }, [isClicked]); // Empty dependency array

  return (
    <>
      <AdminNavbar orders={orders} setOrders={setOrders}></AdminNavbar>
      <AdminNotice
        orders={orders}
        dates={dates}
        message={message}
        setMessage={setMessage}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      ></AdminNotice>
      <AdminSeatArrange
        orders={orders}
        setOrders={setOrders}
        meta={meta}
        setMeta={setMeta}
        message={message}
        setMessage={setMessage}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      ></AdminSeatArrange>
      {isClicked && (
        <div
          className={`fixed w-[80%] bottom-4 mx-auto transform bg-black text-white text-center py-2 px-4 rounded`}
        >
          {message}
        </div>
      )}
    </>
  );
}
