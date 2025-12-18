import { Check } from "lucide-react";
import testimonialsBg from "@/assets/testimonials-bg.png";

const testimonials = [
  {
    quote: "חן קלטה בדיוק את מה שהעסק צריך. העיצוב יצא נקי, מקצועי, והלקוחות שלי באמת מגיבים לזה.",
    author: "ענת",
    role: "מטפלת רגשית",
    time: "09:32",
  },
  {
    quote: "תהליך העבודה היה פשוט ונעים — קיבלתי אתר שמרגיש כמו המותג שלי.",
    author: "יעל",
    role: "בעלת קליניקה",
    time: "10:15",
  },
  {
    quote: "לא האמנתי שאפשר ליצור אתר כזה מקצועי בזמן כל כך קצר. ממליצה בחום!",
    author: "מיכל",
    role: "יועצת עסקית",
    time: "14:47",
  },
  {
    quote: "חן הבינה בדיוק מה אני צריכה עוד לפני שידעתי להסביר. האתר מושלם.",
    author: "נועה",
    role: "מעצבת פנים",
    time: "16:23",
  },
];

const WhatsAppMessage = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  return (
    <div 
      className="flex justify-end mb-3 animate-fade-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative max-w-[85%] md:max-w-[70%]">
        {/* Message bubble */}
        <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-3 py-2 shadow-sm relative">
          {/* Tail */}
          <div className="absolute -top-0 -right-2 w-0 h-0 border-l-[8px] border-l-[#DCF8C6] border-t-[8px] border-t-transparent" />
          
          {/* Author name */}
          <p className="text-[#075E54] font-semibold text-sm mb-1">
            {testimonial.author} • {testimonial.role}
          </p>
          
          {/* Message text */}
          <p className="text-[#303030] text-sm md:text-base leading-relaxed">
            {testimonial.quote}
          </p>
          
          {/* Time and read receipts */}
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="text-[10px] text-[#667781]">{testimonial.time}</span>
            <div className="flex">
              <Check className="w-3 h-3 text-[#53BDEB]" />
              <Check className="w-3 h-3 text-[#53BDEB] -ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section 
      className="section-padding relative overflow-hidden" 
      dir="rtl"
      style={{
        backgroundImage: `url(${testimonialsBg})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="container-tight relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">המלצות</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            מה אומרים עליי
          </h2>
        </div>

        {/* WhatsApp-style chat container */}
        <div className="max-w-2xl mx-auto">
          <div className="space-y-1 py-4">
            {testimonials.map((testimonial, index) => (
              <WhatsAppMessage key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;