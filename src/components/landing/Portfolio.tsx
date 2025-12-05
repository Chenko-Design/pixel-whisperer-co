import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
    <section className="section-padding" dir="rtl">
      <div className="container-tight">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            עבודות <span className="gradient-text">נבחרות</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-secondary aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary-foreground/70 text-sm">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-primary-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="group glow">
            לצפייה בכל העבודות
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;