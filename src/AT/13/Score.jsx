export default function Score({ score, totalQuestions }) {
  return (
    <div className="score-container">
      <h2>Você completou o quiz!</h2>
      <p>
        Acertou {score} de {totalQuestions} questões.
      </p>
    </div>
  );
}
