import { Mail, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border" dir="rtl">
      <div className="container-tight">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Chenko Design" className="h-10" />
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-muted-foreground text-sm">
            <a 
              href="mailto:chen.shraga@gmail.com" 
              className="hover:text-foreground transition-colors"
            >
              chen.shraga@gmail.com
            </a>
            <span className="text-muted-foreground/50">|</span>
            <a 
              href="https://wa.me/972528934634" 
              className="hover:text-foreground transition-colors"
            >
              052-893-4634
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:chen.shraga@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/972528934634" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/chenkodesign" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Chenko Design © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
