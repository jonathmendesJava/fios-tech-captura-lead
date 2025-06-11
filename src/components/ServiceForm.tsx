
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCnpjLookup } from "@/hooks/useCnpjLookup";
import { useToast } from "@/hooks/use-toast";
import { FormData } from "@/types/FormData";
import CompanyFields from "@/components/form/CompanyFields";
import AddressFields from "@/components/form/AddressFields";
import ContactFields from "@/components/form/ContactFields";

interface ServiceFormProps {
  title: string;
  description: string;
  webhookUrl: string;
  onSuccess: () => void;
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
        description: "Por favor, consulte o CNPJ primeiro para prosseguir.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("Enviando solicitação de orçamento para:", webhookUrl);

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

      console.log("Resposta da solicitação:", response.status);
      
      toast({
        title: "✅ Solicitação enviada com sucesso!",
        description: "Recebemos sua solicitação de orçamento. Nossa equipe entrará em contato em breve.",
      });
      
      onSuccess();
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
      toast({
        title: "Erro no envio",
        description: "Não foi possível enviar sua solicitação. Tente novamente.",
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
              <CompanyFields
                formData={formData}
                setFormData={setFormData}
                isLoading={isLoading}
                onCnpjChange={handleCnpjChange}
                onCnpjBlur={handleCnpjBlur}
              />

              <AddressFields
                formData={formData}
                setFormData={setFormData}
                isLoading={isLoading}
              />

              <ContactFields
                formData={formData}
                setFormData={setFormData}
                isLoading={isLoading}
              />

              <Button 
                type="submit" 
                className="w-full text-lg py-6 transition-all duration-300 hover:scale-[1.02]"
                disabled={isSubmitting || isLoading}
              >
                {isSubmitting ? "Enviando Solicitação..." : "Solicitar Orçamento"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceForm;
