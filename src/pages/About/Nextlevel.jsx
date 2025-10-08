import React, { useState } from "react";
import { X, Send, MessageCircle, MessageSquareText } from "lucide-react";
export default function Nextlevel() {
 const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How may we assist you today?" },
    { sender: "user", text: "I need a website for my store" },
    { sender: "bot", text: "Can I get your email address?" },
  ]);
  const [input, setInput] = useState("");

 const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input.trim() }]);
    setInput("");

    // Fake bot reply after delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! We'll get back to you soon 😊" },
      ]);
    }, 1000);
  };

  // ✅ Send on Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* ✅ Your Section */}
      <section className="w-full font-Poppins bg-green-50 flex justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Text Section */}
          <div className="md:max-w-xl">
            <h2 className="text-[36px] sm:text-3xl md:text-4xl lg:text-4xl font-medium text-gray-900 leading-snug">
              Do you have a next level-idea?
            </h2>
            <p className="mt-3 text-[18px] sm:text-lg md:text-xl text-gray-400 font-regular">
              Reach out and we can create magic together
            </p>
          </div>

          {/* Button Section */}
          <div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-Montserrat   font-semibold text-[14px] sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 mt-6 md:mt-0 rounded-full shadow-md transition-all duration-300">
              WORK WITH US
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Chatbox always on top of everything */}
      <div className="fixed bottom-6 right-6 z-50 font-Poppins">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
           className="bg-emerald-500 hover:bg-emerald-600 text-white 
                   w-20 h-20 flex items-center justify-center 
                   rounded-tr-[0] rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%]
                   shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Chat"
        >
          <MessageSquareText size={26} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3">
            <div className="flex items-center space-x-3">
              <img
                src="public/Image/user.png"
                alt="Rasheed"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <div>
                <p className="font-semibold">Rasheed</p>
                <p className="text-sm text-white/80 -mt-1">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} className="cursor-pointer hover:text-gray-200" />
            </button>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-4 bg-white h-80 overflow-y-auto">
            {messages.map((msg, i) =>
              msg.sender === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-[#0A0E2A] text-white px-4 py-2 rounded-lg max-w-[75%] shadow-sm">
                    <p>{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex items-start space-x-3">
                  <img
                    src="public/Image/user.png"
                    alt="bot"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-[75%] shadow-sm">
                    <p>{msg.text}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Input Box */}
          <div className="border-t bg-gray-50 px-3 py-3 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Write a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 px-4 py-2 rounded-lg text-gray-700 text-sm bg-green-50 outline-none border border-transparent focus:border-green-400"
            />
            <button
              onClick={handleSend}
              className="bg-[#0A0E2A] text-white p-2 rounded-lg hover:bg-black transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}