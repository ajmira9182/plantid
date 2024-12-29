import { useState } from "react";
import { ImageUpload } from "@/components/ImageUpload";
import { PlantInfo } from "@/components/PlantInfo";
import { Leaf } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [plantData, setPlantData] = useState<any>(null);
  const { toast } = useToast();

  const identifyPlant = async (file: File) => {
    setIsIdentifying(true);
    try {
      // Here we'll add the Gemini API integration
      // For now, let's show a mock response
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPlantData({
        name: "Monstera Deliciosa",
        scientificName: "Monstera deliciosa",
        description:
          "The Monstera deliciosa is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has become a popular houseplant due to its striking leaves and easy care requirements.",
        careInstructions: {
          water: "Water when the top 2-3 inches of soil feels dry. Reduce watering in winter.",
          light: "Bright, indirect light. Can tolerate some direct morning sun.",
          temperature: "Prefers temperatures between 65-85°F (18-29°C).",
        },
        confidence: 0.95,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to identify plant. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsIdentifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <Navigation />
      <div className="px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-sage-600" />
              <h1 className="text-3xl font-semibold text-gray-900">
                Plant Identifier
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload a photo of any plant and get instant identification along with
              care instructions.
            </p>
          </div>

          <ImageUpload onImageSelect={identifyPlant} isLoading={isIdentifying} />

          {plantData && <PlantInfo {...plantData} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;