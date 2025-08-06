import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-montserrat">
      {/* Header */}
      <header className="w-full h-[72px] md:h-[157px] bg-jaque-purple border-b border-jaque-green md:border-b-2 relative">
        <div className="relative w-full h-full">
          {/* Logo - Absolutely positioned */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/4506fd00cd3b5a7e70dce9d567768d7e7c1b0f43?width=510"
            alt="Jaque Venancio Logo"
            className="absolute left-[5%] top-0 w-24 h-16 md:w-48 md:h-[157px] object-contain"
          />

          {/* Navigation centered */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about-me" style={{ textDecoration: "none" }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 160,
                    height: 40,
                    padding: 8,
                    background: "#6BA629",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      color: "#FAFAFA",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                    }}
                  >
                    Sobre
                  </div>
                </div>
              </a>
              <a href="#services-tab" style={{ textDecoration: "none" }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 160,
                    height: 40,
                    padding: 8,
                    background: "#6BA629",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      color: "#FAFAFA",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                    }}
                  >
                    Serviços
                  </div>
                </div>
              </a>
              <a href="#ratings" style={{ textDecoration: "none" }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 160,
                    height: 40,
                    padding: 8,
                    background: "#6BA629",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      color: "#FAFAFA",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                    }}
                  >
                    Avaliações
                  </div>
                </div>
              </a>
              <a href="#reach-me" style={{ textDecoration: "none" }}>
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 160,
                    height: 40,
                    padding: 8,
                    background: "#6BA629",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      color: "#FAFAFA",
                      fontSize: 16,
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                    }}
                  >
                    Contato
                  </div>
                </div>
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div
              className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
              onClick={toggleMenu}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe5e3909c842b45ce9dfd2852340172fe%2Ff7c538148a174d9180cfe1a80315e778?format=webp&width=800"
                alt="Menu"
                className="w-8 h-8"
              />
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
                onClick={toggleMenu}
              >
                <div
                  className="absolute top-20 right-4 bg-white rounded-lg p-4 shadow-lg min-w-[200px]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a
                    href="#about-me"
                    onClick={toggleMenu}
                    style={{
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        width: "90%",
                        background: "#F18C27",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        marginBottom: "8px"
                      }}
                    >
                      <div
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                        }}
                      >
                        Sobre
                      </div>
                    </div>
                  </a>
                  <a
                    href="#services-tab"
                    onClick={toggleMenu}
                    style={{
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        width: "90%",
                        background: "#F18C27",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        marginBottom: "8px"
                      }}
                    >
                      <div
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                        }}
                      >
                        Serviços
                      </div>
                    </div>
                  </a>
                  <a
                    href="#ratings"
                    onClick={toggleMenu}
                    style={{
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        width: "90%",
                        background: "#F18C27",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        marginBottom: "8px"
                      }}
                    >
                      <div
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                        }}
                      >
                        Avaliações
                      </div>
                    </div>
                  </a>
                  <a
                    href="#reach-me"
                    onClick={toggleMenu}
                    style={{
                      textDecoration: "none",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        height: "40px",
                        width: "90%",
                        background: "#F18C27",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        marginBottom: "8px"
                      }}
                    >
                      <div
                        style={{
                          color: "#000",
                          fontSize: 16,
                          fontFamily: "Montserrat",
                          fontWeight: "500",
                        }}
                      >
                        Contato
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white pb-20">
        {/* Desktop Background Image */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-[844px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/059d82c2944f2997140de6d2d4439352eb3d64c0?width=3024"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile Background Image - starts exactly after header */}
        <div className="block md:hidden absolute left-0 w-full h-[900px]" style={{top: '72px'}}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fe5e3909c842b45ce9dfd2852340172fe%2F5d382a995f684fa49eb998a822eba4e6?format=webp&width=800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-8 relative z-10 pt-4 md:pt-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-[28px] md:text-[32px] font-normal text-gray-800">
                  Nutricionista
                </h1>
                <h2 className="text-[28px] md:text-[32px] font-normal text-gray-700">
                  Jaqueline Venancio
                </h2>
              </div>

              <div className="space-y-4">
                <h3>
                  <span className="block md:hidden" style={{
                    color: '#0C0C0C',
                    fontSize: '20px',
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    lineHeight: '160%',
                    width: '322px',
                    height: '128px'
                  }}>
                    Descubra o poder de tratamentos naturais para desinflamação e
                    saúde da mulher!
                  </span>
                  <span className="hidden md:block text-lg md:text-xl font-normal text-gray-600">
                    Descubra o poder de tratamentos naturais para desinflamação e
                    saúde da mulher!
                  </span>
                </h3>
                <p>
                  <span className="block md:hidden" style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '200%',
                    textAlign: 'justify',
                    width: '317px',
                    height: '288px'
                  }}>
                    Olá! Eu sou a Jaqueline Venancio, nutricionista a mais de 5
                    anos, e hoje especializada em ajudar mulheres a desinflamarem
                    seus corpos, e nunca mais sentirem cólicas de um parto,
                    sensa��ão constante de barriga inchada, dores constantes,
                    fadiga mental, e outros problemas relacionados a inflamações
                    crônicas.
                  </span>
                  <span className="hidden md:block text-sm md:text-base leading-relaxed text-gray-800 text-justify">
                    Olá! Eu sou a Jaqueline Venancio, nutricionista a mais de 5
                    anos, e hoje especializada em ajudar mulheres a desinflamarem
                    seus corpos, e nunca mais sentirem cólicas de um parto,
                    sensação constante de barriga inchada, dores constantes,
                    fadiga mental, e outros problemas relacionados a inflamações
                    crônicas.
                  </span>
                </p>
              </div>

              {/* Desktop Button */}
              <div className="hidden md:flex justify-start">
                <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] shadow-lg font-medium">
                  Entenda meu trabalho
                </button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe5e3909c842b45ce9dfd2852340172fe%2F8383e07c4a9b42b78712f99282959bc1?format=webp&width=800"
                  alt="Jaqueline Venancio"
                  className="w-[300px] h-[300px] md:w-[578px] md:h-[578px] object-cover"
                />
              </div>
            </div>

            {/* Mobile Button - After photo */}
            <div className="md:hidden flex justify-center w-full">
              <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] shadow-lg font-medium">
                Entenda meu trabalho
              </button>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute -bottom-16 md:-bottom-24 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            transform="scale(-1, 1)"
            className="w-full h-auto"
          >
            <path
              fill="#440F4C"
              d="M1000 100H0V48c62.5 24 125 48 250 48 250 0 250-96 500-96 125 0 187.5 24 250 48v52z"
            ></path>
            <path
              d="M0 48c62.5 24 125 48 250 48 250 0 250-96 500-96 125 0 187.5 24 250 48"
              fill="none"
              stroke="#6BA629"
              strokeWidth="3"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about-me"
        className="relative mt-24 bg-jaque-purple text-white pt-4 pb-20"
      >
        <div className="container mx-auto px-8">
          <div className="mb-12">
            <h2 className="text-[32px] font-normal mb-8">Sobre</h2>
          </div>

          <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-3 lg:gap-12 lg:items-center lg:space-y-0">
            {/* Mobile: Single column text */}
            <div className="lg:hidden space-y-6">
              <p className="text-base leading-relaxed">
                Enquanto eu cursava nutrição, eu sempre via o emagrecimento e
                ganho muscular como consequência de um corpo saudável, e é assim
                que eu trabalho hoje. Realizando um tratamento de dentro pra
                fora, e ouvindo cada queixa do meu paciente, afinal somos
                humanos e cada detalhe importa, pois nossas emoções também
                influenciam em como comemos e nos comportamos.
              </p>
              <p className="text-base leading-relaxed">
                Sou formada em nutrição, e fiz pós graduação em praticas
                integrativas e complementares, ou seja hoje o meu trabalho vai
                além dos cardápios.
              </p>
              <p className="text-base leading-relaxed">
                Eu uso o poder dos chás, suplementações e outras práticas
                integrativas, como yoga e medicina ayurvédica, para trazer uma
                vida de qualidade, com sono adequado, redução de dores e até
                eliminação de condições crônicas como candidíase de repetição.
              </p>
              <p className="text-base leading-relaxed">
                Meu foco em mulheres se deu ao grande descaso que percebi ao
                longo da minha própria vida quando se tratava de saúde. Me
                sentia pouco ouvida e por muitas vezes busquei sozinha a solução
                para meus problemas, e isso não acontecia somente comigo, por
                isso passei a me dedicar às mulheres que querem ter uma vida de
                qualidade mas não tem apoio.
              </p>
            </div>

            {/* Desktop: Left Text */}
            <div className="hidden lg:block space-y-6">
              <p className="text-base leading-relaxed">
                Enquanto eu cursava nutrição, eu sempre via o emagrecimento e
                ganho muscular como consequência de um corpo saudável, e �� assim
                que eu trabalho hoje. Realizando um tratamento de dentro pra
                fora, e ouvindo cada queixa do meu paciente, afinal somos
                humanos e cada detalhe importa, pois nossas emoções também
                influenciam em como comemos e nos comportamos.
              </p>
              <p className="text-base leading-relaxed">
                Sou formada em nutrição, e fiz pós graduação em praticas
                integrativas e complementares, ou seja hoje o meu trabalho vai
                além dos cardápios.
              </p>
            </div>

            {/* Center Image - Hidden on mobile */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[405px] h-[451px] flex justify-center items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe5e3909c842b45ce9dfd2852340172fe%2Fbd71837e910b4cdab2efd801b03a906f?format=webp&width=800"
                  alt="Jaqueline Venancio"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop: Right Text */}
            <div className="hidden lg:block space-y-6">
              <p className="text-base leading-relaxed">
                Eu uso o poder dos chás, suplementações e outras práticas
                integrativas, como yoga e medicina ayurvédica, para trazer uma
                vida de qualidade, com sono adequado, redução de dores e até
                eliminação de condições crônicas como candidíase de repetição.
              </p>
              <p className="text-base leading-relaxed">
                Meu foco em mulheres se deu ao grande descaso que percebi ao
                longo da minha pr��pria vida quando se tratava de saúde. Me
                sentia pouco ouvida e por muitas vezes busquei sozinha a solução
                para meus problemas, e isso não acontecia somente comigo, por
                isso passei a me dedicar às mulheres que querem ter uma vida de
                qualidade mas não tem apoio.
              </p>
              <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] font-medium">
                Quer saber mais sobre como posso te ajudar?
              </button>
            </div>

            {/* Mobile: Button */}
            <div className="lg:hidden flex justify-center">
              <button className="bg-jaque-green text-white px-6 py-3 rounded-[20px] font-medium">
                Quer saber mais sobre como posso te ajudar?
              </button>
            </div>
          </div>
        </div>

        {/* Wave Separator to Services */}
        <div className="absolute -bottom-24 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            transform="scale(-1, 1)"
            className="w-full h-auto"
          >
            <rect width="1000" height="100" fill="#440F4C"></rect>
            <path
              fill="#F18C27"
              d="M1000 100H0V48c62.5 24 125 48 250 48 250 0 250-96 500-96 125 0 187.5 24 250 48v52z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services-tab"
        className="relative mt-24 pt-4 pb-20"
        style={{
          background: "linear-gradient(180deg, #F18C27 0%, #440F4C 62.06%)",
        }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-white  mb-12">
            Serviços
          </h2>

          <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
            {/* Atendimento Personalizado Card */}
            <div className="bg-white rounded-[20px] p-6 flex flex-col items-center text-center max-w-sm mx-auto lg:max-w-none">
              <div className="w-full h-[202px] lg:h-[312px] mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bcb57e5c493a7f8927f593b2d5222584f8fba27c?width=830"
                  alt="Atendimento personalizado"
                  className="w-full h-full object-cover rounded-[20px] border border-white"
                />
              </div>
              <h3 className="text-xl font-normal text-black  mb-4">
                Atendimento personalizado
              </h3>
              <p className="text-base text-black  mb-6">
                Você pode ter meu acompanhamento nutricional ou tirar suas
                dúvidas a respeito clicando aqui:
              </p>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120"
                alt="WhatsApp"
                className="w-15 h-15"
              />
            </div>

            {/* Yoga Card - Desktop */}
            <div className="hidden lg:flex bg-white rounded-[20px] p-6 flex-col items-center text-center">
              <div className="w-full h-[312px] mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/902e5ef4b13da15674d1c62eeb7b5d3be0e21787?width=830"
                  alt="Yoga"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-xl font-normal text-black  mb-4">Yoga</h3>
              <div className="flex items-end justify-center mb-6">
                <p className="text-base text-black  flex-1">
                  Além do acompanhamento nutricional, eu tamb��m ofereço aulas
                  de yoga relaxante, que auxilia os processos de compulsão
                  alimentar e também ajuda a ter mais consciência corporal, e
                  também controle emocional, as praticas podem ser online ou
                  presencial, clique aqui para saber
                </p>
                <span className="text-sm text-gray-500  ml-2">mais</span>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120"
                alt="WhatsApp"
                className="w-15 h-15"
              />
            </div>

            {/* Yoga Card - Mobile */}
            <div className="lg:hidden bg-white rounded-[20px] p-6 flex flex-col items-center text-center max-w-sm mx-auto">
              <div className="w-full h-[202px] mb-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/902e5ef4b13da15674d1c62eeb7b5d3be0e21787?width=830"
                  alt="Yoga"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              <h3 className="text-xl font-normal text-black mb-4">Yoga</h3>
              <div className="flex items-end justify-center mb-6">
                <p className="text-base text-black flex-1">
                  Além do acompanhamento nutricional, eu também ofereço aulas de
                  yoga relaxante, que auxilia os processos de compulsão
                  alimentar e também ajuda a ter mais consciência corporal, e
                  também controle emocional, as praticas podem ser online ou
                  presencial, clique aqui para saber
                </p>
                <span className="text-sm text-gray-500 ml-2">mais</span>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120"
                alt="WhatsApp"
                className="w-15 h-15"
              />
            </div>
          </div>
        </div>

        {/* Wave Separator to Testimonials */}
        <div className="absolute -bottom-24 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            transform="scale(-1, 1)"
            className="w-full h-auto"
          >
            <rect width="1000" height="100" fill="#440F4C"></rect>
            <path
              fill="#E5B179"
              d="M1000 100H0V48c62.5 24 125 48 250 48 250 0 250-96 500-96 125 0 187.5 24 250 48v52z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="ratings"
        className="relative mt-24 bg-jaque-beige pt-4 pb-20"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-black  mb-4">
            Avaliações
          </h2>
          <p className="text-xl text-black  mb-12">
            Veja alguns depoimentos de pacientes:
          </p>

          <div className="space-y-8 mb-12">
            {/* Testimonial 1 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black  mb-2">Thais Sales</h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                        fill="#F18C27"
                        stroke="#F18C27"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black  leading-relaxed">
                A melhor nutricionista que ja fui, como pessoa a cima do peso,
                não é somente a comida que faz mal e a Jaque entendi disso e
                ajuda a entender muitas coisas, ensina qual alimentação no
                momento faz bem, muito obrigada pelo ótimo atendimento. Perfeita
                e indico sempre!
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black  mb-2">
                  Oliveira Domingos Aguiar
                </h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                        fill="#F18C27"
                        stroke="#F18C27"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black  leading-relaxed">
                Nutricionista top! Me ajudou em meu propósito sem fazer dietas
                mirabolantes ou cortes extremos de alimentação. Ela acompanha de
                perto e tira todas às dúvidas de forma simples e de fácil
                compreensão.
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl text-black  mb-2">
                  Thais Miranda De Oliveira
                </h4>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                        fill="#F18C27"
                        stroke="#F18C27"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base text-black  leading-relaxed">
                Minha melhor nutricionista! Comprometida com a qualidade da
                alimentaç��o dos pacientes.Não passa dietas malucas. Tudo fácil
                de cumprir.
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-jaque-green text-black px-6 py-2 rounded-[20px] font-medium ">
              Ver mais
            </button>
            <button className="bg-jaque-orange text-white px-8 py-2 rounded-[20px] font-medium ">
              Avaliar
            </button>
          </div>
        </div>

        {/* Wave Separator to Contact */}
        <div className="hidden md:block absolute -bottom-24 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            transform="scale(-1, 1)"
            className="w-full h-auto"
          >
            <rect width="1000" height="100" fill="#E5B179"></rect>
            <path
              fill="#F5F5F5"
              d="M1000 100H0V48c62.5 24 125 48 250 48 250 0 250-96 500-96 125 0 187.5 24 250 48v52z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="reach-me"
        className="relative mt-0 md:mt-24 bg-jaque-gray pt-4 pb-20"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-[32px] font-normal text-black  mb-6 lg:mb-12">Contato</h2>

          <div className="flex flex-col space-y-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
            {/* Contact Form - Second on mobile, first on desktop */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-base text-black  mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white "
                  />
                </div>
                <div>
                  <label className="block text-base text-black  mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Digite seu telefone"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white "
                  />
                </div>
                <div>
                  <label className="block text-base text-black  mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu e-mail"
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white "
                  />
                </div>
                <div>
                  <label className="block text-base text-black  mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem"
                    rows={6}
                    className="w-full p-3 rounded-lg border border-jaque-orange bg-jaque-beige text-white placeholder-white  resize-none"
                  />
                </div>
                {/* Mobile Button */}
                <button
                  type="submit"
                  className="block md:hidden mx-auto rounded-[20px] flex items-center justify-center"
                  style={{
                    width: '167px',
                    height: '52px',
                    background: '#535353',
                    padding: '10px',
                    gap: '10px'
                  }}
                >
                  <span style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '200%',
                    color: 'white'
                  }}>
                    Enviar mensagem
                  </span>
                </button>

                {/* Desktop Button */}
                <button
                  type="submit"
                  className="hidden md:block bg-jaque-orange text-white px-6 py-3 rounded-[20px] font-medium"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* Contact Info - First on mobile, second on desktop */}
            <div className="order-1 lg:order-2 bg-white rounded-lg p-8 space-y-8 border border-jaque-orange lg:border-0 -mt-6 mb-12 lg:mt-0 lg:mb-0" style={{
              borderWidth: '1px',
              borderRadius: '10px'
            }}>
              <div className="flex flex-col items-center text-center space-y-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5H25C26.375 5 27.5 6.125 27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5C2.5 6.125 3.625 5 5 5Z"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.5 7.5L15 16.25L2.5 7.5"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base text-black ">
                  jaquevenancio.nutri@gmail.com
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4998 21.15V24.9C27.5012 25.2481 27.4299 25.5927 27.2904 25.9117C27.151 26.2307 26.9464 26.517 26.6899 26.7523C26.4334 26.9877 26.1305 27.1669 25.8007 27.2784C25.4709 27.3899 25.1215 27.4313 24.7748 27.4C20.9283 26.9821 17.2335 25.6677 13.9873 23.5625C10.9671 21.6433 8.40646 19.0827 6.48729 16.0625C4.37477 12.8015 3.0601 9.08874 2.64979 5.225C2.61856 4.87933 2.65964 4.53095 2.77042 4.20203C2.8812 3.87311 3.05926 3.57086 3.29325 3.31453C3.52725 3.05819 3.81205 2.85339 4.12953 2.71315C4.44702 2.57292 4.79022 2.50033 5.13729 2.5H8.88729C9.49393 2.49403 10.082 2.70885 10.542 3.10441C11.002 3.49998 11.3024 4.04931 11.3873 4.65C11.5456 5.85008 11.8391 7.02841 12.2623 8.1625C12.4305 8.6099 12.4669 9.09614 12.3672 9.5636C12.2675 10.0311 12.0359 10.4601 11.6998 10.8L10.1123 12.3875C11.8917 15.5169 14.4829 18.1081 17.6123 19.8875L19.1998 18.3C19.5397 17.9639 19.9687 17.7323 20.4362 17.6326C20.9037 17.5329 21.3899 17.5693 21.8373 17.7375C22.9714 18.1607 24.1497 18.4542 25.3498 18.6125C25.957 18.6982 26.5115 19.004 26.908 19.4719C27.3044 19.9397 27.515 20.537 27.4998 21.15Z"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base text-black ">(61) 98195-6980</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 7.5V27.5L10 22.5L20 27.5L28.75 22.5V2.5L20 7.5L10 2.5L1.25 7.5Z"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 2.5V22.5"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 7.5V27.5"
                    stroke="#F18C27"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="space-y-2">
                  <p className="text-base text-black ">
                    <span className="font-medium">Atendimentos online</span>{" "}
                    para brasileiros em qualquer lugar do mundo.
                  </p>
                  <p className="text-base text-black ">
                    <span className="font-medium">Atendimento presencial:</span>{" "}
                    Centro Clínico Life Gama, sala 519 - Setor central do gama
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
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5Z"
                        stroke="#F18C27"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z"
                        stroke="#F18C27"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mobile Social Media - Only visible on mobile */}
                <div className="block md:hidden mt-6">
                  <h4 className="text-lg font-medium text-black text-center mb-4">Redes Sociais</h4>
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://wa.me/5561981956980?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20um%20acompanhamento%20com%20voc%C3%AA."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120"
                        alt="WhatsApp"
                        className="w-12 h-12 hover:scale-110 transition-transform"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/nutrijaquevenancio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/bd0348beb0f459f88be491a3a30a548a7bd37d9f?width=120"
                        alt="Instagram"
                        className="w-12 h-12 hover:scale-110 transition-transform"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@Nutrijaquevenancio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/533aa04f9297eb4251dd0f6dffff772ffee89e2c?width=120"
                        alt="YouTube"
                        className="w-12 h-12 hover:scale-110 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Hidden on mobile */}
      <footer className="hidden md:block bg-jaque-purple py-12">
        <div className="container mx-auto px-8">
          <div className="flex items-center space-x-12">
            <h3 className="text-[32px] font-normal text-white ">
              Redes Sociais
            </h3>
            <div className="flex space-x-10">
              <a
                href="https://wa.me/5561981956980?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20um%20acompanhamento%20com%20voc%C3%AA."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/16f4e517cc5c9269844a4a0a80549011e06d6c8f?width=120"
                  alt="WhatsApp"
                  className="w-15 h-15 hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.instagram.com/nutrijaquevenancio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bd0348beb0f459f88be491a3a30a548a7bd37d9f?width=120"
                  alt="Instagram"
                  className="w-15 h-15 hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://www.youtube.com/@Nutrijaquevenancio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/533aa04f9297eb4251dd0f6dffff772ffee89e2c?width=120"
                  alt="YouTube"
                  className="w-15 h-15 hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Fixed WhatsApp Button */}
        <div className="hidden md:block fixed bottom-8 right-8 z-50">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            <g clipPath="url(#clip0_248_615)">
              <path
                d="M53.3427 28.4929C53.1626 42.2021 41.5961 53.1655 27.5083 52.9804C22.3114 52.9121 13.5 48.6862 13.5 48.6862L3 52.9804L7.39497 43C7.39497 43 2.2515 33.5075 2.32619 27.8226C2.50632 14.1135 14.0728 3.15006 28.1606 3.33516C42.2484 3.52026 53.5229 14.7838 53.3427 28.4929Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.8405 8.13168C42.577 2.8905 35.5765 0.00265915 28.1176 0C12.7479 0 0.239316 12.4382 0.233968 27.727C0.231294 32.6144 1.51612 37.3849 3.95607 41.5891L0 55.9592L14.7814 52.1034C18.8538 54.3132 23.4396 55.4765 28.1056 55.4779H28.1176C43.4846 55.4779 55.9947 43.0383 56 27.7495C56.0026 20.3399 53.1054 13.3742 47.8405 8.13301V8.13168ZM28.1176 50.7951H28.1083C23.9503 50.7939 19.8713 49.6822 16.3123 47.5828L15.466 47.083L6.69418 49.3711L9.0352 40.8658L8.48436 39.9936C6.16473 36.324 4.93873 32.0826 4.94141 27.7284C4.94676 15.0216 15.343 4.68276 28.1271 4.68276C34.3171 4.68542 40.1357 7.08531 44.5114 11.4423C48.8874 15.798 51.2952 21.5897 51.2926 27.7469C51.2871 40.4551 40.891 50.7939 28.1176 50.7939V50.7951ZM40.8294 33.5346C40.1329 33.1876 36.7077 31.5122 36.0685 31.281C35.4295 31.0495 34.9656 30.934 34.5016 31.6279C34.0377 32.3221 32.7021 33.8829 32.2957 34.3442C31.8892 34.8069 31.4827 34.8642 30.7862 34.517C30.0897 34.1701 27.8449 33.4388 25.183 31.0788C23.1121 29.2413 21.7135 26.9731 21.3072 26.279C20.9008 25.585 21.2644 25.2101 21.612 24.8657C21.9248 24.5546 22.3085 24.056 22.6574 23.6518C23.0065 23.2476 23.1215 22.9578 23.354 22.4964C23.5867 22.0337 23.4704 21.6296 23.2966 21.2825C23.1227 20.9355 21.7297 17.5251 21.1481 16.1384C20.5825 14.7875 20.0077 14.971 19.5812 14.9484C19.1747 14.9285 18.7108 14.9245 18.2456 14.9245C17.7803 14.9245 17.0262 15.0973 16.3872 15.7914C15.7481 16.4853 13.9485 18.1619 13.9485 21.571C13.9485 24.98 16.4447 28.2761 16.7936 28.7388C17.1425 29.2015 21.7068 36.1991 28.6952 39.2012C30.3571 39.9152 31.6552 40.342 32.6673 40.6611C34.3359 41.1889 35.8546 41.1145 37.0552 40.9363C38.3936 40.7369 41.1771 39.2597 41.7573 37.6416C42.3376 36.0235 42.3376 34.6354 42.1638 34.3469C41.99 34.0584 41.5248 33.8842 40.8282 33.5372L40.8294 33.5346Z"
                fill="#25D366"
              />
            </g>
            <defs>
              <clipPath id="clip0_248_615">
                <rect width="56" height="56" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </footer>
    </div>
  );
}
