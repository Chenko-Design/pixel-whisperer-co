import { Sparkles, Target, Code2, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "חוויית משתמש אינטואיטיבית",
    description: "כל אתר שאני בונה מרגיש ברור, ישר וקל להתמצאות — בלי עומס ובלי בלגן.",
    gradient: "from-primary to-purple-500",
  },
  {
    icon: Sparkles,
    title: "עיצוב נקי ומדויק",
    description: "ויזואליות מודרנית שמעלה את תחושת האמון במותג שלך.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "רקע טכנולוגי ומוצרי",
    description: "אני משלבת חשיבה אנליטית עם עין עיצובית כדי לייצר פתרון שעובד וגם נראה טוב.",
    gradient: "from-pink-500 to-accent",
  },
  {
    icon: HeartHandshake,
    title: "תהליך עבודה פשוט ונעים",
    description: "שלבי עבודה ברורים, שקיפות מלאה, בלי הפתעות ובלי כאב ראש.",
    gradient: "from-accent to-primary",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            למה דווקא <span className="gradient-text">אני?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            הגישה שלי משלבת בין עיצוב יפהפה לבין חשיבה מעשית שמייצרת תוצאות
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover-lift transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl from-primary/20 to-accent/20" />
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
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