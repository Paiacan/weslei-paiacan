import cardBackground1 from "../assets/img/card_background_1.png"
import cardBackground2 from "../assets/img/card_background_2.png"
import cardBackground3 from "../assets/img/card_background_3.png"
import cardBackground4 from "../assets/img/card_background_4.png"
import cardBackground5 from "../assets/img/card_background_5.png"
import cardBackground6 from "../assets/img/card_background_6.png"

export interface Product {
    id: number;
    title: string;
    description: string | null;
    videoPath: string | null;
    imagePath: string;
    price: number;
    whatYouWillLearn: {
      topics: Array<{ title: string; description: string }>;
      description: string | null;
    };
    forWhoIsIndicated: {
      topics: Array<{ title: string; description: string }>;
      description: string | null
    };
    isConsultancy: boolean;
  }

const products: Product[] = [
    {
        id: 1,
        title: "Manual Para Musculação",
        description: "Transforme seu treino com o Manual Completo de Musculação – O Guia Oficial para resultados rápidos e consistentes!",
        videoPath: "https://www.youtube.com/embed/2JskNIMdMU4?si=N8RrAIWWTrh87oJq",
        imagePath: cardBackground1,
        price: 19.90,
        whatYouWillLearn: {
            topics: [
            {
                title: "Execução Perfeita dos Exercícios: Técnicas e Passo a Passo",
                description: "Aprenda como executar cada exercício corretamente para garantir que seus músculos sejam trabalhados de forma eficiente e segura.Quer garantir que seus treinos sejam 100% eficientes? O Manual de Exercícios de Musculação vai te ensinar, de forma detalhada, a executar cada exercício corretamente. Nada de erros que comprometem seus resultados!"
            },
            {
                title: "Evite os Erros Comuns que Prejudicam Seus Resultados",
                description: "Identifique e corrija os erros mais comuns cometidos durante os treinos para evitar lesões e estagnação.Não deixe os erros sabotarem seus resultados! Com o Anual de Exercícios, você vai aprender os erros mais comuns que comprometem o progresso e como corrigi-los para treinar de forma mais eficaz e segura."
            },
            {
                title: "Diversificação de Exercícios para Resultados Consistentes",
                description: "Varie seus treinos com novos exercícios que desafiam o corpo e estimulam o crescimento muscular contínuo.Chega de treinos repetitivos! O manual de Exercícios de Musculação te ensina a diversificar os exercícios para manter os músculos sempre em crescimento e evitar a acomodação nos treinos."
            },
            {
                title: "Ferramenta essencial",
                description: "O Manual de Exercícios de Musculação é uma ferramenta essencial para quem deseja alcançar seus objetivos de forma segura e eficiente. Ao compreender a execução correta dos exercícios e evitar os erros mais comuns, você otimiza seus treinos, melhora seu desempenho e potencializa os resultados. Seja você iniciante ou avançado, esse manual será seu aliado na jornada de construção de um corpo mais forte, saudável e bem definido."
            },
            {
                title: "Acesso a um Guia Completo",
                description: "O eBook traz uma abordagem passo a passo, com explicações detalhadas de cada exercício, adaptados a diferentes níveis. Não importa se você é iniciante ou já tem experiência – aqui você vai aprender a executar os exercícios com perfeição!"
            }
        ],
        description: "Se você está começando a sua jornada na musculação, este eBook é perfeito para você. Ele fornece explicações claras sobre como realizar os exercícios corretamente, ajudando a construir uma base sólida desde o início. Com ele, você aprenderá a evitar os erros mais comuns e a executar os movimentos de maneira segura e eficiente."
    },
        forWhoIsIndicated: {
            topics: [
            {
                title: "Praticantes de Musculação que Buscam Melhorar a Técnica",
                description: "Se você já pratica musculação, mas sente que seus resultados não estão como gostaria, o eBook vai te ajudar a aperfeiçoar a execução dos exercícios. Você aprenderá a identificar e corrigir erros na técnica, o que levará a um treino mais eficaz e progressos mais rápidos."
            },
            {
                title: "Pessoas Interessadas em Prevenir Lesões",
                description: "Executar os exercícios de forma incorreta pode aumentar o risco de lesões. Este eBook é uma excelente ferramenta para quem deseja treinar de maneira mais segura, aprendendo a biomecânica correta de cada movimento, evitando lesões e garantindo um treino duradouro."
            },
        ],
        description: "Recomendamos este eBook para quem deseja aprimorar seus treinos de musculação, com foco na execução correta dos exercícios e na prevenção de lesões. Ideal para iniciantes e praticantes mais experientes, o guia traz explicações detalhadas sobre cada movimento, dicas sobre a biomecânica e correções dos erros mais comuns. Ao seguir as orientações do eBook, você otimiza seus resultados, treina com mais segurança e acelera o progresso em direção aos seus objetivos."
    },
    isConsultancy: false
    },
    {
        id: 2,
        title: "Fichas de Treino Completo",
        description: "Transformação em 8 Semanas: Ficha de Treino Completa com Sugestões de Treinos e Dias Planejados",
        videoPath: null,
        imagePath: cardBackground2,
        price: 19.90,
        whatYouWillLearn: {
            topics: [
            {
                title: "Como Organizar seu Treino para 8 Semanas",
                description: "Aprenda a estruturar seu plano de treino semanal para maximizar os resultados, com dias de treino planejados e descanso adequado.<p/>"
            },
            {
                title: "Plano de Treino Personalizado",
                description: "Entenda como adaptar as fichas de treino de acordo com seu nível de condicionamento físico, seja iniciante, intermediário ou avançado."
            },
            {
                title: "Importância do Descanso e Recuperação",
                description: "Saiba como o descanso entre os treinos é fundamental para o crescimento muscular e como planejar os dias de descanso de forma estratégica."
            },
            {
                title: "Treinos para Diferentes Grupos Musculares",
                description: "Compreenda a importância de trabalhar todos os grupos musculares de forma equilibrada para um desenvolvimento físico harmônico."
            },
            {
                title: "Exercícios Essenciais para Hipertrofia",
                description: "Conheça os exercícios mais eficazes para aumentar a massa muscular e como executá-los corretamente para evitar lesões."
            }
        ],
        description: "Comprar as fichas de treino de musculação oferece um plano estruturado de 8 semanas, otimizado para maximizar seus ganhos musculares. Com treinos bem definidos, você evita a confusão e alcança resultados de forma mais eficiente. As fichas também garantem a execução correta dos exercícios, prevenindo lesões. Além disso, ajudam a manter a motivação e o foco, ajustando os treinos conforme seu progresso. Se você busca transformar seu corpo com um treino prático e eficaz, essa é a escolha certa!"
    },
        forWhoIsIndicated: {
            topics: [
            {
                title: "Iniciantes em Musculação",
                description: "As fichas de treino oferecem um guia passo a passo para quem está começando, ajudando a estabelecer uma base sólida e evitar erros comuns."
            },
            {
                title: "Pessoas com Pouco Tempo para Treinar",
                description: "Os treinos são organizados de forma eficiente, permitindo que você maximize os resultados mesmo com uma rotina apertada."
            },
            {
                title: "Quem Busca Resultados Rápidos e Visíveis",
                description: "A estrutura de 8 semanas oferece um plano progressivo que acelera os ganhos musculares e ajuda a atingir objetivos mais rapidamente."
            },
            {
                title: "Indivíduos que Querem Evitar lesões",
                description: "Com a orientação sobre execução correta dos exercícios e a importância do descanso, as fichas ajudam a prevenir lesões durante os treinos."
            },
            {
                title: "Atletas Intermediários e Avançados",
                description: "Para quem já tem experiência, as fichas oferecem variações e desafios adicionais, ajudando a superar platôs e continuar a progressão."
            },
            {
                title: "Quem Prefere Treinar com Plano Estruturado",
                description: "Com um treino bem planejado e com foco nos objetivos, você elimina a dúvida sobre o que fazer a cada treino, garantindo mais foco e eficiência."
            }
        ],
        description: "Transforme seus treinos com nossas fichas personalizadas e ilustradas, criadas para facilitar o seu entendimento e garantir resultados rápidos! Com um plano de 8 semanas, você terá um guia claro e eficaz, com exercícios bem explicados e ilustrações, ideal para qualquer nível. Não perca tempo! Adquira já sua ficha de treino e comece a alcançar seus objetivos de forma prática e sem complicação."
    },
    isConsultancy: false
    }, 
    {
        id: 3,
        title: "Fichas de Treino - Feminino",
        description: "PowerFit: Treino Feminino Completo - 2 Meses de Protocolo para Intermediário e Avançado",
        videoPath: null,
        imagePath: cardBackground3,
        price: 19.90,
        whatYouWillLearn: {
            topics: [
                {
                    title: "Estrutura de Treino para 2 Meses",
                    description: "Aprenda a seguir um plano bem estruturado com protocolos de treino progressivos (ABC, ABCD, ABCDE, ABCDEF) que garantem evolução contínua durante 2 meses."
                },
                {
                    title: "Exercícios Focados nas Necessidades Femininas",
                    description: "As fichas são projetadas para trabalhar músculos específicos que costumam ser prioritários para o corpo feminino, como glúteos, pernas e abdômen."
                },
                {
                    title: "Treinos Ilustrados para Melhor Compreensão",
                    description: "Cada exercício é ilustrado de forma clara, facilitando a execução correta e evitando lesões, mesmo para quem não tem experiência com musculação."
                },
                {
                    title: "Nível Intermediário/Avançado",
                    description: "As fichas são adaptadas para mulheres com experiência no treino, oferecendo desafios progressivos para maximizar os resultados e evitar a estagnação."
                },
                {
                    title: "Planejamento de Dias de Treino",
                    description: "Aprenda como organizar seus treinos ao longo da semana com os protocolos ABC, ABCD, ABCDE e ABCDEF, garantindo descanso adequado e aumento de intensidade."
                },
                {
                    title: "Técnicas e Dicas para Resultados Rápidos",
                    description: "Receba orientações sobre como otimizar a execução dos exercícios, ajustar cargas e alcançar resultados mais rápidos e eficazes."
                },
                {
                    title: "Aumento de Força e Definição Muscular",
                    description: "Descubra como os treinos são pensados para melhorar tanto a força quanto a definição muscular, proporcionando um corpo tonificado e saudável."
                },
                {
                    title: "Adaptação Progressiva de Intensidade",
                    description: "À medida que sua força aumenta, você aprenderá a aumentar a intensidade dos treinos para continuar desafiando seu corpo e promovendo o crescimento muscular."
                },
                {
                    title: "Exercícios para Todos os Grupos Musculares",
                    description: "As fichas abrangem um treino completo, trabalhando todos os grupos musculares de forma equilibrada, para um corpo harmonioso e forte."
                },
                {
                    title: "Motivação e Organização para Resultados Duradouros",
                    description: "Com um plano organizado e claro, você terá a motivação necessária para seguir o treino até o fim e alcançar seus objetivos, sem perder o foco."
                }
            ],
            description: ""
        },
        forWhoIsIndicated: {
            topics: [
                {
                    title: "Plano de Treino Estruturado e Progressivo",
                    description: "As fichas oferecem um plano de 2 meses com protocolos progressivos (ABC, ABCD, ABCDE, ABCDEF), garantindo que seu treino evolua ao longo do tempo, mantendo o desafio e os ganhos constantes."
                },
                {
                    title: "Foco no Desenvolvimento Muscular Feminino",
                    description: "Com exercícios adaptados às necessidades do corpo feminino, as fichas são ideais para quem busca tonificação, definição muscular e fortalecimento, com ênfase em áreas como glúteos, pernas, abdômen e costas."
                },
                {
                    title: "Treinos Ilustrados para Melhor Execução",
                    description: "Cada exercício é ilustrado de forma clara, tornando fácil a compreensão e a execução correta, o que reduz o risco de lesões e melhora o desempenho no treino."
                },
                {
                    title: "Ajuste para Níveis Intermediário e Avançado",
                    description: "As fichas são criadas para mulheres que já têm experiência em musculação, oferecendo treinos desafiadores que estimulam o crescimento muscular e ajudam a evitar a estagnação."
                },
                {
                    title: "Organização de Dias de Treino",
                    description: "A estrutura de dias de treino (ABC, ABCD, ABCDE e ABCDEF) ajuda a equilibrar o esforço e o descanso, garantindo um plano eficaz que otimiza os resultados e promove o descanso adequado."
                },
                {
                    title: "Treinos Focados em Definição e Força",
                    description: "As fichas são desenhadas para melhorar tanto a força quanto a definição muscular, oferecendo treinos completos para tonificar o corpo e obter uma silhueta mais firme e forte."
                },
                {
                    title: "Desafios Progressivos para Superar Limites",
                    description: "Com a progressão gradual de intensidade, as fichas mantêm seus músculos em constante adaptação, garantindo que você continue a alcançar novos resultados de forma eficiente."
                },
                {
                    title: "Resultados Visíveis e Rápidos",
                    description: "Com treinos bem planejados, você verá uma evolução rápida na definição muscular e resistência, alcançando seus objetivos de forma prática e eficaz."
                },
                {
                    title: "Motivação e Disciplina no Treino",
                    description: "As fichas de treino proporcionam um plano claro e objetivos bem definidos, ajudando a manter o foco e a motivação, o que é essencial para o sucesso a longo prazo."
                },
                {
                    title: "Ideal para Treino em Casa ou na Academia",
                    description: "As fichas podem ser seguidas em qualquer ambiente, seja em casa ou na academia, oferecendo flexibilidade para treinar onde e quando for mais conveniente para você."
                }
            ],
            description: "Esses benefícios destacam como as fichas de treino femininas são uma excelente ferramenta para alcançar resultados rápidos e eficazes, com treinos bem estruturados e adaptáveis ao seu nível e objetivos."
        },
        isConsultancy: false
    },
    {
        id: 4,
        title: "Fichas de Treino - Masculino",
        description: "PowerFit: Treino Masculino Completo - 2 Meses de Protocolo para Intermediário e Avançado",
        videoPath: null,
        imagePath: cardBackground4,
        price: 19.90,
        whatYouWillLearn: {
            topics: [
                {
                    title: "Estrutura de Treino para 2 Meses",
                    description: "Siga um plano estruturado com protocolos de treino progressivos (ABC, ABCD, ABCDE, ABCDEF), garantindo evolução constante ao longo de 2 meses."
                },
                {
                    title: "Exercícios Focados no Desenvolvimento Masculino",
                    description: "As planilhas são desenvolvidas para atender às necessidades masculinas, com foco em aumento de força, massa muscular e definição, principalmente em áreas como peito, ombros, costas e pernas."
                },
                {
                    title: "Treinos Ilustrados para Maior Clareza",
                    description: "Cada exercício é ilustrado, facilitando a execução correta e evitando erros que podem levar a lesões, ideal tanto para iniciantes quanto para praticantes mais experientes."
                },
                {
                    title: "Nível Intermediário/Avançado",
                    description: "As planilhas são pensadas para quem já possui alguma experiência, oferecendo treinos desafiadores que estimulam o crescimento muscular e a superação de limites."
                },
                {
                    title: "Planejamento de Dias de Treino Eficiente",
                    description: "Organize seu treinamento semanal com os protocolos ABC, ABCD, ABCDE e ABCDEF, garantindo uma boa distribuição entre descanso e intensidade para maximizar os resultados."
                },
                {
                    title: "Técnicas e Estratégias para Aumentar o Desempenho",
                    description: "Descubra como otimizar a execução dos exercícios, ajustar as cargas e aplicar estratégias que aceleram os ganhos de força e hipertrofia muscular."
                },
                {
                    title: "Aumento de Força e Massa Muscular",
                    description: "Fique mais forte e construa músculos de forma eficiente, com treinos voltados para aumentar a massa muscular em todos os grupos musculares principais."
                },
                {
                    title: "Adaptação Progressiva de Intensidade",
                    description: "Aprenda a aumentar gradualmente a intensidade do treino à medida que você se torna mais forte, garantindo que seus músculos continuem sendo desafiados."
                },
                {
                    title: "Exercícios para Todos os Grupos Musculares",
                    description: "As planilhas incluem treinos completos para trabalhar todos os grupos musculares, proporcionando um desenvolvimento equilibrado e simétrico."
                },
                {
                    title: "Motivação e Disciplina para Resultados Duradouros",
                    description: "Com um plano bem definido e progressivo, você se manterá motivado e disciplinado, alcançando resultados sólidos e duradouros com consistência."
                }
            ],
            description: "Esses tópicos mostram como as planilhas de treino de musculação para homens são projetadas para alcançar um desenvolvimento completo e eficiente, focando em ganhos de força, definição e massa muscular, com um plano claro e prático para resultados rápidos e duradouros."
        },
        forWhoIsIndicated: {
            topics: [
                {
                    title: "Plano de Treino Estruturado e Progressivo",
                    description: "As fichas oferecem um plano de 2 meses com protocolos progressivos (ABC, ABCD, ABCDE, ABCDEF), garantindo que seu treino evolua com o tempo, mantendo o desafio e os ganhos constantes."
                },
                {
                    title: "Foco no Desenvolvimento Muscular Masculino",
                    description: "Com exercícios específicos para homens, as fichas são ideais para quem busca aumentar a massa muscular, melhorar a força e definição, com ênfase em áreas como peito, ombros, costas e pernas."
                },
                {
                    title: "Treinos Ilustrados para Melhor Execução",
                    description: "Cada exercício é ilustrado de forma clara, tornando fácil a compreensão e execução correta, o que reduz o risco de lesões e melhora a performance no treino."
                },
                {
                    title: "Ajuste para Níveis Intermediário e Avançado",
                    description: "As fichas são adaptadas para quem já tem experiência em musculação, proporcionando treinos mais desafiadores e eficazes, ideais para continuar a evolução e evitar platôs."
                },
                {
                    title: "Organização de Dias de Treino",
                    description: "A estrutura de dias de treino (ABC, ABCD, ABCDE e ABCDEF) ajuda a manter o equilíbrio entre o esforço e o descanso, evitando o overtraining e otimizando os resultados."
                },
                {
                    title: "Treinos Focados em Força e Hipertrofia",
                    description: "As fichas são desenhadas para aumentar tanto a força quanto a massa muscular, proporcionando treinos completos e eficazes para um corpo mais forte e definido."
                },
                {
                    title: "Desafios Progressivos para Superar Limites",
                    description: "Através da progressão gradual de intensidade, você será constantemente desafiado, o que mantém os músculos em adaptação contínua e acelera os ganhos de força."
                },
                {
                    title: "Resultados Visíveis e Rápidos",
                    description: "Com treinos bem planejados e com foco nos resultados, você notará uma evolução rápida, seja em força, volume muscular ou definição, de acordo com sua dedicação."
                },
                {
                    title: "Motivação e Disciplina no Treino",
                    description: "Com um plano claro e objetivos bem definidos, as fichas de treino ajudam a manter o foco e a motivação, garantindo consistência para alcançar seus objetivos de longo prazo."
                }
            ],
            description: ""
        },
        isConsultancy: false
    },
    {
        id: 5,
        title: "Functional Power: Planilha de Treino Funcional Intermediário/Avançado",
        videoPath: null,
        imagePath: cardBackground5,
        description: "Realizada tanto em casa quanto na academia. Com uma estrutura progressiva, ela é perfeita para níveis intermediários e avançados, oferecendo desafios constantes e resultados rápidos. Com flexibilidade e praticidade, você alcançará seus objetivos de maneira mais fácil e com maior motivação.",
        price: 19.90,
        whatYouWillLearn: {
            topics: [
                {
                    title: "Treinos Ilustrados para Facilitar a Execução",
                    description: "As planilhas apresentam exercícios ilustrados, o que facilita a compreensão e execução correta dos movimentos, ajudando a evitar erros e lesões."
                },
                {
                    title: "Planejamento Claro de Tempo de Execução",
                    description: "Cada exercício possui o tempo indicado de execução, permitindo que você saiba exatamente quanto tempo dedicar a cada movimento, garantindo um treino eficiente e bem estruturado."
                },
                {
                    title: "Flexibilidade para Treinar em Casa ou na Academia",
                    description: "Os exercícios podem ser feitos tanto em casa quanto na academia, oferecendo versatilidade para se adaptar às suas condições e preferências de treino."
                },
                {
                    title: "Desafios Progressivos para Melhor Desempenho",
                    description: "A planilha é ideal para nível intermediário/avançado, proporcionando desafios constantes para melhorar sua resistência, força e agilidade, com um aumento gradual de intensidade."
                },
                {
                    title: "Treinos Funcionais para Melhora da Performance Geral",
                    description: "o	Os treinos funcionais são projetados para melhorar a capacidade funcional do corpo, otimizando seu desempenho nas atividades diárias e esportivas."
                },
                {
                    title: "Aprimoramento da Condição Física Total",
                    description: "A planilha trabalha o corpo de maneira completa, promovendo o desenvolvimento de força, resistência, mobilidade e flexibilidade, com exercícios que ativam diversos grupos musculares simultaneamente."
                },
                {
                    title: "Motivação e Clareza nas Metas",
                    description: "Com uma planilha organizada e os tempos de cada exercício bem definidos, você terá mais motivação para cumprir os treinos, mantendo o foco nos objetivos e progressos."
                },
                {
                    title: "Ideal para Quem Busca Resultados Rápidos",
                    description: "A combinação de exercícios funcionais e o tempo de execução bem determinado proporcionam resultados rápidos, ajudando você a atingir suas metas de maneira eficaz."
                },
                {
                    title: "Personalização do Treino",
                    description: "o	Com a possibilidade de ser feito em casa ou na academia, a planilha se adapta ao seu estilo de vida e rotina, permitindo que você tenha flexibilidade para treinar em qualquer lugar."
                },
                {
                    title: "Melhora na Coordenação e Agilidade",
                    description: "Ao seguir os exercícios funcionais, você vai desenvolver melhor coordenação motora e agilidade, importantes para o desempenho físico geral e prevenção de lesões."
                }
            ],
            description: "Você deve comprar essa planilha de treino funcional porque ela oferece um planejamento claro e eficiente, com exercícios ilustrados e o tempo de execução de cada movimento, garantindo que você treine de forma segura e eficaz. Ela é ideal para quem busca melhorar a força, resistência e agilidade, podendo ser realizada tanto em casa quanto na academia. Com uma estrutura progressiva, ela é perfeita para níveis intermediários e avançados, oferecendo desafios constantes e resultados rápidos. Com flexibilidade e praticidade, você alcançará seus objetivos de maneira mais fácil e com maior motivação."
        },
        forWhoIsIndicated: {
            topics: [],
            description: ""
        },
        isConsultancy: false
    },
    {
        id: 6,
        title: "Consultoria Personalizada",
        description: "Transforme seu Corpo com a Consultoria Online de Musculação: Hipertrofia ou Perda de Peso",
        videoPath: null,
        imagePath: cardBackground6,
        price: 180.0,
        whatYouWillLearn: {
            topics: [],
            description: ""
        },
        forWhoIsIndicated: {
            topics: [],
            description: ""
        },
        isConsultancy: true
    }
];

export default products;