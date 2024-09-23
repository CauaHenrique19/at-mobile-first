import ForumPage from "./ForumPage";

export default function App() {
  const topicoPrincipal = {
    titulo: "Como melhorar a performance de aplicações React?",
    subtitulo: "Discussão sobre boas práticas de otimização",
    descricao:
      "Vamos compartilhar dicas e práticas que ajudam a melhorar o desempenho de nossas aplicações React.",
    autor: "João Silva",
    dataPublicacao: "20/09/2024",
    curtidas: 150,
    respostas: 20,
  };

  const contribuicoes = [
    {
      autor: "Maria Souza",
      dataPublicacao: "21/09/2024",
      resposta:
        "Uma dica importante é usar React.memo para evitar renderizações desnecessárias.",
      curtidas: 45,
    },
    {
      autor: "Pedro Santos",
      dataPublicacao: "21/09/2024",
      resposta:
        "Eu também uso o useCallback para memorizar funções que não precisam ser recriadas a cada render.",
      curtidas: 30,
    },
    {
      autor: "Ana Costa",
      dataPublicacao: "21/09/2024",
      resposta:
        "Para listas grandes, o React Virtualized é uma boa solução para renderização eficiente.",
      curtidas: 25,
    },
    {
      autor: "Lucas Pereira",
      dataPublicacao: "22/09/2024",
      resposta:
        "Evitar o uso excessivo de estados globais pode melhorar a performance.",
      curtidas: 20,
    },
    {
      autor: "Beatriz Lima",
      dataPublicacao: "22/09/2024",
      resposta:
        "Eu utilizo a biblioteca SWR para otimizar o cache e fazer fetch de dados.",
      curtidas: 15,
    },
  ];

  const topicosRecentes = [
    {
      titulo: "Como estruturar um projeto React?",
      curtidas: 120,
      respostas: 30,
    },
    {
      titulo: "Melhores práticas para React Router",
      curtidas: 85,
      respostas: 25,
    },
    {
      titulo: "Hooks avançados e quando usá-los",
      curtidas: 95,
      respostas: 40,
    },
    {
      titulo: "Gerenciamento de estado com Redux",
      curtidas: 150,
      respostas: 50,
    },
    {
      titulo: "React vs Next.js: qual escolher?",
      curtidas: 200,
      respostas: 65,
    },
  ];

  const topicosMaisRespondidos = [
    {
      titulo: "State Management: Qual biblioteca usar?",
      curtidas: 180,
      respostas: 70,
    },
    {
      titulo: "Componentização e reusabilidade no React",
      curtidas: 150,
      respostas: 60,
    },
    {
      titulo: "Performance: como evitar renderizações desnecessárias?",
      curtidas: 130,
      respostas: 55,
    },
    {
      titulo: "React Context API vs Redux: qual o melhor?",
      curtidas: 200,
      respostas: 80,
    },
    {
      titulo: "Server-side rendering com Next.js",
      curtidas: 220,
      respostas: 90,
    },
  ];

  const topicosMaisCurtidos = [
    {
      titulo: "Gerenciamento de estado com React Hooks",
      curtidas: 300,
      respostas: 40,
    },
    {
      titulo: "Como usar o React Suspense para carregamento de dados?",
      curtidas: 250,
      respostas: 35,
    },
    {
      titulo: "Boas práticas para estrutura de pastas no React",
      curtidas: 200,
      respostas: 20,
    },
    {
      titulo: "O que são React Fragments e como utilizá-los?",
      curtidas: 180,
      respostas: 25,
    },
    {
      titulo: "Entendendo o JSX e como ele é compilado",
      curtidas: 230,
      respostas: 30,
    },
  ];

  return (
    <ForumPage
      topico={topicoPrincipal}
      contribuicoes={contribuicoes}
      usuario="Carlos Almeida"
      topicosRecentes={topicosRecentes}
      topicosMaisCurtidos={topicosMaisCurtidos}
      topicosMaisRespondidos={topicosMaisRespondidos}
    />
  );
}
