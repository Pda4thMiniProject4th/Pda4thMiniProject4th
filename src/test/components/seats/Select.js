import Form from "react-bootstrap/Form";

function Select() {
  return (
    <Form.Select
      aria-label="Default select example"
      defaultValue="0"
      style={{ width: "100px" }}
    >
      <option value="0">랜덤</option>
      <option value="1">앞자리</option>
      <option value="-1">뒷자리</option>
    </Form.Select>
  );
}

export default Select;
