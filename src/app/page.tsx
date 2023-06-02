"use client";

import Messages from "@/components/Messages";
import { pusherServer } from "@/lib/pusher";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    pusherServer.trigger("chat", "incoming-message", { text: newMessage });

    // await axios.post("/api/send", { text : newMessage });
    setNewMessage("");
  };
  return (
    <main>
      <Messages />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
      >
        Send
      </button>
    </main>
  );
}
