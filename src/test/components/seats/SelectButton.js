import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

const SelectButton = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [inputText, setInputText] = useState("");

  const fetchUserInfo = async () => {
    try {
      const id = 2; //테스트
      let reason = ""; //테스트

      if (selectedOption === -2) {
        reason = inputText;
      }
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

  const handleSelectChange = (e) => {
    const option = Number(e.target.value);
    setSelectedOption(option);
    if (option === -2) {
      setShowModal(true);
    } else {
      setShowModal(false);
      setInputText(null);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Form.Select
        aria-label="Default select example"
        defaultValue={0}
        style={{ width: "100px" }}
        onChange={handleSelectChange}
      >
        <option value={0}>랜덤</option>
        <option value={1}>앞자리</option>
        <option value={-2}>뒷자리</option>
      </Form.Select>
      <Button variant="info" onClick={fetchUserInfo}>
        확인
      </Button>{" "}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>뒷자리 선택 사유를 입력하세요.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control
            type="text"
            placeholder="이유를 입력하세요"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SelectButton;
