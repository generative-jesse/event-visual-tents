import { ArrowRight, Users, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import smallTentImage from "@/assets/small-tent.jpg";
import mediumTentImage from "@/assets/medium-tent.jpg";
import largeTentImage from "@/assets/large-tent.jpg";

const TentShowcase = () => {
  const tents = [
    {
      id: 1,
      name: "Intimate Gatherings",
      size: "Small Tent",
      dimensions: "20x20ft",
      price: "$800",
      capacity: "30-50 guests",
      image: smallTentImage,
      features: ["Climate Control", "String Lighting", "Wooden Flooring", "Elegant Draping"],
      ideal: "Garden parties, small weddings, corporate dinners",
      description: "Perfect for intimate celebrations where every detail matters.",
    },
    {
      id: 2,
      name: "Celebration Central",
      size: "Medium Tent",
      dimensions: "30x40ft",
      price: "$1,500",
      capacity: "75-120 guests",
      image: mediumTentImage,
      features: ["Premium Lighting", "Dance Floor", "Bar Setup", "Luxury Furnishing"],
      ideal: "Weddings, corporate events, milestone celebrations",
      description: "The perfect balance of intimacy and grandeur for memorable occasions.",
      popular: true,
    },
    {
      id: 3,
      name: "Grand Affairs",
      size: "Large Tent",
      dimensions: "40x60ft",
      price: "$2,800",
      capacity: "150-250 guests",
      image: largeTentImage,
      features: ["Crystal Chandeliers", "Multiple Zones", "Premium Bar", "VIP Lounge"],
      ideal: "Large weddings, corporate galas, luxury events",
      description: "Ultimate luxury for grand celebrations that demand perfection.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Choose Your Perfect
            <span className="text-gradient-gold block">Event Space</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From intimate garden parties to grand celebrations, our luxury tents provide the perfect backdrop for your special moments.
          </p>
        </div>

        {/* Tent Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tents.map((tent, index) => (
            <Card 
              key={tent.id} 
              className={`card-luxury overflow-hidden group animate-slide-up hover-lift ${tent.popular ? 'ring-2 ring-secondary' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {tent.popular && (
                <div className="absolute top-4 right-4 z-10 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tent.image}
                  alt={tent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-1">{tent.name}</h3>
                    <p className="text-sm text-secondary font-medium">{tent.size} • {tent.dimensions}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{tent.price}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">{tent.description}</p>

                {/* Key Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="font-medium">{tent.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">{tent.ideal}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-2">Included Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {tent.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="luxury" className="flex-1 group">
                    Book Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline-luxury" className="flex-1">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-forest-light rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Not Sure Which Size is Right?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Our expert team will help you choose the perfect tent size and setup for your event. 
              Get a personalized recommendation and quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" className="group">
                Get Expert Advice
                <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
              <Button variant="outline-luxury" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Try AI Visualizer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentShowcase;