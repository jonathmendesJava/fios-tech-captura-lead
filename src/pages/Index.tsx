
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Tech snake background animation */}
      <div className="tech-snake-bg"></div>
      <div className="tech-dots"></div>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block mb-2">Solicite seu Orçamento</span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-float">
                Fios Tecnologia
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Preencha seus dados empresariais e receba uma proposta personalizada para sua empresa com as melhores soluções em conectividade.
            </p>
            
            {/* Floating tech elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-full animate-float opacity-20"></div>
            <div className="absolute top-20 right-20 w-12 h-12 border border-secondary/20 rounded-lg rotate-45 animate-float opacity-30" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-primary/15 rounded-full animate-float opacity-25" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o serviço que sua empresa precisa e solicite seu orçamento personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ServiceCard
              title="ComFast"
              description="Internet de alta velocidade para sua empresa com tecnologia de ponta e suporte especializado 24/7."
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
              description="Internet corporativa via fibra óptica para empresas que precisam de máxima performance e estabilidade."
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
              description="Soluções completas para provedores de internet (ISPs) com tecnologia e suporte especializado."
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

      {/* Info Section */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in glass-effect rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Processo Rápido e Fácil
              </span>
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Utilize o CNPJ da sua empresa para preenchimento automático dos dados e receba sua proposta rapidamente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="glass-effect rounded-lg p-4 hover:bg-primary/5 transition-all duration-300 group">
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">🔍</span>
                <span className="font-semibold text-primary">Preenchimento Automático</span>
              </div>
              <div className="glass-effect rounded-lg p-4 hover:bg-secondary/5 transition-all duration-300 group">
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">📋</span>
                <span className="font-semibold text-secondary">Proposta Personalizada</span>
              </div>
              <div className="glass-effect rounded-lg p-4 hover:bg-primary/5 transition-all duration-300 group">
                <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform duration-300">⚡</span>
                <span className="font-semibold text-primary">Resposta Rápida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-card/50 backdrop-blur-sm border-t border-primary/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 <span className="text-primary font-semibold">Fios Tecnologia</span> - Conectando sua empresa ao futuro
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
