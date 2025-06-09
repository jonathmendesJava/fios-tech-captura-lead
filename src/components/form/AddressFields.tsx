
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/types/FormData";

interface AddressFieldsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  isLoading: boolean;
}

const AddressFields = ({ formData, setFormData, isLoading }: AddressFieldsProps) => {
  return (
    <>
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
    </>
  );
};

export default AddressFields;
