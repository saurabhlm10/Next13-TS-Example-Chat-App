"use client";

import { pusherClient } from "@/lib/pusher";
import { FC, useEffect, useState } from "react";

interface MessagesProps {}

const Messages: FC<MessagesProps> = ({}) => {
  const [messages, setMessages] = useState<Text[]>([]);

  useEffect(() => {
    const handleMessage = (message: Text) => {
      console.log(message);
      setMessages((prev) => [...prev, message]);
    };

    pusherClient.subscribe("chat");
    pusherClient.bind("incoming-message", handleMessage);
  }, []);

  return (
    <div>
      {messages.map((message, id) => (
        <div key={id}>{JSON.stringify(message)}</div>
      ))}
    </div>
  );
};

export default Messages;
