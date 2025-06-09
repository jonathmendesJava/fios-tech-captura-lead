
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CnpjData {
  dt_inicio: string;
  cnpj: string;
  razao_social: string;
  end_tipo: string;
  end_logradouro: string;
  end_numero: string;
  end_bairro: string;
  end_cidade: string;
  end_uf: string;
  end_cep: string;
  email: string;
  tel_ddd: string;
  tel_numero: string;
}

export const useCnpjLookup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const lookupCnpj = async (cnpj: string): Promise<CnpjData | null> => {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    
    if (cleanCnpj.length !== 14) {
      toast({
        title: "CNPJ inválido",
        description: "O CNPJ deve conter 14 dígitos.",
        variant: "destructive",
      });
      return null;
    }

    setIsLoading(true);
    
    try {
      console.log("Consultando CNPJ:", cleanCnpj);
      
      const response = await fetch("https://hook.us1.make.com/atcem0u644ck9ibipd7awjqhqghob94f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cnpj: cleanCnpj
        }),
      });
      
      if (!response.ok) {
        throw new Error("Erro na consulta do CNPJ");
      }
      
      const data = await response.json();
      
      if (!data || !data.razao_social) {
        toast({
          title: "CNPJ não encontrado",
          description: "Verifique o CNPJ digitado e tente novamente.",
          variant: "destructive",
        });
        return null;
      }
      
      console.log("Dados do CNPJ encontrados:", data);
      
      toast({
        title: "✅ CNPJ encontrado!",
        description: "Dados preenchidos automaticamente.",
      });
      
      return data;
    } catch (error) {
      console.error("Erro ao consultar CNPJ:", error);
      toast({
        title: "Erro na consulta",
        description: "Não foi possível consultar o CNPJ. Tente novamente.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const validateCnpj = (cnpj: string): boolean => {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    
    if (cleanCnpj.length !== 14) return false;
    
    // Validação básica de CNPJ
    if (/^(\d)\1+$/.test(cleanCnpj)) return false;
    
    return true;
  };

  const formatCnpj = (cnpj: string): string => {
    const cleanCnpj = cnpj.replace(/\D/g, "");
    return cleanCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
  };

  return {
    lookupCnpj,
    validateCnpj,
    formatCnpj,
    isLoading,
  };
};
