import { useRef } from "react";

const testimonials = [
  {
    quote: "חן קלטה בדיוק את מה שהעסק צריך. העיצוב יצא נקי, מקצועי, והלקוחות שלי באמת מגיבים לזה.",
    author: "ענת",
    role: "מטפלת רגשית",
    time: "10:32",
    response: "תודה רבה ענת! 🙏 שמחה שהאתר עושה את העבודה",
    responseTime: "10:35",
  },
  {
    quote: "תהליך העבודה היה פשוט ונעים — קיבלתי אתר שמרגיש כמו המותג שלי.",
    author: "יעל",
    role: "בעלת קליניקה",
    time: "14:15",
    response: "זה בדיוק המטרה! ❤️ תודה יעל",
    responseTime: "14:18",
  },
  {
    quote: "לא האמנתי שאפשר ליצור אתר כזה מקצועי בזמן כל כך קצר. ממליצה בחום!",
    author: "מיכל",
    role: "יועצת עסקית",
    time: "09:47",
    response: "איזה כיף לשמוע! 😊 בהצלחה עם העסק",
    responseTime: "09:52",
  },
  {
    quote: "חן הבינה בדיוק מה אני צריכה עוד לפני שידעתי להסביר. האתר מושלם.",
    author: "נועה",
    role: "מעצבת פנים",
    time: "16:22",
    response: "תודה נועה! היה תענוג לעבוד איתך 💛",
    responseTime: "16:25",
  },
];

// WhatsApp double check icon component
const WhatsAppCheck = ({ read = true }: { read?: boolean }) => (
  <svg viewBox="0 0 16 11" className={`w-4 h-3 ${read ? "text-[#53bdeb]" : "text-gray-400"}`} fill="currentColor">
    <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.47.47 0 0 0-.343.153.436.436 0 0 0-.109.334.46.46 0 0 0 .149.317l2.734 2.587a.477.477 0 0 0 .693-.044l6.484-8.004a.436.436 0 0 0 .087-.322.414.414 0 0 0-.164-.278l-.016-.013a.054.054 0 0 1 .009-.009l-.009-.008z" />
    <path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.405-1.272-.696.9 1.772 1.672a.477.477 0 0 0 .693-.044l6.484-8.004a.436.436 0 0 0 .087-.322.414.414 0 0 0-.164-.278l-.016-.013a.054.054 0 0 1 .009-.009l-.009-.008z" />
  </svg>
);

const Testimonials = () => {
  const chatRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F4CBB5]/15 decorative-blob blur-3xl animate-morph" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">המלצות</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            מה אומרים עליי
          </h2>
        </div>

        {/* WhatsApp Chat Container */}
        <div className="max-w-lg mx-auto">
          {/* Phone frame */}
          <div className="bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
            {/* Screen */}
            <div className="bg-[#0b141a] rounded-[2rem] overflow-hidden">
              {/* WhatsApp Header */}
              <div className="bg-[#202c33] px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D87341] to-[#E8956A] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ח</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">חן | עיצוב אתרים</p>
                  <p className="text-gray-400 text-xs">מחובר/ת</p>
                </div>
                <div className="flex gap-4 text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/>
                  </svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 4.001A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 4.001A2 2 0 0 0 12 15z"/>
                  </svg>
                </div>
              </div>

              {/* Chat area with WhatsApp wallpaper */}
              <div 
                ref={chatRef}
                className="h-[500px] overflow-y-auto p-4 space-y-3"
                style={{
                  backgroundColor: "#0b141a",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23182229' fill-opacity='0.8'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              >
                {/* Date badge */}
                <div className="flex justify-center mb-4">
                  <span className="bg-[#182229] text-gray-400 text-xs px-3 py-1 rounded-lg shadow">
                    היום
                  </span>
                </div>

                {testimonials.map((testimonial, index) => (
                  <div key={index} className="space-y-2">
                    {/* Incoming message (customer) */}
                    <div className="flex justify-start">
                      <div className="bg-[#202c33] p-3 rounded-lg rounded-tr-none max-w-[85%] shadow relative">
                        {/* Bubble tail */}
                        <div className="absolute top-0 -right-2 w-0 h-0 border-t-8 border-t-[#202c33] border-r-8 border-r-transparent"></div>
                        
                        {/* Author name */}
                        <p className="text-[#00a884] font-medium text-sm mb-1">
                          ~{testimonial.author} • {testimonial.role}
                        </p>
                        
                        {/* Message content */}
                        <p className="text-[#e9edef] text-sm leading-relaxed">
                          {testimonial.quote}
                        </p>
                        
                        {/* Time */}
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-[10px] text-gray-500">{testimonial.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Outgoing message (my response) */}
                    <div className="flex justify-end">
                      <div className="bg-[#005c4b] p-3 rounded-lg rounded-tl-none max-w-[85%] shadow relative">
                        {/* Bubble tail */}
                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-8 border-t-[#005c4b] border-l-8 border-l-transparent"></div>
                        
                        {/* Message content */}
                        <p className="text-[#e9edef] text-sm leading-relaxed">
                          {testimonial.response}
                        </p>
                        
                        {/* Time and read receipt */}
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-[10px] text-gray-400">{testimonial.responseTime}</span>
                          <WhatsAppCheck read={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input bar */}
              <div className="bg-[#202c33] px-3 py-2 flex items-center gap-2">
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"/>
                  </svg>
                </div>
                <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2">
                  <span className="text-gray-500 text-sm">הקלד/י הודעה</span>
                </div>
                <div className="text-gray-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
