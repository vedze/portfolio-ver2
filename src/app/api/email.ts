import nodemailer from "nodemailer";

interface EmailForm {
  from: string;
  title: string;
  text: string;
}

interface EmailOption {
  from: string;
  to: string; // 내 메일
  title: string;
  html: string; // 내용 형식
}

export function ContactEmailForm({ from, title, text }: EmailForm) {
  // google transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_PWD,
    },
    logger: true,
  });

  // mailing option
  const contactEmail: EmailOption = {
    from: process.env.GOOGLE_EMAIL || "",
    to: process.env.GOOGLE_EMAIL || "",
    title: `[CONTACT] ${title}`,
    html: `
        <h1>${title}</h1>
        <div>${text}</div>
        <br/>
        <strong>From: ${from}</strong>
    `,
  };

  return transporter.sendMail(contactEmail);
}
