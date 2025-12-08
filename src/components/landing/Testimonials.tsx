import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "חן קלטה בדיוק את מה שהעסק צריך. העיצוב יצא נקי, מקצועי, והלקוחות שלי באמת מגיבים לזה.",
    author: "ענת",
    role: "מאמנת רוכבים",
  },
  {
    quote: "תהליך העבודה היה פשוט ונעים — קיבלתי אתר שמרגיש כמו המותג שלי.",
    author: "יעל",
    role: "בעלת קליניקה",
  },
];

const Testimonials = () => {
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

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 relative hover-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D87341] text-[#D87341]" />
                ))}
              </div>
              
              <blockquote className="font-display text-xl md:text-2xl font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#D87341] to-[#F4CBB5] rounded-full flex items-center justify-center shadow-lg">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;