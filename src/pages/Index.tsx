import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TentShowcase from "@/components/TentShowcase";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TentShowcase />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
