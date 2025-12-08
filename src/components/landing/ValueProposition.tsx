import IconTarget from "@/assets/icon-target.svg";
import IconDesign from "@/assets/icon-design.svg";
import IconCode from "@/assets/icon-code.svg";
import IconProcess from "@/assets/icon-process.svg";

const values = [
  {
    icon: IconTarget,
    title: "חוויית משתמש אינטואיטיבית",
    description: "כל אתר שאני בונה מרגיש ברור, ישר וקל להתמצאות — בלי עומס ובלי בלגן.",
  },
  {
    icon: IconDesign,
    title: "עיצוב נקי ומדויק",
    description: "ויזואליות מודרנית שמעלה את תחושת האמון במותג שלך.",
  },
  {
    icon: IconCode,
    title: "רקע טכנולוגי ומוצרי",
    description: "אני משלבת חשיבה אנליטית עם עין עיצובית כדי לייצר פתרון שעובד וגם נראה טוב.",
  },
  {
    icon: IconProcess,
    title: "תהליך עבודה פשוט ונעים",
    description: "שלבי עבודה ברורים, שקיפות מלאה, בלי הפתעות ובלי כאב ראש.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4CBB5]/30 decorative-blob blur-3xl animate-morph" />
      
      <div className="container-tight relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">למה לבחור בי</span>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            למה דווקא אני?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            הגישה שלי משלבת בין עיצוב יפהפה לבין חשיבה מעשית שמייצרת תוצאות
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-card p-8 rounded-3xl border border-border/50 hover-lift relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D87341]/5 to-[#E8956A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-20 h-20 mb-5 group-hover:scale-110 transition-transform duration-300">
                <img src={value.icon} alt="" className="w-full h-full" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 relative z-10">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
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