import React, { useState } from 'react';
import Chat from './components/Chat';
import ChatInput from './components/ChatInput';

const App: React.FC = () => {
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
    <div>
      <Chat messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default App;
