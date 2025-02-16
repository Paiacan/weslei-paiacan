const ConsultancyMethod: React.FC = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row bg-black justify-around items-center">
            <div className="w-2/3 flex flex-col justify-center ml-4 mt-4">
                <h2 className="text-xl lg:text-2xl text-white text-center">COMO FUNCIONA A CONSULTORIA ONLINE?</h2>
                <h3>1. AVALIAÇÃO INICIAL</h3>
                <p className="text-white text-justify">NA PRIMEIRA ETAPA FAREMOS UMA AVALIAÇÃO COMPLETA DO SEU HISTÓRICO DE TREINO, LIMITAÇÕES, OBJETIVOS E PREFERÊNCIAS. ISSO NOS AJUDARÁ A CRIAR UM PLANO 100% PERSONALIZADO PARA VOCÊ.</p>
                <h3 className="mt-4">2. PLANO DE TREINAMENTO PERSONALIZADO</h3>
                <p className="text-white text-justify">APÓS A AVALIAÇÃO VOCÊ RECEBERÁ UM PLANO DE TREINO ADAPTADO AOS SEUS OBJETIVOS: HIPERTROFIA OU PERDA DE PESO. O PLANO PODE SER FEITO PARA A ACADEMIA OU PARA TREINOS EM CASA, COM VÍDEOS DEMONSTRATIVOS DOS EXERCÍCIOS E INSTRUÇÕES DETALHADAS.</p>
                <h3 className="mt-4">3. ACOMPANHAMENTO CONTÍNUO</h3>
                <p className="text-white text-justify">NADA DE FICAR SOZINO! EU ESTAREI DISPONÍVEL PARA RESPONDER SUAS DÚVIDAS, AJUSTAR TREINOS CONFORME NECESSÁRIO E MONITORAR SEU PROGRESSO DE PERTO, COM FEEDBACK SEMANAL.</p>
                <h3 className="mt-4">4. SUPORTE MOTIVACIONAL E EDUCACIONAL</h3>
                <p className="text-white text-justify">VOCÊ VAI TER ACESSO A DICAS CONSTANTES DE NUTRIÇÃO, RECUPERAÇÃO E MOTIVAÇÃOPARA MANTER-SE NO FOCO E ALCANÇAR SEUS OBJETIVOS SEM PERDER O ÂNIMO!</p>
            </div>
            <div className="w-1/3 flex flex-col justify-center items-center text-center">
            <div className="flex bg-primary w-50 h-20 lg:w-80 lg:h-30 aspect-square rounded-2xl justify-center items-center text-xs lg:text-lg mt-4">
                <h2>PLANO PERSONALIZADO</h2>
              </div>
              <div className="flex bg-primary w-50 h-20 lg:w-80 lg:h-30 aspect-square rounded-2xl justify-center items-center text-xs lg:text-lg mt-4">
                <h2>ACOMPANHAMENTO NUTRICIONAL</h2>
              </div>
              <div className="flex bg-primary w-50 h-20 lg:w-80 lg:h-30 aspect-square rounded-2xl justify-center items-center text-xs lg:text-lg mt-4">
                <h2>TREINOS SEMANAIS</h2>
              </div>
              <div className="flex bg-primary w-50 h-20 lg:w-80 lg:h-30 aspect-square rounded-2xl justify-center items-center text-xs lg:text-lg mt-4">
                <h2>SUPORTE DIRETO</h2>
              </div>
              <div className="flex bg-primary w-50 h-20 lg:w-80 lg:h-30 aspect-square rounded-2xl justify-center items-center text-xs lg:text-lg mt-4 mb-10">
                <h2>CONTEÚDO EXCLUSIVO</h2>
              </div>
            </div>
        </div>
        </>
    );
};

export default ConsultancyMethod;
