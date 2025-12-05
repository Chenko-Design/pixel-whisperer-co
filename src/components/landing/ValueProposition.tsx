import { Sparkles, Target, Code2, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "חוויית משתמש אינטואיטיבית",
    description: "כל אתר שאני בונה מרגיש ברור, ישר וקל להתמצאות — בלי עומס ובלי בלגן.",
  },
  {
    icon: Sparkles,
    title: "עיצוב נקי ומדויק",
    description: "ויזואליות מודרנית שמעלה את תחושת האמון במותג שלך.",
  },
  {
    icon: Code2,
    title: "רקע טכנולוגי ומוצרי",
    description: "אני משלבת חשיבה אנליטית עם עין עיצובית כדי לייצר פתרון שעובד וגם נראה טוב.",
  },
  {
    icon: HeartHandshake,
    title: "תהליך עבודה פשוט ונעים",
    description: "שלבי עבודה ברורים, שקיפות מלאה, בלי הפתעות ובלי כאב ראש.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-cream-dark/50" dir="rtl">
      <div className="container-tight">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
          למה דווקא אני?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          הגישה שלי משלבת בין עיצוב יפהפה לבין חשיבה מעשית שמייצרת תוצאות
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card p-6 lg:p-8 rounded-2xl border border-border/50 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-rose-200/50 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/50 group-hover:to-rose-300/60 transition-all duration-300">
                <value.icon className="w-6 h-6 text-charcoal" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;