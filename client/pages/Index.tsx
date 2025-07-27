import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header */}
      <header className="w-full h-[157px] bg-jaque-purple border-b-2 border-jaque-green relative">
        <div className="container mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4506fd00cd3b5a7e70dce9d567768d7e7c1b0f43?width=510" 
              alt="Jaque Venancio Logo" 
              className="w-48 h-auto"
            />
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-0">
            {["Sobre", "Serviços", "Avaliações", "Contato"].map((item) => (
              <div key={item} className="flex items-center h-10 px-6 bg-jaque-green rounded-t-[20px] text-white font-medium">
                {item}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20">
        {/* Hero Background Image */}
        <div className="absolute top-[157px] left-0 w-full h-[844px]">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/059d82c2944f2997140de6d2d4439352eb3d64c0?width=3024" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="w-1/2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-[32px] font-normal text-gray-800 font-['Montserrat']">
                  Nutricionista
                </h1>
                <h2 className="text-[32px] font-normal text-gray-700 font-['Montserrat']">
                  Jaqueline Venancio
                </h2>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-normal text-gray-600 font-['Montserrat']">
                  Descubra o poder de tratamentos naturais para desinflamação e saúde da mulher!
                </h3>
                <p className="text-base leading-relaxed text-gray-800 font-['Montserrat'] text-justify">
                  Olá! Eu sou a Jaqueline Venancio, nutricionista a mais de 5 anos, e hoje especializada em ajudar mulheres a desinflamarem seus corpos, e nunca mais sentirem cólicas de um parto, sensação constante de barriga inchada, dores constantes, fadiga mental, e outros problemas relacionados a inflamações crônicas.
                </p>
              </div>

              <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] shadow-lg font-medium font-['Montserrat']">
                Entenda meu trabalho
              </button>
            </div>

            {/* Right Content - Profile Photo */}
            <div className="w-1/2 flex justify-end">
              <div className="relative">
                <div className="w-[578px] h-[578px] rounded-full border-4 border-jaque-green shadow-xl overflow-hidden">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bcb57e5c493a7f8927f593b2d5222584f8fba27c?width=830" 
                    alt="Jaqueline Venancio" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 w-full">
          <svg width="1512" height="169" viewBox="0 0 1512 169" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 73.1178C0 73.1178 420 -86.8973 751 73.1178C1082 233.133 1335.5 157.425 1512 73.1178" stroke="#6BA629" strokeWidth="3"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="relative bg-jaque-purple text-white py-20">
        <div className="container mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-[32px] font-normal font-['Montserrat'] mb-8">Sobre</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left Text */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed font-['Montserrat']">
                Enquanto eu cursava nutrição, eu sempre via o emagrecimento e ganho muscular como consequência de um corpo saudável, e é assim que eu trabalho hoje. Realizando um tratamento de dentro pra fora, e ouvindo cada queixa do meu paciente, afinal somos humanos e cada detalhe importa, pois nossas emoções também influenciam em como comemos e nos comportamos.
              </p>
              <p className="text-base leading-relaxed font-['Montserrat']">
                Sou formada em nutrição, e fiz pós graduação em praticas integrativas e complementares, ou seja hoje o meu trabalho vai além dos cardápios.
              </p>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <div className="w-[405px] h-[451px] rounded-lg overflow-hidden border-2 border-jaque-orange">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/902e5ef4b13da15674d1c62eeb7b5d3be0e21787?width=830" 
                  alt="Jaqueline Venancio" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <p className="text-base leading-relaxed font-['Montserrat']">
                Eu uso o poder dos chás, suplementações e outras práticas integrativas, como yoga e medicina ayurvédica, para trazer uma vida de qualidade, com sono adequado, redução de dores e até eliminação de condições crônicas como candidíase de repetição.
              </p>
              <p className="text-base leading-relaxed font-['Montserrat']">
                Meu foco em mulheres se deu ao grande descaso que percebi ao longo da minha própria vida quando se tratava de saúde. Me sentia pouco ouvida e por muitas vezes busquei sozinha a solução para meus problemas, e isso não acontecia somente comigo, por isso passei a me dedicar às mulheres que querem ter uma vida de qualidade mas não tem apoio.
              </p>
              <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] font-medium font-['Montserrat']">
                Quer saber mais sobre como posso te ajudar?
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20" style={{background: 'linear-gradient(180deg, #F18C27 0%, #440F4C 62.06%)'}}>
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-white font-['Montserrat'] mb-12">Serviços</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Atendimento Personalizado Card */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center text-center">
              <div className="w-full h-[312px] mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bcb57e5c493a7f8927f593b2d5222584f8fba27c?width=830" 
                  alt="Atendimento personalizado" 
                  className="w-full h-full object-cover rounded-[20px] border border-white"
                />
              </div>
              <h3 className="text-xl font-normal text-black font-['Montserrat'] mb-4">
                Atendimento personalizado
              </h3>
              <p className="text-base text-black font-['Montserrat'] mb-6">
                Você pode ter meu acompanhamento nutricional ou tirar suas dúvidas a respeito clicando aqui:
              </p>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120" 
                alt="WhatsApp" 
                className="w-15 h-15"
              />
            </div>

            {/* Yoga Card */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center text-center">
              <div className="w-full h-[312px] mb-4">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/902e5ef4b13da15674d1c62eeb7b5d3be0e21787?width=830" 
                  alt="Yoga" 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-xl font-normal text-black font-['Montserrat'] mb-4">
                Yoga
              </h3>
              <div className="flex items-end justify-center mb-6">
                <p className="text-base text-black font-['Montserrat'] flex-1">
                  Além do acompanhamento nutricional, eu também ofereço aulas de yoga relaxante, que auxilia os processos de compulsão alimentar e também ajuda a ter mais consciência corporal, e também controle emocional, as praticas podem ser online ou presencial, clique aqui para saber
                </p>
                <span className="text-sm text-gray-500 font-['Montserrat'] ml-2">mais</span>
              </div>
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120" 
                alt="WhatsApp" 
                className="w-15 h-15"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-jaque-beige py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-black font-['Montserrat'] mb-4">Avaliações</h2>
          <p className="text-xl text-black font-['Montserrat'] mb-12">
            Veja alguns depoimentos de pacientes:
          </p>

          <div className="space-y-8 mb-12">
            {/* Testimonial 1 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black font-['Montserrat'] mb-2">Thais Sales</h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" fill="#F18C27" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black font-['Montserrat'] leading-relaxed">
                A melhor nutricionista que ja fui, como pessoa a cima do peso, não é somente a comida que faz mal e a Jaque entendi disso e ajuda a entender muitas coisas, ensina qual alimentação no momento faz bem, muito obrigada pelo ótimo atendimento. Perfeita e indico sempre!
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black font-['Montserrat'] mb-2">Oliveira Domingos Aguiar</h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" fill="#F18C27" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black font-['Montserrat'] leading-relaxed">
                Nutricionista top! Me ajudou em meu propósito sem fazer dietas mirabolantes ou cortes extremos de alimentação. Ela acompanha de perto e tira todas às dúvidas de forma simples e de fácil compreensão.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black font-['Montserrat'] mb-2">Thais Miranda De Oliveira</h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z" fill="#F18C27" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black font-['Montserrat'] leading-relaxed">
                Minha melhor nutricionista! Comprometida com a qualidade da alimentação dos pacientes.Não passa dietas malucas. Tudo fácil de cumprir.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-jaque-green text-black px-6 py-2 rounded-[20px] font-medium font-['Montserrat']">
              Ver mais
            </button>
            <button className="bg-jaque-orange text-white px-8 py-2 rounded-[20px] font-medium font-['Montserrat']">
              Avaliar
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-jaque-gray py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-black font-['Montserrat'] mb-12">Contato</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-base text-black font-['Montserrat'] mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white font-['Montserrat']"
                  />
                </div>
                <div>
                  <label className="block text-base text-black font-['Montserrat'] mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Digite seu telefone"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white font-['Montserrat']"
                  />
                </div>
                <div>
                  <label className="block text-base text-black font-['Montserrat'] mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white font-['Montserrat']"
                  />
                </div>
                <div>
                  <label className="block text-base text-black font-['Montserrat'] mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem"
                    rows={6}
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white font-['Montserrat'] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-jaque-orange text-white px-6 py-3 rounded-[20px] font-medium font-['Montserrat']"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-8 space-y-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27.5 7.5L15 16.25L2.5 7.5" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base text-black font-['Montserrat']">jaquevenancio.nutri@gmail.com</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.4998 21.15V24.9C27.5012 25.2481 27.4299 25.5927 27.2904 25.9117C27.151 26.2307 26.9464 26.517 26.6899 26.7523C26.4334 26.9877 26.1305 27.1669 25.8007 27.2784C25.4709 27.3899 25.1215 27.4313 24.7748 27.4C20.9283 26.9821 17.2335 25.6677 13.9873 23.5625C10.9671 21.6433 8.40646 19.0827 6.48729 16.0625C4.37477 12.8015 3.0601 9.08874 2.64979 5.225C2.61856 4.87933 2.65964 4.53095 2.77042 4.20203C2.8812 3.87311 3.05926 3.57086 3.29325 3.31453C3.52725 3.05819 3.81205 2.85339 4.12953 2.71315C4.44702 2.57292 4.79022 2.50033 5.13729 2.5H8.88729C9.49393 2.49403 10.082 2.70885 10.542 3.10441C11.002 3.49998 11.3024 4.04931 11.3873 4.65C11.5456 5.85008 11.8391 7.02841 12.2623 8.1625C12.4305 8.6099 12.4669 9.09614 12.3672 9.5636C12.2675 10.0311 12.0359 10.4601 11.6998 10.8L10.1123 12.3875C11.8917 15.5169 14.4829 18.1081 17.6123 19.8875L19.1998 18.3C19.5397 17.9639 19.9687 17.7323 20.4362 17.6326C20.9037 17.5329 21.3899 17.5693 21.8373 17.7375C22.9714 18.1607 24.1497 18.4542 25.3498 18.6125C25.957 18.6982 26.5115 19.004 26.908 19.4719C27.3044 19.9397 27.515 20.537 27.4998 21.15Z" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-base text-black font-['Montserrat']">(61) 98195-6980</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.25 7.5V27.5L10 22.5L20 27.5L28.75 22.5V2.5L20 7.5L10 2.5L1.25 7.5Z" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 2.5V22.5" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 7.5V27.5" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="space-y-2">
                  <p className="text-base text-black font-['Montserrat']">
                    <span className="font-medium">Atendimentos online</span> para brasileiros em qualquer lugar do mundo.
                  </p>
                  <p className="text-base text-black font-['Montserrat']">
                    <span className="font-medium">Atendimento presencial:</span> Centro Clínico Life Gama, sala 519 - Setor central do gama
                  </p>
                </div>
                
                {/* Map */}
                <div className="w-full h-48 bg-gray-300 rounded-lg relative overflow-hidden border-2 border-jaque-orange">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e39a9455988d3bf13f77e1d106f03d8bfa40ecdb?width=980" 
                    alt="Map" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z" stroke="#F18C27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-jaque-purple py-12">
        <div className="container mx-auto px-8">
          <div className="flex items-center space-x-12">
            <h3 className="text-[32px] font-normal text-white font-['Montserrat']">Redes Sociais</h3>
            <div className="flex space-x-10">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120" 
                alt="WhatsApp" 
                className="w-15 h-15"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bd0348beb0f459f88be491a3a30a548a7bd37d9f?width=120" 
                alt="Instagram" 
                className="w-15 h-15"
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/533aa04f9297eb4251dd0f6dffff772ffee89e2c?width=120" 
                alt="YouTube" 
                className="w-15 h-15"
              />
            </div>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:scale-110 transition-transform">
            <g clipPath="url(#clip0_248_615)">
              <path d="M53.3427 28.4929C53.1626 42.2021 41.5961 53.1655 27.5083 52.9804C22.3114 52.9121 13.5 48.6862 13.5 48.6862L3 52.9804L7.39497 43C7.39497 43 2.2515 33.5075 2.32619 27.8226C2.50632 14.1135 14.0728 3.15006 28.1606 3.33516C42.2484 3.52026 53.5229 14.7838 53.3427 28.4929Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M47.8405 8.13168C42.577 2.8905 35.5765 0.00265915 28.1176 0C12.7479 0 0.239316 12.4382 0.233968 27.727C0.231294 32.6144 1.51612 37.3849 3.95607 41.5891L0 55.9592L14.7814 52.1034C18.8538 54.3132 23.4396 55.4765 28.1056 55.4779H28.1176C43.4846 55.4779 55.9947 43.0383 56 27.7495C56.0026 20.3399 53.1054 13.3742 47.8405 8.13301V8.13168ZM28.1176 50.7951H28.1083C23.9503 50.7939 19.8713 49.6822 16.3123 47.5828L15.466 47.083L6.69418 49.3711L9.0352 40.8658L8.48436 39.9936C6.16473 36.324 4.93873 32.0826 4.94141 27.7284C4.94676 15.0216 15.343 4.68276 28.1271 4.68276C34.3171 4.68542 40.1357 7.08531 44.5114 11.4423C48.8874 15.798 51.2952 21.5897 51.2926 27.7469C51.2871 40.4551 40.891 50.7939 28.1176 50.7939V50.7951ZM40.8294 33.5346C40.1329 33.1876 36.7077 31.5122 36.0685 31.281C35.4295 31.0495 34.9656 30.934 34.5016 31.6279C34.0377 32.3221 32.7021 33.8829 32.2957 34.3442C31.8892 34.8069 31.4827 34.8642 30.7862 34.517C30.0897 34.1701 27.8449 33.4388 25.183 31.0788C23.1121 29.2413 21.7135 26.9731 21.3072 26.279C20.9008 25.585 21.2644 25.2101 21.612 24.8657C21.9248 24.5546 22.3085 24.056 22.6574 23.6518C23.0065 23.2476 23.1215 22.9578 23.354 22.4964C23.5867 22.0337 23.4704 21.6296 23.2966 21.2825C23.1227 20.9355 21.7297 17.5251 21.1481 16.1384C20.5825 14.7875 20.0077 14.971 19.5812 14.9484C19.1747 14.9285 18.7108 14.9245 18.2456 14.9245C17.7803 14.9245 17.0262 15.0973 16.3872 15.7914C15.7481 16.4853 13.9485 18.1619 13.9485 21.571C13.9485 24.98 16.4447 28.2761 16.7936 28.7388C17.1425 29.2015 21.7068 36.1991 28.6952 39.2012C30.3571 39.9152 31.6552 40.342 32.6673 40.6611C34.3359 41.1889 35.8546 41.1145 37.0552 40.9363C38.3936 40.7369 41.1771 39.2597 41.7573 37.6416C42.3376 36.0235 42.3376 34.6354 42.1638 34.3469C41.99 34.0584 41.5248 33.8842 40.8282 33.5372L40.8294 33.5346Z" fill="#25D366"/>
            </g>
            <defs>
              <clipPath id="clip0_248_615">
                <rect width="56" height="56" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </footer>
    </div>
  );
}
