
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="https://i.postimg.cc/pdVMC9tS/Chat-GPT-Image-9-de-jun-de-2025-10-14-15.png" 
            alt="Fios Tecnologia Logo" 
            className="h-6 sm:h-8 w-auto transition-all duration-300 group-hover:scale-105"
          />
          <span className="text-lg sm:text-xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fios Tecnologia
          </span>
        </Link>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2 hover:bg-primary/10 rounded-md transition-colors">
              <Menu className="h-6 w-6 text-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-background border border-primary/20">
              <DropdownMenuItem asChild>
                <Link to="/" className="flex items-center w-full px-2 py-2 text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/comfast" className="flex items-center w-full px-2 py-2 text-foreground hover:text-primary transition-colors">
                  ComFast
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/fios" className="flex items-center w-full px-2 py-2 text-foreground hover:text-primary transition-colors">
                  Fios
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/vcorp" className="flex items-center w-full px-2 py-2 text-foreground hover:text-primary transition-colors">
                  Vcorp
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
