import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import UserInfo from "./UserInfo";

export default function ManageUser() {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("복사되었습니다");
  const [orders, setOrders] = useState(
    Number(localStorage.getItem("orders")) || 3
  );

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
      <UserInfo
        orders={orders}
        setIsClicked={setIsClicked}
        setMessage={setMessage}
      />
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
