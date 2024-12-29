import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Heart, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-sage-800 mb-8 animate-fade-up">About Flora Vision</h1>
          
          <div className="prose prose-lg text-sage-700 space-y-6 animate-fade-up">
            <p className="lead text-xl">
              Flora Vision is your intelligent companion in the world of plants, combining cutting-edge AI technology with botanical expertise to help you identify and learn about plants instantly.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center p-6 bg-sage-50 rounded-lg">
                <Leaf className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Instant Recognition</h3>
                <p className="text-sage-600">Advanced AI technology for quick and accurate plant identification</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-sage-50 rounded-lg">
                <Heart className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Plant Care Guide</h3>
                <p className="text-sage-600">Detailed care instructions and tips for every identified plant</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-sage-50 rounded-lg">
                <Shield className="w-12 h-12 text-sage-600 mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Expert Knowledge</h3>
                <p className="text-sage-600">Backed by botanical expertise and continuous learning</p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-sage-800 mb-4">Our Mission</h2>
              <p>
                At Flora Vision, we're passionate about connecting people with nature. Our mission is to make plant identification accessible to everyone, from gardening enthusiasts to curious nature explorers. We believe that understanding the plants around us is the first step toward appreciating and preserving our natural world.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;