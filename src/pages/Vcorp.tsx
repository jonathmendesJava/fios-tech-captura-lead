
import { useState } from "react";
import Header from "@/components/Header";
import ServiceForm from "@/components/ServiceForm";
import SuccessPage from "@/components/SuccessPage";

const Vcorp = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return <SuccessPage />;
  }

  return (
    <div>
      <Header />
      <ServiceForm
        title="Vcorp"
        description="Solicite seu orçamento para soluções completas destinadas a provedores de internet (ISPs) com tecnologia avançada."
        webhookUrl="https://hook.us1.make.com/hkdry75vfu8g5jchdjnxri1zxiafxkkl"
        onSuccess={() => setShowSuccess(true)}
      />
    </div>
  );
};

export default Vcorp;
