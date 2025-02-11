import Accordion from "./Accordion";

interface DetailsTopicsProps {
    title: string;
    whatYouWillLearn: {
      topics: Array<{ title: string; description: string }>;
      description: string | null;
    };
    forWhoIsIndicated: {
      topics: Array<{ title: string; description: string }>;
      description: string | null
    };
}

const DetailsTopics: React.FC<DetailsTopicsProps> = ({title, whatYouWillLearn, forWhoIsIndicated}) => {
  console.log(forWhoIsIndicated);
  return (
    <>
      <div className="relative h-screen">
      <div
          className="absolute inset-0 bg-[url('assets/img/background.jpg')] bg-cover bg-center filter blur-sm"
        ></div>
        <div className="relative z-10 flex flex-col lg:flex-row w-screen h-screen justify-center items-center">
        <div className="flex flex-col h-auto w-[80%] lg:h-[80%] lg:w-1/4 bg-primary items-center">
          <h2 className="m-4">O QUE VOCÊ IRÁ APRENDER COM O EBOOK {title}</h2>
          <Accordion title={whatYouWillLearn?.topics[0].title} description={whatYouWillLearn?.topics[0].description}/>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default DetailsTopics;
