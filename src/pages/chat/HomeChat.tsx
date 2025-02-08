import React, { useState } from "react";
import Chat from "../../components/Chat";
import ChatInput from "../../components/ChatInput";
import "./homeChat.css";

const HomeChat: React.FC = () => {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>([]);
  const [nextId, setNextId] = useState(1);

  const handleSend = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: nextId, text: message },
    ]);
    setNextId(nextId + 1);
  };

  return (
    <div className="chat-container">
      <div className="chat-wrapper">
        <Chat messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default HomeChat;
