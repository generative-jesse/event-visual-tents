import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TentShowcase = () => {
  const tents = [
    {
      id: 1,
      name: "Intimate Gatherings",
      size: "Small Tent",
      dimensions: "20x20ft",
      price: "$800",
      capacity: "30-50 guests",
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
      features: ["Premium Lighting", "Dance Floor", "Bar Setup", "Luxury Furnishing"],
      ideal: "Weddings, corporate events, milestone celebrations",
      description: "The perfect balance of intimacy and grandeur for memorable occasions.",
    },
    {
      id: 3,
      name: "Grand Affairs",
      size: "Large Tent",
      dimensions: "40x60ft", 
      price: "$2,800",
      capacity: "150-250 guests",
      features: ["Crystal Chandeliers", "Multiple Zones", "Premium Bar", "VIP Lounge"],
      ideal: "Large weddings, corporate galas, luxury events",
      description: "Ultimate luxury for grand celebrations that demand perfection.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Tent Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tents.map((tent) => (
            <Card 
              key={tent.id} 
              className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-200"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-1">{tent.name}</h3>
                  <p className="text-sm text-muted-foreground">{tent.size} • {tent.dimensions}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{tent.price}</div>
                  <div className="text-sm text-muted-foreground">per day</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{tent.description}</p>

              {/* Capacity */}
              <div className="flex items-center space-x-2 text-sm mb-4">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="font-medium">{tent.capacity}</span>
              </div>

              {/* Ideal Use */}
              <div className="text-sm text-muted-foreground mb-6">{tent.ideal}</div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Included Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {tent.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h3 className="text-3xl font-serif font-bold mb-4">
            Not Sure Which Size is Right?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our expert team will help you choose the perfect tent size and setup for your event. 
            Get a personalized recommendation and quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Get Expert Advice
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Try AI Visualizer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentShowcase;