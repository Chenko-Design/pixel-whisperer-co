import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding" dir="rtl">
      <div className="container-tight">
        <div className="bg-gradient-to-br from-[#D87341] to-[#C4652F] text-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              רוצה אתר או דף נחיתה שמרגיש נכון לעסק שלך?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              אני כאן כדי לבנות לך חוויה מקצועית, נקייה ומדויקת — באווירה רגועה ונעימה.
            </p>
            <Button 
              variant="secondary" 
              size="xl" 
              className="group rounded-full py-3 w-[200px] bg-white text-[#D87341] hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5" />
              דברו איתי בוואטסאפ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
