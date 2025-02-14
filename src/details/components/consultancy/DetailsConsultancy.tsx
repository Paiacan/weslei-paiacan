import ConsultancyPackages from "./ConsultancyPackages";
import consultancyImg from "../../../assets/img/consultancy_img.png"

const DetailsConsultancy: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-screen bg-black">
        <div className="hidden lg:flex  lg:flex-col bg-[url('assets/img/consultancy_img_background.png')] bg-cover bg-center bg-no-repeat justify-end">
        <img
        className="absolute w-[40%]"
          src={consultancyImg}
          alt="consultancy-img"
        />
        </div>
        <div className="flex flex-col col-span-2 w-full h-full justify-center items-center overflow-y-scroll pt-10">
          <h1 className="text-3xl text-center mt-10">
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
        </div>
      </div>
    </>
  );
};

export default DetailsConsultancy;
