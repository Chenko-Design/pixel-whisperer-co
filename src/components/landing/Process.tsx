const steps = [
  {
    number: "01",
    title: "שיחת היכרות קצרה",
    description: "להבין את הצרכים והמטרות",
  },
  {
    number: "02",
    title: "אפיון UX",
    description: "תכנון מבנה העמודים והחוויה",
  },
  {
    number: "03",
    title: "עיצוב UI",
    description: "יצירת שפה ויזואלית נקייה ומודרנית",
  },
  {
    number: "04",
    title: "פיתוח ובנייה",
    description: "הפיכת העיצוב לקוד עובד",
  },
  {
    number: "05",
    title: "בדיקות והתאמות",
    description: "כולל התאמה מלאה למובייל",
  },
  {
    number: "06",
    title: "השקה וליווי",
    description: "תמיכה גם אחרי העלייה לאוויר",
  },
];

const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F4CBB5]/20 decorative-blob blur-3xl animate-morph" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">תהליך העבודה</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            איך זה עובד?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            תהליך עבודה ברור ושקוף מתחילה ועד סוף
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative"
            >
              <div className="bg-card p-8 rounded-3xl border border-border/50 h-full hover-lift group-hover:border-accent/30 transition-all duration-300">
                <span className="font-display text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;