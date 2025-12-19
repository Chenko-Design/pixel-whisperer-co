import { Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border" dir="rtl">
      <div className="container-tight">
        {/* Mobile layout */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* Logo first */}
          <img src={logo} alt="Chenko Design" className="h-10" />
          
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
              href="https://wa.me/972528934634" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          
          {/* Contact Info - centered */}
          <div className="flex flex-col items-center gap-1 text-muted-foreground text-sm">
            <a 
              href="https://wa.me/972528934634" 
              className="hover:text-foreground transition-colors"
            >
              052-8934634
            </a>
            <a 
              href="mailto:chen.shraga@gmail.com" 
              className="hover:text-foreground transition-colors"
            >
              chen.shraga@gmail.com
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            Chenko Design © 2025
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col">
          <div className="flex flex-row items-center justify-between gap-6">
            {/* Right side - Contact Info */}
            <div className="flex flex-col items-start gap-1 text-muted-foreground text-sm">
              <a 
                href="https://wa.me/972528934634" 
                className="hover:text-foreground transition-colors"
              >
                052-8934634
              </a>
              <a 
                href="mailto:chen.shraga@gmail.com" 
                className="hover:text-foreground transition-colors"
              >
                chen.shraga@gmail.com
              </a>
            </div>

            {/* Center - Social Icons */}
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
                href="https://wa.me/972528934634" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Left side - Logo */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="Chenko Design" className="h-10" />
            </div>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center mt-10 mr-8">
            Chenko Design © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
