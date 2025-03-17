import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DetailsChallengeProps {
  whatYouWillLearn: {
    topics: Array<{ title: string; description: string }>;
    description: string | null;
  };
  forWhoIsIndicated: {
    topics: Array<{ title: string; description: string }>;
    description: string | null;
  };
}

const DetailsChallenge: React.FC<DetailsChallengeProps> = ({
  whatYouWillLearn,
  forWhoIsIndicated,
}) => {
  return (
    <>
      <div className="flex flex-col w-full h-auto justify-center p-4 pl-10 pr-10 lg:pl-20 lg:pr-20 mt-10 bg-gradient-to-t from-black/80 to-transparent">
        <h1 className="text-base lg:text-2xl mt-4 text-white">
          {whatYouWillLearn.description}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-10 lg:ml-10 m-4">
            <div className="flex items-center">
            <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faUtensils}/>
            <div className="flex flex-col">
              <p className="text-base lg:text-xl underline text-white">{whatYouWillLearn.topics[0].title}</p>
              <p className="text-xs lg:text-sm">{whatYouWillLearn.topics[0].description}</p>
            </div>
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faDumbbell}/>
            <div className="flex flex-col">
              <p className="text-base lg:text-xl underline text-white">{whatYouWillLearn.topics[1].title}</p>
              <p className="text-xs lg:text-sm">{whatYouWillLearn.topics[1].description}</p>
            </div>
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faFilePdf}/>
            <div className="flex flex-col">
              <p className="text-base lg:text-xl underline text-white">{whatYouWillLearn.topics[2].title}</p>
              <p className="text-xs lg:text-sm ">{whatYouWillLearn.topics[2].description}</p>
            </div>
            </div>
        </div>
        <h1 className="text-base lg:text-2xl mt-4 text-white">
        &#10140; {forWhoIsIndicated.description} &#128293;&#128293;&#128293;
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-10 lg:ml-10 m-4">
        <div className="flex items-center">
        <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faHeart}/>
        <div className="flex flex-col">
              <p className="text-base lg:text-2xl underline text-white">{forWhoIsIndicated.topics[0].title}</p>
              <p className="text-xs lg:text-sm">{forWhoIsIndicated.topics[0].description}</p>
            </div>
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faFireFlameCurved}/>
            <div className="flex flex-col">
              <p className="text-base lg:text-xl underline text-white">{forWhoIsIndicated.topics[1].title}</p>
              <p className="text-xs lg:text-sm">{forWhoIsIndicated.topics[1].description}</p>
            </div>
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon className="text-3xl lg:text-5xl text-white p-4" icon={faPersonRunning}/>
            <div className="flex flex-col">
              <p className="text-base lg:text-xl underline text-white">{forWhoIsIndicated.topics[2].title}</p>
              <p className="text-xs lg:text-sm">{forWhoIsIndicated.topics[2].description}</p>
            </div>
            </div>
        </div>
        <a className="mt-4 mb-4 self-center animate-bounce"
                              href= "#"
                              target="_blank"
                            >
                              <button className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl">
                                ADQUIRA SUA MELHOR VERSÃO AGORA
                              </button>
                            </a>
                            <h1 className="text-2xl lg:text-4xl mt-4 text-white">Agora é a sua vez!</h1>
                            <p className="text-base lg:text-lg mt-4">Desafie-se por 21 dias e veja a transformação acontecer. Está pronto para mudar?</p>
                            <ul className="list-disc ml-10 mt-2">
                                <li>Treino com equipamento</li>
                                <li>Treinos sem equipamentos</li>
                                <li>Mais de 50 receitas saldáveis</li>
                            </ul>
                            <p className="text-base lg:text-lg mt-8">Inscreva-se <a className="text-white animate-pulse" href="#" target="_blank">agora</a> e comece sua jornada rumo a uma nova versão de você!</p>
      </div>
    </>
  );
};

export default DetailsChallenge;
