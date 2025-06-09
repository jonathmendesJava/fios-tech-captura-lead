
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 animate-pulse-glow">
            <span className="text-primary-foreground font-bold text-xl">F</span>
          </div>
          <span className="text-xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fios Tecnologia
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow">
            Home
          </Link>
          <Link to="/comfast" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            ComFast
          </Link>
          <Link to="/fios" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Fios
          </Link>
          <Link to="/vcorp" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            Vcorp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
