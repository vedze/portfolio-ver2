import nodemailer from "nodemailer";

export interface EmailForm {
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
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.GOOGLE_EMAIL,
  //     pass: process.env.GOOGLE_PWD,
  //   },
  //   // logger: true,
  // });

  // naver transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NAVER_EMAIL,
      pass: process.env.NAVER_PWD,
    },
  });

  // mailing option
  const contactEmail: EmailOption = {
    from: process.env.NAVER_EMAIL || "",
    to: `${process.env.GOOGLE_EMAIL}, ${process.env.NAVER_EMAIL}` || "",
    title: `[CONTACT] ${title}`,
    html: `
        <h1>${title}</h1>
        <div>${text}</div>
        <br/>
        <strong>From: ${from}</strong>
    `,
  };

  return transporter.sendMail(contactEmail, (err, info) => {
    if (err) {
      console.error("오류 발생: ", err);
    } else {
      console.log("이메일 전송 성공: ", info.response);
    }
  });
}
