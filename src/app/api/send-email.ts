import { EmailForm } from "./email";

export async function SendContactEmail(contactEmail: EmailForm) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactEmail),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();
  console.log("data: ", data);

  return data;
}
