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
    <section className="section-padding bg-cream-dark/50" dir="rtl">
      <div className="container-tight">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          איך זה עובד?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          תהליך עבודה ברור ושקוף מתחילה ועד סוף
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              <div className="bg-card p-6 rounded-2xl border border-border/50 h-full hover-lift">
                <span className="font-display text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;