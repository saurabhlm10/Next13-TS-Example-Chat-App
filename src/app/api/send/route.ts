import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  try {
    console.log("POST1");

    const { text }: { text: string } = await req.json();

    console.log("POST2");

    console.log("TEXT", text);

    pusherServer.trigger("chat", "incoming-message", { text });

    console.log("POST3");

    return new Response("OK");
  } catch (error) {
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Internal Server Error", { status: 500 });
  }
}
