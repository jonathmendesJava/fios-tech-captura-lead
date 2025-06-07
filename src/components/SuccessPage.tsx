
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-10 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="animate-scale-in text-center">
          <CardHeader className="pb-6">
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-5xl">✅</span>
            </div>
            <CardTitle className="text-3xl font-bold text-primary">
              Dados cadastrados com sucesso!
            </CardTitle>
            <CardDescription className="text-lg mt-4">
              Os dados foram enviados para processamento interno no sistema.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Status do processamento:</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Dados validados e enviados</li>
                <li>• Processamento automático iniciado</li>
                <li>• Cliente cadastrado no sistema interno</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto">
                  Voltar ao Início
                </Button>
              </Link>
              <Link to="/">
                <Button className="w-full sm:w-auto">
                  Novo Cadastro
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuccessPage;
