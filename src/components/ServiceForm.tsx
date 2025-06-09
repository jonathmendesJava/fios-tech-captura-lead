
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCnpjLookup } from "@/hooks/useCnpjLookup";
import { useToast } from "@/hooks/use-toast";

interface ServiceFormProps {
  title: string;
  description: string;
  webhookUrl: string;
  onSuccess: () => void;
}

interface FormData {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  logradouro: string;
  numero: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone: string;
  email: string;
  observacoes: string;
  dataInicioAtividade: string;
}

const ServiceForm = ({ title, description, webhookUrl, onSuccess }: ServiceFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    logradouro: "",
    numero: "",
    bairro: "",
    municipio: "",
    uf: "",
    cep: "",
    telefone: "",
    email: "",
    observacoes: "",
    dataInicioAtividade: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { lookupCnpj, validateCnpj, formatCnpj, isLoading } = useCnpjLookup();
  const { toast } = useToast();

  const handleCnpjChange = (value: string) => {
    const formatted = formatCnpj(value);
    setFormData(prev => ({ ...prev, cnpj: formatted }));
  };

  const handleCnpjBlur = async () => {
    if (!validateCnpj(formData.cnpj)) return;

    const data = await lookupCnpj(formData.cnpj);
    if (data) {
      // Formatando telefone completo
      const telefoneCompleto = data.tel_ddd && data.tel_numero ? 
        `(${data.tel_ddd}) ${data.tel_numero}` : "";
      
      // Montando endereço completo
      const enderecoCompleto = `${data.end_tipo || ""} ${data.end_logradouro || ""}`.trim();
      
      setFormData(prev => ({
        ...prev,
        razaoSocial: data.razao_social || "",
        logradouro: enderecoCompleto,
        numero: data.end_numero?.toString() || "",
        bairro: data.end_bairro || "",
        municipio: data.end_cidade || "",
        uf: data.end_uf || "",
        cep: data.end_cep?.toString() || "",
        telefone: telefoneCompleto,
        email: data.email || "",
        dataInicioAtividade: data.dt_inicio || "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCnpj(formData.cnpj)) {
      toast({
        title: "CNPJ inválido",
        description: "Por favor, digite um CNPJ válido.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.razaoSocial) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, consulte o CNPJ primeiro.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Enviando dados para:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          servico: title,
          cnpj: formData.cnpj,
          razao_social: formData.razaoSocial,
          nome_fantasia: formData.nomeFantasia,
          data_inicio_atividade: formData.dataInicioAtividade,
          endereco: {
            logradouro: formData.logradouro,
            numero: formData.numero,
            bairro: formData.bairro,
            municipio: formData.municipio,
            uf: formData.uf,
            cep: formData.cep,
          },
          contato: {
            telefone: formData.telefone,
            email: formData.email,
          },
          observacoes: formData.observacoes,
          timestamp: new Date().toISOString(),
        }),
      });

      console.log("Resposta do webhook:", response.status);
      
      toast({
        title: "✅ Enviado com sucesso!",
        description: "Seus dados foram enviados. Nossa equipe entrará em contato em breve.",
      });
      
      onSuccess();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast({
        title: "Erro no envio",
        description: "Não foi possível enviar os dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">{title}</CardTitle>
            <CardDescription className="text-lg">{description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ *</Label>
                <Input
                  id="cnpj"
                  type="text"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={(e) => handleCnpjChange(e.target.value)}
                  onBlur={handleCnpjBlur}
                  maxLength={18}
                  className="transition-all duration-200 focus:scale-[1.02]"
                  disabled={isLoading}
                />
                {isLoading && (
                  <p className="text-sm text-muted-foreground">Consultando CNPJ...</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="razaoSocial">Razão Social *</Label>
                  <Input
                    id="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={(e) => setFormData(prev => ({ ...prev, razaoSocial: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dataInicioAtividade">Data Início Atividade</Label>
                  <Input
                    id="dataInicioAtividade"
                    value={formData.dataInicioAtividade}
                    onChange={(e) => setFormData(prev => ({ ...prev, dataInicioAtividade: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="logradouro">Logradouro</Label>
                  <Input
                    id="logradouro"
                    value={formData.logradouro}
                    onChange={(e) => setFormData(prev => ({ ...prev, logradouro: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numero">Número</Label>
                  <Input
                    id="numero"
                    value={formData.numero}
                    onChange={(e) => setFormData(prev => ({ ...prev, numero: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input
                    id="bairro"
                    value={formData.bairro}
                    onChange={(e) => setFormData(prev => ({ ...prev, bairro: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="municipio">Cidade</Label>
                  <Input
                    id="municipio"
                    value={formData.municipio}
                    onChange={(e) => setFormData(prev => ({ ...prev, municipio: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="uf">UF</Label>
                  <Input
                    id="uf"
                    value={formData.uf}
                    onChange={(e) => setFormData(prev => ({ ...prev, uf: e.target.value }))}
                    disabled={isLoading}
                    maxLength={2}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input
                    id="cep"
                    value={formData.cep}
                    onChange={(e) => setFormData(prev => ({ ...prev, cep: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData(prev => ({ ...prev, telefone: e.target.value }))}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações (opcional)</Label>
                <Textarea
                  id="observacoes"
                  placeholder="Informações adicionais sobre sua necessidade..."
                  value={formData.observacoes}
                  onChange={(e) => setFormData(prev => ({ ...prev, observacoes: e.target.value }))}
                  disabled={isLoading}
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full text-lg py-6 transition-all duration-300 hover:scale-[1.02]"
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceForm;
