import { EmailForm } from "./email";

export async function SendContactEmail(contactEmail: EmailForm) {
  try {
    // console.log("contact Email: ", contactEmail); -> ok

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactEmail),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "서버 요청에 실패하였습니다.");
    }

    return data;
  } catch (error) {
    console.error("Fetch error: ", error);
    throw error;
  }
}
