import { Sparkles, Palette, Share2, Clock, Shield, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Event Visualization",
      description: "See your event before you book with our cutting-edge AI that generates realistic images of your tent setup.",
      highlight: "Revolutionary Technology"
    },
    {
      icon: Palette,
      title: "Custom Styling",
      description: "Personalize every detail from color schemes to lighting to match your vision and event theme perfectly.",
      highlight: "Unlimited Customization"
    },
    {
      icon: Share2,
      title: "Shareable Invites",
      description: "Generate beautiful calendar invites with your AI-visualized event that guests will love to share.",
      highlight: "Social Ready"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to ensure your event planning goes smoothly.",
      highlight: "Always Available"
    },
    {
      icon: Shield,
      title: "Premium Insurance",
      description: "Full coverage and peace of mind with our comprehensive insurance for all events and weather conditions.",
      highlight: "Fully Protected"
    },
    {
      icon: Headphones,
      title: "White Glove Service",
      description: "From setup to breakdown, our professional team handles every detail so you can enjoy your event.",
      highlight: "Stress-Free Experience"
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Why Choose Fancy Tents</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Beyond Ordinary
            <span className="text-gradient-gold block">Event Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just rent tents – we create magical experiences. Discover what makes us the premier choice for luxury events.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-secondary/50 transition-all duration-300 hover:shadow-luxury animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-forest-light rounded-xl shadow-luxury group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-primary mb-3 group-hover:text-gradient-forest transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect line */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-secondary to-gold-light mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-card to-cream-soft rounded-2xl p-8 shadow-luxury">
            <div className="text-left">
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                Ready to Create Magic?
              </h3>
              <p className="text-muted-foreground">
                Start planning your unforgettable event today
              </p>
            </div>
            <div className="flex items-center space-x-2 text-secondary animate-float">
              <Sparkles className="w-6 h-6" />
              <Sparkles className="w-4 h-4" />
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;