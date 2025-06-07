
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
        description="Cadastro de dados empresariais para a linha de produtos Vcorp - soluções corporativas integradas de gestão e comunicação."
        webhookUrl="https://hook.us1.make.com/hkdry75vfu8g5jchdjnxri1zxiafxkkl"
        onSuccess={() => setShowSuccess(true)}
      />
    </div>
  );
};

export default Vcorp;
