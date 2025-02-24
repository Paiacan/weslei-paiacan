import { EXTERNAL_LINKS } from "../../utils/constants";

interface DetailVideoProps {
  videoPath: string | null;
  title: string | null;
  description: string | null;
  isConsultancy: boolean;
}

const DetailsVideo: React.FC<DetailVideoProps> = ({
  videoPath,
  title,
  description,
  isConsultancy
}) => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen items-center">
        <div className="flex flex-col w-full text-center justify-center items-center pl-10 pr-10 lg:pl-20 lg:pr-20">
        <h1 className="text-lg lg:text-2xl">{title}</h1>
        <h2 className="text-base lg:text-xl">{description}</h2>
        </div>
        <iframe
          className="w-[90%] h-[80%] lg:w-[60%] lg:h-[60%] mt-10"
          src={videoPath ?? ""}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <a className="mt-4"
                      href={isConsultancy ? EXTERNAL_LINKS.WHATSAPP : "#"}
                      target="_blank"
                    >
                      <button className="cursor-pointer w-auto bg-primary font-arimo mt-5 p-5 rounded-full text-lg lg:text-2xl">
                        {isConsultancy ? "CONTATE-ME AGORA" : "ADQUIRA O SEU AGORA"}
                      </button>
                    </a>
      </div>
    </>
  );
};

export default DetailsVideo;
