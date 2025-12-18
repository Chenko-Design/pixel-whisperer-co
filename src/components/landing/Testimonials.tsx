import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "חן קלטה בדיוק את מה שהעסק צריך. העיצוב יצא נקי, מקצועי, והלקוחות שלי באמת מגיבים לזה.",
    author: "ענת",
    role: "מטפלת רגשית",
    time: "10:32",
  },
  {
    quote: "תהליך העבודה היה פשוט ונעים — קיבלתי אתר שמרגיש כמו המותג שלי.",
    author: "יעל",
    role: "בעלת קליניקה",
    time: "14:15",
  },
  {
    quote: "לא האמנתי שאפשר ליצור אתר כזה מקצועי בזמן כל כך קצר. ממליצה בחום!",
    author: "מיכל",
    role: "יועצת עסקית",
    time: "09:47",
  },
  {
    quote: "חן הבינה בדיוק מה אני צריכה עוד לפני שידעתי להסביר. האתר מושלם.",
    author: "נועה",
    role: "מעצבת פנים",
    time: "16:22",
  },
];

// WhatsApp double check icon component
const WhatsAppCheck = () => (
  <svg viewBox="0 0 16 11" className="w-4 h-3 text-[#53bdeb]" fill="currentColor">
    <path d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.47.47 0 0 0-.343.153.436.436 0 0 0-.109.334.46.46 0 0 0 .149.317l2.734 2.587a.477.477 0 0 0 .693-.044l6.484-8.004a.436.436 0 0 0 .087-.322.414.414 0 0 0-.164-.278l-.016-.013a.054.054 0 0 1 .009-.009l-.009-.008z" />
    <path d="M15.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-1.405-1.272-.696.9 1.772 1.672a.477.477 0 0 0 .693-.044l6.484-8.004a.436.436 0 0 0 .087-.322.414.414 0 0 0-.164-.278l-.016-.013a.054.054 0 0 1 .009-.009l-.009-.008z" />
  </svg>
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl", align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Manual autoplay implementation
  useEffect(() => {
    if (!emblaApi) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F4CBB5]/15 decorative-blob blur-3xl animate-morph" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">המלצות</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold">
            מה אומרים עליי
          </h2>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-[#D87341] hover:text-white transition-colors shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-[#D87341] hover:text-white transition-colors shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-12" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4"
                >
                  {/* WhatsApp-style message bubble */}
                  <div className="bg-[#dcf8c6] p-4 rounded-lg relative shadow-md max-w-md mx-auto">
                    {/* WhatsApp bubble tail */}
                    <div className="absolute top-0 -right-2 w-4 h-4 overflow-hidden">
                      <div className="w-4 h-4 bg-[#dcf8c6] transform rotate-45 translate-x-2 -translate-y-2"></div>
                    </div>
                    
                    {/* Author name (like WhatsApp contact name) */}
                    <p className="text-[#128c7e] font-bold text-sm mb-1">
                      {testimonial.author} • {testimonial.role}
                    </p>
                    
                    {/* Message content */}
                    <p className="text-gray-800 text-base leading-relaxed mb-2">
                      {testimonial.quote}
                    </p>
                    
                    {/* Time and read receipt */}
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-[11px] text-gray-500">{testimonial.time}</span>
                      <WhatsAppCheck />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-[#128c7e] w-6" : "bg-[#128c7e]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
