import { ContactEmailForm } from "../email";

export async function POST(required: Request) {
  try {
    const response = await required.json();
    await ContactEmailForm(response);

    return new Response(JSON.stringify({ message: "success!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "failed!" }), {
      status: 500,
    });
  }
}
