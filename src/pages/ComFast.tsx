
import { useState } from "react";
import Header from "@/components/Header";
import ServiceForm from "@/components/ServiceForm";
import SuccessPage from "@/components/SuccessPage";

const ComFast = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    return <SuccessPage />;
  }

  return (
    <div>
      <Header />
      <ServiceForm
        title="ComFast"
        description="Cadastro de dados empresariais para a linha de produtos ComFast - soluções de conectividade empresarial."
        webhookUrl="https://hook.us1.make.com/6psmvt9kr4r6hhujjt1ezblprjtlu5kl"
        onSuccess={() => setShowSuccess(true)}
      />
    </div>
  );
};

export default ComFast;
