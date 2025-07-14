import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          {/* Centered Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 border border-border/30 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
              <span className="text-primary font-serif font-bold text-xl tracking-wide">FT</span>
            </div>
          </Link>

          {/* Floating CTA */}
          <div className="absolute right-8">
            <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm border-border/40 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 px-4 py-2 text-sm font-medium tracking-wide">
              Rent Tent
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;