import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-sage-200 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-sage-600" />
              <span className="text-xl font-semibold text-sage-800">Flora Vision</span>
            </div>
            <p className="text-sage-600">
              Your intelligent plant identification companion. Upload any plant photo and get instant identification and care instructions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-sage-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sage-600 hover:text-sage-800 transition-colors">Home</a></li>
              <li><a href="/about" className="text-sage-600 hover:text-sage-800 transition-colors">About</a></li>
              <li><a href="/contact" className="text-sage-600 hover:text-sage-800 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sage-800 mb-4">Contact Us</h3>
            <p className="text-sage-600">Have questions? Reach out to us at:</p>
            <p className="text-sage-600">support@floravision.com</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-sage-200 text-center text-sage-600">
          <p>&copy; {new Date().getFullYear()} Flora Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;