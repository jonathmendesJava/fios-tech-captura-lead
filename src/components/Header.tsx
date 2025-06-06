
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
            <span className="text-primary-foreground font-bold text-xl">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">Fios Tecnologia</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            Home
          </Link>
          <Link to="/comfast" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            ComFast
          </Link>
          <Link to="/fios" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            Fios
          </Link>
          <Link to="/vcorp" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            Vcorp
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
