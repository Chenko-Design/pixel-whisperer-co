import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import testimonialsBg from "@/assets/testimonials-bg.png";

const testimonials = [
  {
    quote: "חן, חייבת להגיד לך שהאתר פשוט מושלם! אני ממש מרגישה גאה לפרסם אותו ומקבלת פידבקים מטורפים",
    author: "ענת",
    blurredName: "אברהמוביץ",
    time: "09:32",
  },
  {
    quote: "רציתי להודות לך על התהליך המדהים! קיבלתי בדיוק את מה שדמיינתי ואפילו יותר ❤️",
    author: "יעל",
    blurredName: "כהן",
    time: "10:15",
  },
  {
    quote: "כבר קיבלתי 3 לקוחות חדשים מהאתר! תודה על עבודה מעולה 🔥",
    author: "מיכאל",
    blurredName: "אברהמוביץ",
    time: "14:47",
  },
  {
    quote: "היי חן! רק רציתי להגיד שאני מקבלת מלא מחמאות על האתר, ממליצה עלייך לכולם! 💕 קצת מתבאסת שסיימנו את התהליך 😂 היה ממש כיף לעבוד עליו יחד",
    author: "נועה",
    blurredName: "לוי",
    time: "16:23",
  },
];

const WhatsAppMessage = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="relative max-w-sm">
      {/* Message bubble */}
      <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-4 py-3 shadow-sm relative min-h-[140px] flex flex-col">
        {/* Tail */}
        <div className="absolute -top-0 -right-2 w-0 h-0 border-l-[8px] border-l-[#DCF8C6] border-t-[8px] border-t-transparent" />
        
        {/* Author name with blurred "family name" */}
        <p className="text-[#075E54] font-semibold text-sm mb-2 flex items-center gap-1">
          <span>{testimonial.author}</span>
          <span className="blur-[4px] select-none">{testimonial.blurredName}</span>
        </p>
        
        {/* Message text */}
        <p className="text-[#303030] text-sm md:text-base leading-relaxed flex-1">
          {testimonial.quote}
        </p>
        
        {/* Time and read receipts */}
        <div className="flex items-center justify-end gap-1 mt-2">
          <span className="text-[10px] text-[#667781]">{testimonial.time}</span>
          <div className="flex">
            <Check className="w-3 h-3 text-[#53BDEB]" />
            <Check className="w-3 h-3 text-[#53BDEB] -ml-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

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
    }, 6000);
    
    return () => clearInterval(interval);
  }, [emblaApi]);

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

        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-[#075E54] hover:text-white transition-colors shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-[#075E54] hover:text-white transition-colors shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-12" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-3 flex justify-center"
                >
                  <WhatsAppMessage testimonial={testimonial} />
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
                selectedIndex === index ? "bg-[#075E54] w-6" : "bg-[#075E54]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;