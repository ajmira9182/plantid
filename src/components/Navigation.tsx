import { Home, User, Mail, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-sage-50 border-b border-sage-200 py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-sage-600" />
          <span className="text-xl font-semibold text-sage-800">Flora Vision</span>
        </div>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors">
            <User className="w-4 h-4" />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-sage-700 hover:text-sage-900 transition-colors">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;