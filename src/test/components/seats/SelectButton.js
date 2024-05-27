import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

const SelectButton = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const fetchUserInfo = async () => {
    try {
      const id = 2; //테스트
      const reason = "질문해야해서"; //테스트
      const response = await axios.post("/seats/live", {
        id,
        seat_option: selectedOption,
        reason,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Form.Select
        aria-label="Default select example"
        defaultValue={0}
        style={{ width: "100px" }}
        onChange={(e) => setSelectedOption(Number(e.target.value))}
      >
        <option value={0}>랜덤</option>
        <option value={1}>앞자리</option>
        <option value={-1}>뒷자리</option>
      </Form.Select>
      <Button variant="info" onClick={fetchUserInfo}>
        확인
      </Button>{" "}
    </div>
  );
};

export default SelectButton;
