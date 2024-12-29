import { motion } from "framer-motion";
import { Leaf, Droplet, Sun, ThermometerSun } from "lucide-react";

interface PlantInfoProps {
  name: string;
  scientificName: string;
  description: string;
  careInstructions: {
    water: string;
    light: string;
    temperature: string;
  };
  confidence: number;
}

export const PlantInfo = ({
  name,
  scientificName,
  description,
  careInstructions,
  confidence,
}: PlantInfoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
              <p className="text-sm italic text-gray-500">{scientificName}</p>
            </div>
            <div className="px-3 py-1 bg-sage-100 rounded-full">
              <span className="text-sm font-medium text-sage-700">
                {Math.round(confidence * 100)}% match
              </span>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-sage-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Droplet className="w-5 h-5 text-sage-600" />
              <h3 className="font-medium text-gray-900">Water</h3>
            </div>
            <p className="text-sm text-gray-600">{careInstructions.water}</p>
          </div>
          <div className="p-4 bg-sage-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-5 h-5 text-sage-600" />
              <h3 className="font-medium text-gray-900">Light</h3>
            </div>
            <p className="text-sm text-gray-600">{careInstructions.light}</p>
          </div>
          <div className="p-4 bg-sage-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <ThermometerSun className="w-5 h-5 text-sage-600" />
              <h3 className="font-medium text-gray-900">Temperature</h3>
            </div>
            <p className="text-sm text-gray-600">
              {careInstructions.temperature}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};