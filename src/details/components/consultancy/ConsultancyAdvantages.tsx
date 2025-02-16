import quoteMark from "../../../assets/img/quote_mark.png"

const ConsultancyAdvantages: React.FC = () => {
    return (
        <>
        <div className="w-full flex flex-col lg:flex-row bg-[linear-gradient(black,white,#f78f00)] items-center justify-around mt-10">
            <div className="flex flex-col w-full lg:w-[40%] justify-around p-4 text-center">
            <div className="flex flex-col bg-black w-full h-30 lg:w-[90%] lg:h-40 aspect-square rounded-2xl justify-center items-center text-sm lg:text-lg p-4">
                <h2 className="text-white font-abril-fatface text-xl lg:text-3xl">FLEXIBILIDADE</h2>
                <h3 className="text-sm">Treine quando e onde quiser, com planos que se encaixam na sua rotina.</h3>
            </div>
            <div className="flex flex-col bg-black w-full h-30 lg:w-[90%] lg:h-40 aspect-square rounded-2xl justify-center items-center text-sm lg:text-lg p-4 mt-4">
                <h2 className="text-white font-abril-fatface text-xl lg:text-3xl">ATENÇÃO PERSONALIZADA</h2>
                <h3 className="text-sm">TREINOS SOB MEDIDA COM ACOMPANHAMENTO CONTÍNUO.</h3>
            </div>
            <div className="flex flex-col bg-black w-full h-30 lg:w-[90%] lg:h-40 aspect-square rounded-2xl justify-center items-center text-sm lg:text-lg p-4 mt-4">
                <h2 className="text-white font-abril-fatface text-xl lg:text-3xl">ACESSIBILIDADE</h2>
                <h3 className="text-sm">SEM SAIR DE CASA, VOCÊ TERÁ ACESSO A TREINOS DE QUALIDADE COM SUPORTE 24/7.</h3>
            </div>
            <div className="flex flex-col bg-black w-full h-30 lg:w-[90%] lg:h-40 aspect-square rounded-2xl justify-center items-center text-sm lg:text-lg p-4 mt-4">
                <h2 className="text-white font-abril-fatface text-xl lg:text-3xl">EXPERTISE E EXPERIÊNCIA</h2>
                <h3 className="text-sm">COM ANOS DE EXPERIÊNCIA, EU OFEREÇO TREINAMENTOS BASEADOS EM RESULTADOS COMPROVADOS.</h3>
            </div>
            </div>
            
            <div className="flex flex-col h-full w-full lg:w-[60%] items-center bg-primary font-poppins text-justify text-sm lg:text-base p-4 justify-around">
                <h2 className="text-xl lg:text-3xl mt-4 font-abril-fatface text-center">DEPOIMENTOS DE CLIENTES</h2>
                <div className="relative text-black">
                    <img className="absolute top-0 left-0" src={quoteMark} alt="quote-mark-decorantion"/>
                    <p className="ml-10 mr-10 mt-8 mb-4">COMECEI A CONSULTORIA COM O OBJETIVO DE GANHAR MASSA MUSCULAR E PERDER ALGUNS QUILOS. APÓS 3 MESES JÁ VEJOS OS MÚSCULOS MAIS DEFINIDOS E A GORDURA DIMINUINDO ALÉM DE ME SENTIR MAIS DISPOSTO E MOTIVADO!</p>
                    <p className="text-center font-bold">CARLOS, 29 ANOS</p>
                    <img className="absolute bottom-0 right-0 rotate-180" src={quoteMark} alt="quote-mark-decorantion"/>
                </div>
                <div className="relative text-black">
                    <img className="absolute top-0 left-0" src={quoteMark} alt="quote-mark-decorantion"/>
                    <p className="ml-10 mr-10 mt-8 mb-4">O MELHOR DE TUDO É O ACOMPANHAMENTO CONTÍNUO. SEMPRE RECEBO FEEDBACKS DETALHADOS E AJUSTO MEUS TREINOS CONFORME NECESSÁRIO. ME SINTO MOTIVADA A CONTINUAR NO CAMINHO CERTO.</p>
                    <p className="text-center font-bold">BRUNA, 25 ANOS</p>
                    <img className="absolute bottom-0 right-0 rotate-180" src={quoteMark} alt="quote-mark-decorantion"/>
                </div>
                <div className="relative text-black">
                    <img className="absolute top-0 left-0" src={quoteMark} alt="quote-mark-decorantion"/>
                    <p className="ml-10 mr-10 mt-8 mb-4">EU NUNCA IMAGINEI QUE CONSEGUIRIA PERDER 10KG EM 2 MESES DE FORMA SAUDÁVEL. A CONSULTORIA FOI FUNDAMENTAL PARA MEU EMAGRECIMENTO!</p>
                    <p className="text-center font-bold">LUANA, 34 ANOS</p>
                    <img className="absolute bottom-0 right-0 rotate-180" src={quoteMark} alt="quote-mark-decorantion"/>
                </div>
            </div>
        </div>
        </>
    );
};

export default ConsultancyAdvantages;