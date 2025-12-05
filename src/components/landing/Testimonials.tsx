import { Quote } from "lucide-react";

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            מה אומרים <span className="gradient-text">עליי</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 relative hover-lift hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon with gradient */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary/50" />
              </div>
              
              <blockquote className="text-lg leading-relaxed mb-6 mt-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                  <span className="font-display font-semibold text-lg text-white">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
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