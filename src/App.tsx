import React, { useState } from "react";
import Entry from "./pages/Entry";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    ip: "",
    port: "",
    name: "",
  });

  const handleSubmit = (ip: string, port: string, name: string) => {
    setFormData({ ip, port, name });

    const HOST = ip;
    const PORT = Number.parseInt(port);
    const socket = new WebSocket(`ws://${HOST}:${PORT}`);

    socket.onopen = () => {
      console.log(`Connected to ${HOST}:${PORT}`);
      socket.send(`Client: I am ${name}`);
    };

    socket.onmessage = (event) => {
      console.log("server: ", event.data);
    };

    socket.onclose = () => {
      console.log("Connection closed");
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };
  };

  return (
    <div>
      <Entry onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
