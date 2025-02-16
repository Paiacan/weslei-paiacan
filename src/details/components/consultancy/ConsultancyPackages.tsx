import { EXTERNAL_LINKS } from "../../../utils/constants";

const ConsultancyPackages: React.FC = () => {
  const PACKAGES = {
    INITIAL_PACKAGE: "PACOTE INICIAL",
    MONTHLY_PACKAGE: "PACOTE MENSAL",
    PREMIUM_PACKAGE: "PACOTE PREMIUM"
  }

  const whatsappMessage = (packageType: string) => `${EXTERNAL_LINKS.WHATSAPP} + "?text=Olá, tenho interesse no ${packageType} da consultoria personalizada.`;
  return (
    <>
      <div className="flex flex-col justify-around w-full h-full text-center">
          <div className="flex flex-col lg:flex-row w-full h-full items-center justify-around text-white">
            <a href={EXTERNAL_LINKS.WHATSAPP + whatsappMessage(PACKAGES.INITIAL_PACKAGE)} target="_blank">
              <div className="flex consultancy-package w-50 h-20 lg:w-80 lg:h-40 aspect-square rounded-2xl justify-center items-center cursor-pointer text-sm lg:text-lg consultancy-package-font-size-transition hover:text-lg lg:hover:text-xl">
                <h2>{PACKAGES.INITIAL_PACKAGE}</h2>
              </div>
            </a>
            <ul className="list-disc w-[80%] lg:w-[30%] text-sm lg:text-lg list-inside text-left">
              <li>AVALIAÇÃO</li>
              <li>PLANO DE TREINO PERSONALIZADO</li>
            </ul>
            <h2 className="text-2xl lg:text-4xl">R$ 39,90</h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full items-center justify-around text-white mt-5">
            <a href={EXTERNAL_LINKS.WHATSAPP + whatsappMessage(PACKAGES.MONTHLY_PACKAGE)} target="_blank">
              <div className="flex w-50 h-20 lg:w-80 lg:h-40 aspect-square rounded-2xl justify-center items-center cursor-pointer consultancy-package text-sm lg:text-lg consultancy-package-font-size-transition hover:text-lg lg:hover:text-xl">
                <h2>{PACKAGES.MONTHLY_PACKAGE}</h2>
              </div>
            </a>
            <ul className="list-disc w-[80%] lg:w-[30%] text-sm lg:text-base text-left list-inside">
              <li>ACOMPANHAMENTO <span className="text-[var(--on-primary-color)]">SEMANAL</span></li>
              <li>AJUSTES NOS TREINOS</li>
              <li>DICAS DE ALIMENTAÇÃO</li>
            </ul>
            <h2 className="text-2xl lg:text-4xl">R$ 89,90</h2>
          </div>
          <div className="flex flex-col lg:flex-row w-full h-full items-center justify-around text-white mt-5">
            <a href={EXTERNAL_LINKS.WHATSAPP + whatsappMessage(PACKAGES.PREMIUM_PACKAGE)} target="_blank">
              <div className="flex w-50 h-20 lg:w-80 lg:h-40 aspect-square rounded-2xl justify-center items-center cursor-pointer consultancy-package text-sm lg:text-lg consultancy-package-font-size-transition hover:text-lg lg:hover:text-xl">
                <h2>{PACKAGES.PREMIUM_PACKAGE}</h2>
              </div>
            </a>
            <ul className="list-disc w-[80%] lg:w-[30%] text-sm lg:text-lg list-inside text-left">
              <li>ACOMPANHAMENTO <span className="text-[var(--on-primary-color)]">DIÁRIO</span></li>
              <li>PLANO NUTRICIONAL PERSONALIZADO</li>
              <li>SUPORTE 24/7</li>
            </ul>
            <h2 className="text-2xl lg:text-4xl">R$ 189,90</h2>
          </div>
      </div>
    </>
  );
};

export default ConsultancyPackages;
