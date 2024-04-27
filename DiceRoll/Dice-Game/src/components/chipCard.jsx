//currently Not getting Used Anywhere



import React, { useState, useEffect, useRef } from 'react';
import cook from "universal-cookie";

export const ChipCard = ({chipTransfer}) => {
  const cookie = new cook();
  const sender = cookie.cookies.name;
  const [chips,setChips] = useState(15);


  useEffect(() => {
    socket.on("updatedChips", (data) => {
        setChips(chips=>[...chipsArr,data]);        //ye itna simply nai hoga bro
      });
   
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      const data = {
        text: message,
        sender: sender
      };
      skt.emit("message", data);
      setMessage('');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-white p-4 rounded-lg shadow-md">
      <div className="mb-2 max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={elfImage}
              alt="User Avatar"
            />
            <div className="font-semibold">{msg.sender}</div>
            <div className="bg-gray-100 p-2 rounded-md ml-2">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
        />
        <button
          ref={buttonRef}
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};
