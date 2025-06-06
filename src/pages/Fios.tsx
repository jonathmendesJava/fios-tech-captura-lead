
import { useState } from "react";
import Header from "@/components/Header";
import ServiceForm from "@/components/ServiceForm";
import SuccessPage from "@/components/SuccessPage";

const Fios = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return <SuccessPage />;
  }

  return (
    <div>
      <Header />
      <ServiceForm
        title="Fios"
        description="Solicite uma proposta para infraestrutura de fibra óptica e cabeamento estruturado para sua empresa."
        webhookUrl="https://hook.us1.make.com/vpdwed3kowfyjint51jfscdes1xvll14"
        onSuccess={() => setShowSuccess(true)}
      />
    </div>
  );
};

export default Fios;
