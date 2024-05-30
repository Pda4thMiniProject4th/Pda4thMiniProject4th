import html2canvas from "html2canvas";
import { sendImage } from "./sendMessage";

export async function captureAdminSeatingChart() {
  const targets = document.getElementsByClassName("adminSeatingChart");
  if (!targets || targets.length === 0) {
    console.log(targets);
    return alert("결과 저장에 실패했습니다.");
  }
  Array.from(targets).forEach(async (target, index) => {
    try {
      const canvas = await html2canvas(target);
      const url = canvas.toDataURL("image/png");
      const blob = await (await fetch(url)).blob();

      await sendImage({ image: blob });

      console.log("Image uploaded");
    } catch (error) {
      console.error("Error capturing and sending image:", error);
    }
  });
}
