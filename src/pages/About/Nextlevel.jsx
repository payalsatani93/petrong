import { useEffect, useState } from "react";
import { X, Send, MessageSquareText } from "lucide-react";

export default function Nextlevel() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "How may we assist you today?" },
    { sender: "user", text: "I need a website for my store" },
    { sender: "bot", text: "Can I get your email address?" },
  ]);
  const [input, setInput] = useState("");

  // ✅ Handle sending message
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input.trim() }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks! We'll get back to you soon 😊" },
      ]);
    }, 1000);
  };

  // ✅ Send message on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // ✅ Scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / height) * 100;
      setScrollPercent(scrolled);
      setShow(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll to top
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ✅ Hero Section */}
      <section className="w-full font-Poppins bg-green-50 flex justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="md:max-w-xl">
            <h2 className="text-[36px] sm:text-3xl md:text-4xl font-medium text-gray-900 leading-snug">
              Do you have a next-level idea?
            </h2>
            <p className="mt-3 text-[18px] sm:text-lg text-gray-500">
              Reach out and we can create magic together.
            </p>
          </div>

          <div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white  font-semibold text-base px-7 py-3 rounded-full shadow-md transition-all duration-300"  style={{ fontFamily: "var(--font-Montserra)" }}>
              WORK WITH US
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Scroll-to-Top Button */}
      {show && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-15 right-2 z-50 cursor-pointer"
        >
          <div className="relative w-15 h-15 flex items-center justify-center rounded-full overflow-hidden shadow-lg">
            {/* Circular GIF background */}
            <img
              src="public/Image/l2.gif"
              alt="scroll loader"
              className="absolute inset-0 w-full  h-full object-cover rounded-full  bg-black "
            />

            {/* Scroll percentage in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-lg drop-shadow-md">
                {Math.round(scrollPercent)}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Chatbox Section */}
      <div className="fixed bottom-0 right-2 z-50 " style={{ fontFamily: "var(--font-Poppins)" }}>
        {/* Floating Chat Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white 
              w-14 h-14 flex items-center justify-center 
              rounded-tr-none rounded-tl-full rounded-bl-full rounded-br-full
              shadow-lg transition-all duration-300 hover:scale-105"
            aria-label="Chat"
          >
            <MessageSquareText size={22} />
          </button>
        )}

        {/* Chat Box */}
        {isOpen && (
          <div className="w-80 md:w-96 bg-white rounded-xl shadow-2xl overflow-hidden animate-[slideUp_0.4s_ease]">
            {/* Header */}
            <div className="flex items-center justify-between bg-green-500 text-white px-4 py-3">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/images/user.png"
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
                      src="/assets/images/user.png"
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
