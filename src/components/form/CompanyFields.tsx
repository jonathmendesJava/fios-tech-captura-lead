
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/types/FormData";

interface CompanyFieldsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isLoading: boolean;
  onCnpjChange: (value: string) => void;
  onCnpjBlur: () => void;
}

const CompanyFields = ({ 
  formData, 
  setFormData, 
  isLoading, 
  onCnpjChange, 
  onCnpjBlur 
}: CompanyFieldsProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="cnpj">CNPJ *</Label>
        <Input
          id="cnpj"
          type="text"
          placeholder="00.000.000/0000-00"
          value={formData.cnpj}
          onChange={(e) => onCnpjChange(e.target.value)}
          onBlur={onCnpjBlur}
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
    </>
  );
};

export default CompanyFields;
