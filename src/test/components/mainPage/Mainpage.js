import React, { useState, useEffect } from "react";
import Root from "../seats/Root";
import Drawertest from "../myPage/Drawertest";
import Notice from "../notices/Notice";
import "./Mainpage.css";
import Root2 from "../seats/Root2";
import Root3 from "../seats/Root3";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Mainpage() {
  const location = useLocation();
  const [userId, setUserId] = useState(location.state?.userId);
  const [order, setOrder] = useState(0);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const fetchUserOrder = async () => {
      try {
        const response = await axios.get(`/users/mainpage/${userId}`);
        // const orders = response.data.orders;
        const { orders, profile } = response.data;
        setOrder(orders);
        setProfile(profile);
      } catch (error) {
        console.error("Failed to fetch order:", error);
      }
    };

    fetchUserOrder();
  }, [userId]);

  console.log("resr", userId);
  return (
    <div className="home">
      {/* <div className="inline-components"> */}
      <Drawertest userId={userId} profile={profile} /> {/*id*/}
      <div className="center-item">
        <Notice order={order} /> {/*기수*/}
      </div>
      {/* <Root2 />
      <Root /> */}
      <Root3 userId={userId} order={order} />
    </div>
  );
}
