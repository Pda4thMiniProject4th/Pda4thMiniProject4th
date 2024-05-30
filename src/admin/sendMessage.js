import axios from "axios";

export const sendMessage = async ({ text }) => {
  try {
    const { data } = await axios.post("/send-message", {
      text,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const sendImage = async ({ image }) => {
  try {
    const formData = new FormData();
    formData.append("image", image, "seating_chart.png");

    const response = await axios.post("/upload-image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
  } catch (error) {
    console.error("Error sending image:", error);
  }
};
