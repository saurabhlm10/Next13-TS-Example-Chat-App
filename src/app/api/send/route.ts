import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    pusherServer.trigger("chat", "incoming-message", text);

    return new Response("OK");
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
