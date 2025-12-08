import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import projectRidely from "@/assets/project-ridely.jpg";
import projectTopbred from "@/assets/project-topbred.jpg";
import projectWomen from "@/assets/project-women.jpg";

const projects = [
  {
    title: "Ridely App",
    category: "עיצוב אפליקציה",
    image: projectRidely,
  },
  {
    title: "TopBred Website",
    category: "אתר תדמית",
    image: projectTopbred,
  },
  {
    title: "Women Empowerment",
    category: "דף נחיתה",
    image: projectWomen,
  },
];

const Portfolio = () => {
  return (
    <section className="section-padding bg-cream-dark/70" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-wide mb-3">פורטפוליו</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            עבודות נבחרות
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-secondary aspect-[4/5] cursor-pointer shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white/70 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group bg-[#D87341] hover:bg-[#C4652F] text-white shadow-lg hover:shadow-xl">
            לצפייה בכל העבודות
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;