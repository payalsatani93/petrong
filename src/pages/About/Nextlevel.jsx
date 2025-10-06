import React, { useState } from "react";

export default function Nextlevel() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "How may we assist you today?" },
    { from: "user", text: "I need a website for my store" },
    { from: "bot", text: "Can I get your email address?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <>
      {/* ✅ Your Section */}
      <section className="w-full bg-green-50 flex justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Text Section */}
          <div className="md:max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-snug">
              Do you have a next level idea?
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-500">
              Reach out and we can create magic together
            </p>
          </div>

          {/* Button Section */}
          <div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 mt-6 md:mt-0 rounded-full shadow-md transition-all duration-300">
              WORK WITH US
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Chatbox always on top of everything */}
      <div className="z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white text-2xl z-50"
          >
            💬
          </button>
        )}

        {isOpen && (
          <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-xl overflow-hidden z-[999]">
            {/* Header */}
            <div className="bg-green-500 text-white flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-semibold">Rasheed</p>
                <p className="text-xs">Online</p>
              </div>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="h-64 p-4 space-y-4 overflow-y-auto bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.from === "user"
                      ? "justify-end"
                      : "items-start space-x-2"
                  }`}
                >
                  {msg.from === "bot" && (
                    <img
                      src="https://via.placeholder.com/30"
                      className="w-8 h-8 rounded-full"
                      alt="bot"
                    />
                  )}
                  <div
                    className={`px-3 py-2 rounded-lg text-sm ${
                      msg.from === "user"
                        ? "bg-blue-900 text-white"
                        : "bg-green-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex items-center px-3 py-2 bg-gray-100">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <button
                onClick={handleSend}
                className="bg-blue-900 text-white w-10 h-10 flex items-center justify-center rounded-lg"
              >
                ➤
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
