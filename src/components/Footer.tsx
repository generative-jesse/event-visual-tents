import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-4 h-4 text-secondary" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-4 h-4 text-secondary" />
              <span>hello@fancytents.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>123 Event Way, Celebration City, CC 12345</span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-primary-foreground/80 text-sm pt-4 border-t border-primary-foreground/20">
            © 2024 Fancy Tents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;