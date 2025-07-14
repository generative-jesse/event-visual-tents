import { ArrowRight, Star, Users, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tent.jpg";

const Hero = () => {
  const stats = [
    { icon: Star, label: "5-Star Rating", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "2,000+" },
    { icon: Calendar, label: "Events Hosted", value: "5,000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury tent setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-secondary" />
            <span className="text-sm text-cream-warm font-medium">Premium Event Rentals Since 2009</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream-warm mb-6 leading-tight animate-slide-up">
            Luxury Tents for
            <span className="text-gradient-gold block">Unforgettable Events</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-cream-warm/90 mb-8 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform your special occasions with our premium tent rentals. From intimate gatherings to grand celebrations, we create magical spaces that make memories last a lifetime.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="gold" size="xl" className="group">
              Explore Our Tents
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button variant="outline-luxury" size="xl" className="text-cream-warm border-cream-warm hover:bg-cream-warm hover:text-primary">
              AI Event Visualizer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-card/20 backdrop-blur-sm rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-cream-warm">{stat.value}</div>
                <div className="text-sm text-cream-warm/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-cream-warm/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-warm/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-warm/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;