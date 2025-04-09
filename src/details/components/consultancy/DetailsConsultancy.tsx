import ConsultancyPackages from "./ConsultancyPackages";
import consultancyImg from "../../../assets/img/consultancy_img.png"
import ConsultancyAdvantages from "./ConsultancyAdvantages";
import ConsultancyMethod from "./ConsultancyMethod";

const DetailsConsultancy: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full w-full bg-black overflow-hidden">
        <div className="hidden lg:flex  lg:flex-col bg-[url('assets/img/consultancy_img_background.webp')] bg-cover bg-center bg-no-repeat justify-end overflow-y-hidden">
        <img
        className="absolute w-[40%]"
          src={consultancyImg}
          alt="consultancy-img"
        />
        </div>
        <div className="flex flex-col col-span-2 w-full h-screen justify-start items-center overflow-y-auto pt-20 lg:pt-0">
          <h1 className="text-2xl text-center lg:mt-20">
            Transforme seu Corpo com a Consultoria Online de Musculação:
            Hipertrofia ou Perda de Peso
          </h1>
          <h2 className="text-xl text-center mt-2">
            Está pronto para conquistar o corpo dos seus sonhos? &#128170;
          </h2>
          <p className="text-sm text-justify mt-5 mb-5 pl-4 pr-4 text-white">
            Se você quer <strong>ganhar massa muscular</strong> e perder gordura de forma rápida,
            saudável e sustentável, você está no lugar certo! A minha
            Consultoria Online de Musculação foi feita especialmente para quem
            busca resultados reais, com treinos personalizados e acompanhamento
            contínuo, no seu ritmo e no conforto da sua casa ou na academia.
          </p>
          <ConsultancyPackages />
          <ConsultancyAdvantages/>
          <ConsultancyMethod/>
        </div>
      </div>
    </>
  );
};

export default DetailsConsultancy;
