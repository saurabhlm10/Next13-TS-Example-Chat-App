"use client";

import Messages from "@/components/Messages";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (!newMessage) return;
    await axios.post(`${process.env.NEXT_PUBLIC_SOCKET_URL}/send`, {
      text: newMessage,
    });
    setNewMessage("");
  };
  return (
    <main>
      <Messages />
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
          }
        }}
      />
      <button onClick={sendMessage}>Send</button>
    </main>
  );
}
