
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
    primary: "hover:border-primary/50 group-hover:shadow-primary/20",
    accent: "hover:border-accent/50 group-hover:shadow-accent/20",
    secondary: "hover:border-secondary/50 group-hover:shadow-secondary/20"
  };

  const iconColorClasses = {
    primary: "text-primary",
    accent: "text-accent", 
    secondary: "text-secondary"
  };

  return (
    <Card className={`group transition-all duration-300 hover:shadow-lg ${colorClasses[color]} border-2 animate-fade-in`}>
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto mb-4 ${iconColorClasses[color]} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Link to={href}>
          <Button 
            className="w-full transition-all duration-300 group-hover:scale-105"
            variant={color === "primary" ? "default" : color === "accent" ? "secondary" : "outline"}
          >
            Acessar {title}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
