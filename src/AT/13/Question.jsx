import { useState } from "react";

export default function Question({ questionData, handleAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitAnswer = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(index)}
            className={selectedAnswer === index ? "selected" : ""}
            disabled={isSubmitted}
          >
            {option}
          </button>
        ))}
      </div>
      {!isSubmitted ? (
        <button
          className="confirm"
          onClick={submitAnswer}
          disabled={selectedAnswer === null}
        >
          Confirmar
        </button>
      ) : (
        <div>
          {selectedAnswer === questionData.correctAnswer ? (
            <p className="correct">Correto! {questionData.explanation}</p>
          ) : (
            <p className="incorrect">Incorreto. {questionData.explanation}</p>
          )}
          <button
            className="next"
            onClick={() => {
              handleAnswer(selectedAnswer);
              setIsSubmitted(false);
              setSelectedAnswer(null);
            }}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
