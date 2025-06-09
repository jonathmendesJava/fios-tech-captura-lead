
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: "primary" | "accent" | "secondary";
}

const ServiceCard = ({ title, description, href, icon, color }: ServiceCardProps) => {
  const colorClasses = {
    primary: "hover:border-primary/50 hover:shadow-primary/20 group-hover:from-primary/10 group-hover:to-primary/5",
    accent: "hover:border-accent/50 hover:shadow-accent/20 group-hover:from-accent/10 group-hover:to-accent/5",
    secondary: "hover:border-secondary/50 hover:shadow-secondary/20 group-hover:from-secondary/10 group-hover:to-secondary/5"
  };

  const iconColorClasses = {
    primary: "text-primary group-hover:text-primary group-hover:drop-shadow-lg",
    accent: "text-accent group-hover:text-accent group-hover:drop-shadow-lg", 
    secondary: "text-secondary group-hover:text-secondary group-hover:drop-shadow-lg"
  };

  const buttonVariants = {
    primary: "default" as const,
    accent: "secondary" as const,
    secondary: "outline" as const
  };

  return (
    <Card className={`group glass-effect transition-all duration-500 hover:shadow-xl ${colorClasses[color]} border-border/50 animate-fade-in overflow-hidden relative`}>
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colorClasses[color]} pointer-events-none`}></div>
      
      <CardHeader className="text-center pb-4 relative z-10">
        <div className={`w-16 h-16 mx-auto mb-4 ${iconColorClasses[color]} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}>
          {icon}
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center relative z-10">
        <Link to={href}>
          <Button 
            className="w-full transition-all duration-500 group-hover:scale-105 hover:shadow-lg font-semibold"
            variant={buttonVariants[color]}
          >
            Acessar {title}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
