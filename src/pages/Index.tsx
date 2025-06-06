
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Soluções Tecnológicas
              <span className="text-primary block">para sua Empresa</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conecte sua empresa ao futuro digital com nossas soluções especializadas em conectividade, infraestrutura e tecnologia corporativa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha a solução ideal para impulsionar os resultados da sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="ComFast"
              description="Soluções rápidas e eficientes para conectividade empresarial com alta performance."
              href="/comfast"
              color="primary"
              icon={
                <svg
                  className="w-full h-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 7h8v2h-8V7zM13 15h8v2h-8v-2zM13 11h8v2h-8v-2zM3 7v10l7-5-7-5z" />
                </svg>
              }
            />

            <ServiceCard
              title="Fios"
              description="Infraestrutura de fibra óptica e cabeamento estruturado para máxima estabilidade."
              href="/fios"
              color="accent"
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
            />

            <ServiceCard
              title="Vcorp"
              description="Soluções corporativas integradas para gestão e comunicação empresarial avançada."
              href="/vcorp"
              color="secondary"
              icon={
                <svg
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para transformar sua empresa?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe especializada está pronta para desenvolver a solução perfeita para suas necessidades tecnológicas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <span className="text-2xl mb-2 block">🚀</span>
                <span className="font-semibold">Rápida Implementação</span>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <span className="text-2xl mb-2 block">💡</span>
                <span className="font-semibold">Suporte Especializado</span>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <span className="text-2xl mb-2 block">📈</span>
                <span className="font-semibold">Resultados Garantidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Fios Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
