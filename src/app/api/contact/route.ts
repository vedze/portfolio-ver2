import { ContactEmailForm } from "../email";

export async function POST(required: Request) {
  try {
    const response = await required.json();
    ContactEmailForm(response); // await 제거하여 실패 시 처리 불가. 수정 필요

    return (
      // 성공 시 success 메시지, 200: 서버 요청 성공 코드
      new Response(JSON.stringify({ message: "success!" }), { status: 200 })
    );
  } catch (error) {
    return (
      // 실패 시 failed 메시지, 500: 내부 서버 오류, 구체적인 내용 표시 불가 코드
      new Response(JSON.stringify({ message: "failed!" }), { status: 500 })
    );
  }
}
