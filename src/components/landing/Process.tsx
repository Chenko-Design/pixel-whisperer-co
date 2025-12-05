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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            איך זה <span className="gradient-text">עובד?</span>
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
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 h-full hover-lift hover:border-primary/30 transition-all duration-300">
                <span className="font-display text-5xl font-bold gradient-text opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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