import React, { useState } from "react";
import { Client } from "@gradio/client";

const client = await Client.connect("fatihmatic/movie-chatbot");

const ChatBot = ({ onClose, isOpen }) => {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    if (message.trim() === "") return;
    const userMessage = { role: "user", content: message };
    setConversation([...conversation, userMessage]);

    const result = await client.predict("/chat", { message });
    const botMessage = { role: "assistant", content: result.data[0] };
    setConversation([...conversation, userMessage, botMessage]);

    setMessage("");
  };

  return (
    <div
      className={`fixed right-0 top-0 bg-black text-white p-4 rounded-l-lg shadow-lg w-96 h-full z-20 mt-16 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="text-2xl font-bold mb-4 text-red-600">Movie ChatBot</div>
      <div className="bg-neutral-900 p-4 rounded-lg h-2/3 overflow-y-scroll mb-4 flex flex-col">
        {conversation.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.role === "user"
                ? "bg-green-500 self-end"
                : "bg-red-500 self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-2 rounded-lg text-white bg-slate-800"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 p-2 ml-2 rounded-lg hover:bg-green-700"
        >
          Send
        </button>
      </div>
      <button
        onClick={onClose}
        className="bg-red-600 p-2 mt-4 rounded-lg w-full hover:bg-red-700"
      >
        Close
      </button>
    </div>
  );
};

export default ChatBot;
