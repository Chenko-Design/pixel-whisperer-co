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
    <section className="section-padding bg-cream-dark/50" dir="rtl">
      <div className="container-tight">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
          מה אומרים עליי
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 relative hover-lift"
            >
              <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-accent/20 to-rose-200/30 rounded-lg flex items-center justify-center">
                <Quote className="w-5 h-5 text-accent/60" />
              </div>
              <blockquote className="text-lg leading-relaxed mb-6 mt-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/40 to-rose-300/50 rounded-full flex items-center justify-center">
                  <span className="font-display font-semibold text-lg text-charcoal">
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