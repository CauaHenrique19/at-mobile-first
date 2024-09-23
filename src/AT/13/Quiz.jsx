import { useState } from "react";

import Question from "./Question";
import Score from "./Score";

const questions = [
  {
    question: "O que é design Mobile-First?",
    options: [
      "Design focado em dispositivos móveis antes de outros formatos",
      "Design de aplicativos apenas para celular",
      "Priorizar desktop sobre dispositivos móveis",
      "Uso exclusivo de grids para mobile",
    ],
    correctAnswer: 0,
    explanation:
      "Mobile-First prioriza o design para dispositivos móveis e adapta para telas maiores posteriormente.",
  },
  {
    question:
      "Qual propriedade do CSS é mais utilizada para criar layouts responsivos?",
    options: ["display: flex", "font-size", "color", "text-align"],
    correctAnswer: 0,
    explanation:
      "A propriedade `display: flex` (Flexbox) é amplamente usada para criar layouts responsivos, adaptando a distribuição de elementos conforme o tamanho da tela.",
  },
  {
    question:
      "Qual unidade é mais indicada para definir tamanhos em um layout responsivo?",
    options: ["px", "rem", "cm", "mm"],
    correctAnswer: 1,
    explanation:
      "Unidades relativas como `rem` são recomendadas para responsividade, pois se ajustam conforme o tamanho da fonte base do documento.",
  },
  {
    question: "O que são media queries?",
    options: [
      "Consultas ao servidor",
      "Ferramentas para definir cores",
      "Condicionais para aplicar CSS com base no dispositivo",
      "Formatos de imagem",
    ],
    correctAnswer: 2,
    explanation:
      "Media queries são usadas para aplicar estilos condicionais, adaptando o layout com base em características do dispositivo, como largura de tela.",
  },
  {
    question: "Qual é o breakpoint mais comum para mobile em pixels?",
    options: ["320px", "768px", "1024px", "1920px"],
    correctAnswer: 0,
    explanation:
      "320px é o breakpoint mais comum para dispositivos móveis em design responsivo.",
  },
  {
    question:
      "Em qual cenário o uso de Grid é mais recomendado do que Flexbox?",
    options: [
      "Layout simples com uma única linha",
      "Controle preciso de layouts bidimensionais",
      "Alinhamento de texto",
      "Aplicação de sombras nos elementos",
    ],
    correctAnswer: 1,
    explanation:
      "Grid é mais recomendado para layouts bidimensionais, onde é necessário um controle preciso de linhas e colunas.",
  },
  {
    question: "Qual técnica ajuda a manter a legibilidade em telas menores?",
    options: [
      "Diminuir a quantidade de texto",
      "Aumentar a fonte sem ajustar o layout",
      "Utilizar imagens menores",
      "Aplicar espaçamento adequado e ajuste de fontes",
    ],
    correctAnswer: 3,
    explanation:
      "Manter espaçamento adequado e ajustar as fontes para diferentes tamanhos de tela ajuda a preservar a legibilidade em dispositivos móveis.",
  },
  {
    question:
      "Por que é importante testar a usabilidade em diferentes dispositivos?",
    options: [
      "Para garantir que todos os recursos funcionem apenas no desktop",
      "Para garantir a acessibilidade e boa experiência em todos os dispositivos",
      "Para testar a velocidade da internet",
      "Para ajustar o design apenas para celulares",
    ],
    correctAnswer: 1,
    explanation:
      "Testar a usabilidade em diferentes dispositivos garante que todos os usuários, independentemente de dispositivo, tenham uma boa experiência e acessibilidade.",
  },
  {
    question: "O que significa viewport no contexto de design responsivo?",
    options: [
      "Tamanho da área visível de um site",
      "Altura da página",
      "Tamanho do texto",
      "Resolução de imagem",
    ],
    correctAnswer: 0,
    explanation:
      "Viewport refere-se à área visível de uma página da web, que varia conforme o dispositivo e o tamanho da tela.",
  },
  {
    question:
      "Qual atributo HTML ajuda a controlar o comportamento da viewport em dispositivos móveis?",
    options: ["<meta viewport>", "<img>", "<meta charset>", "<style>"],
    correctAnswer: 0,
    explanation:
      "A tag `<meta name='viewport'>` é usada para controlar a escala e o dimensionamento da página em dispositivos móveis.",
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          questionData={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}
