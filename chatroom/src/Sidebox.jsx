import React from "react";

function Sidebar() {
  const contacts = [
    {
      id: 1,
      name: "علی رضایی",
      lastMessage: "سلام، خوبی؟",
      time: "10:30",
      online: true,
    },
    {
      id: 2,
      name: "مریم احمدی",
      lastMessage: "فایل‌ها رو فرستادم",
      time: "09:15",
      online: false,
    },
    {
      id: 3,
      name: "رضا کریمی",
      lastMessage: "جلسه ساعت ۵ برگزار میشه",
      time: "دیروز",
      online: true,
    },
    {
      id: 4,
      name: "سارا محمدی",
      lastMessage: "مرسی از راهنمایی",
      time: "دیروز",
      online: false,
    },
    {
      id: 5,
      name: "حسین توکلی",
      lastMessage: "باشه، هماهنگ می‌کنیم",
      time: "شنبه",
      online: true,
    },
  ];

  return (
    <div className="text-[14px] h-screen bg-white border-l border-gray-200 p-4">
      <h2 className="text-[14px] text-xl font-bold mb-4 text-gray-800">مخاطبین</h2>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-lg">
                  {contact.name.charAt(0)}
                </div>

                <span
                  className={`absolute bottom-0 left-0 w-3 h-3 rounded-full border-2 border-white ${
                    contact.online ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-sm text-gray-500 truncate max-w-[150px]">
                  {contact.lastMessage}
                </p>
              </div>
            </div>

            <span className="text-xs text-gray-400">{contact.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
