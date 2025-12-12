import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "חן קלטה בדיוק את מה שהעסק צריך. העיצוב יצא נקי, מקצועי, והלקוחות שלי באמת מגיבים לזה.",
    author: "ענת",
    role: "מטפלת רגשית",
    gradient: "from-[#D87341] via-[#E8956A] to-[#F4CBB5]",
  },
  {
    quote: "תהליך העבודה היה פשוט ונעים — קיבלתי אתר שמרגיש כמו המותג שלי.",
    author: "יעל",
    role: "בעלת קליניקה",
    gradient: "from-[#8B6F5C] via-[#A68B7A] to-[#C4A99A]",
  },
  {
    quote: "לא האמנתי שאפשר ליצור אתר כזה מקצועי בזמן כל כך קצר. ממליצה בחום!",
    author: "מיכל",
    role: "יועצת עסקית",
    gradient: "from-[#B8860B] via-[#DAA520] to-[#F4D03F]",
  },
  {
    quote: "חן הבינה בדיוק מה אני צריכה עוד לפני שידעתי להסביר. האתר מושלם.",
    author: "נועה",
    role: "מעצבת פנים",
    gradient: "from-[#6B8E7D] via-[#8FBC8F] to-[#A8D5BA]",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

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
            <div className="flex gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] min-w-0"
                >
                  <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 relative hover-lift h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D87341] text-[#D87341]" />
                      ))}
                    </div>
                    
                    <blockquote className="font-heebo text-base md:text-lg font-medium leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                        <span className="font-display font-bold text-xl text-white">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-lg">{testimonial.author}</p>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
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
                selectedIndex === index ? "bg-[#D87341] w-6" : "bg-[#D87341]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;